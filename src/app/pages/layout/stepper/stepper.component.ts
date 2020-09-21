import { Component ,OnInit} from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class StepperComponent implements OnInit {

   searchString: string;
results: any[];

 constructor(private http: HttpClient) { }

 ngOnInit()
 {
         // Simple GET request with response type <any>
       //  this.http.get<any[]>('http://139.180.142.217:8000/').subscribe(data => {
       this.http.get<any[]>('http://127.0.0.1:8000/get_score').subscribe(data => {
     //this.totalAngularPackages = data.total;

     this.results = data['results'];
     console.log(this.results[0].block_flag);
 //console.log(sss)
 })
     }


}
