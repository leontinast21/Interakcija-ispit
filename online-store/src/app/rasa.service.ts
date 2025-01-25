import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RasaService {
  private rasaApiUrl = 'http://localhost:5005/webhooks/rest/webhook';  

  constructor(private http: HttpClient) {}

  // Funkcija za slanje poruke ka Rasa API-ju
  sendMessage(userMessage: string): Observable<any> {
    return this.http.post<any>(this.rasaApiUrl, {
      sender: 'user',  // Korisnički identifikator
      message: userMessage,
      markdown: true
    });
  }
}
