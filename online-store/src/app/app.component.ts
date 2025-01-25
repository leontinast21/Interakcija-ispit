import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RasaService } from './rasa.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedInUser: string | null = null;

  constructor(private router: Router, private cdr: ChangeDetectorRef, private http: HttpClient, private rasaService: RasaService) {}

  ngOnInit() {
    this.loggedInUser = localStorage.getItem('loggedInUser'); 

    const defaultUsers = [
      { email: 'lea@example.com', password: 'leontina' },
      { email: 'mea@example.com', password: 'leontina' }
    ];

    defaultUsers.forEach(user => {
      if (!localStorage.getItem(user.email)) {
        localStorage.setItem(user.email, JSON.stringify(user));
      }
    });
    
    this.cdr.detectChanges();
  }

  logout() {
    localStorage.removeItem('loggedInUser'); 
    this.loggedInUser = null;
    this.router.navigate(['/login']); 
  }

 
  chatOpen = false;

toggleChat() {
  this.chatOpen = !this.chatOpen;
}

isChatOpen = false;
  userInput = '';
  messages = [
    { sender: 'bot', text: 'Hi! How can I assist you today?' }
  ];

sendMessage() {
  if (this.userInput.trim()) {
    this.messages.push({ sender: 'user', text: this.userInput });

    // Pozivamo Rasa API za slanje poruke
    this.rasaService.sendMessage(this.userInput).subscribe(
      (response) => {
        // Odgovor bota u chat
        response.forEach((msg: any) => {
          this.messages.push({ sender: 'bot', text: msg.text });
        });
      },
      (error) => {
        // Ako dođe do greške
        this.messages.push({ sender: 'bot', text: 'Sorry, I am having trouble.' });
      }
    );

    this.userInput = '';  // Reset unosa
  }
}


 
}
