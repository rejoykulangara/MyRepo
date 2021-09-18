
    import { BrowserModule } from '@angular/platform-browser';  
    import { NgModule } from '@angular/core';   
    import { AppComponent } from './app.component';  
    import { GoogleChartsModule } from 'angular-google-charts';  
    import { HttpClientModule, HttpClient } from '@angular/common/http';
    
    @NgModule({  
      declarations: [  
        AppComponent  
      ],  
      imports: [  
        BrowserModule,    
        GoogleChartsModule,
        HttpClientModule  
      ],  
      providers: [],  
      bootstrap: [AppComponent]  
    })  
    export class AppModule { }  
