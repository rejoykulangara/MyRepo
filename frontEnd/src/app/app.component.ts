
    import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';  
    import { MyDataServiceService } from './my-data-service.service';

    @Component({  
      selector: 'app-root',  
      templateUrl: './app.component.html',  
      styleUrls: ['./app.component.css']  
    })  
    export class AppComponent implements OnInit{  
  
      id :any;
    
      fromServer = [
        {'State':"","Active":0},
        {'State':"","Active":0},
        {'State':"","Active":0},
        {'State':"","Active":0},
        {'State':"","Active":0}]
      
    
      constructor(private service: MyDataServiceService){}  
      ngOnInit() {
        this.prepareChart();
        this.id = setInterval(() => {
          this.prepareChart();
          }, 5000);
        
      }  
     
      //To destroy the the set interwell whene ever  we switch back from  the screen
      ngOnDestroy() {
        if (this.id) {
          clearInterval(this.id);
        }
      }

      //prepares the chart and polles the req in every 5 sec interwell
      prepareChart() {
        this.service
        .getChartInfo()
        .subscribe((record: any) => {
          let j = 15;
          for (let i = 0; i < 5; i++) {   
            j++    
            
              this.fromServer[i]['State'] = record.statewise[j].state;
              this.fromServer[i]['Active'] = record.statewise[j].active;
             
          }
            
             
        });
      }
    }  
