import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({


    imports:[MatButtonModule,    
            MatIconModule, 
            MatFormFieldModule, 
            MatInputModule,
            MatListModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatSelectModule,
            MatCardModule,
            MatGridListModule,
            FormsModule,
            ReactiveFormsModule,
            MatToolbarModule,
            MatSnackBarModule
        ],


    exports:[MatButtonModule, 
            MatIconModule, 
            MatFormFieldModule,
            MatInputModule,
            MatListModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatSelectModule,
            MatCardModule,
            MatGridListModule,
            FormsModule,
            ReactiveFormsModule,
            MatToolbarModule,
            MatSnackBarModule
        ]    


})

export class MaterialModule{}