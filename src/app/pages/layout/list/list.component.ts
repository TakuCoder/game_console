// import { Component } from '@angular/core';
// import { fruits } from './fruits-list';
// import { current_score } from './fruits-list';
// import { maximum_score } from './fruits-list';
//
//
//
// @Component({
//   selector: 'ngx-list',
//   templateUrl: 'list.component.html',
//   styleUrls: ['list.component.scss'],
// })
// export class ListComponent
//
// {
//   fruits = fruits;
//   current_score = current_score;
//   maximum_score=maximum_score;
//
//   users: { name: string, title: string }[] = [
//     { name: 'Carla Espinosa', title: 'Nurse' },
//     { name: 'Bob Kelso', title: 'Doctor of Medicine' },
//     { name: 'Janitor', title: 'Janitor' },
//     { name: 'Perry Cox', title: 'Doctor of Medicine' },
//     { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
//   ];
//
//
//
// }
import { Component ,OnInit} from '@angular/core';
import { fruits } from './fruits-list';
import { Observable } from "rxjs";
import { current_score } from './fruits-list';
import { maximum_score } from './fruits-list';
import {GameServices} from './GameServices'
import {GameDataPojo} from './GameDataPojo'
import { HttpClient } from '@angular/common/http';


interface SearchResults {
    total: number;
    results: Array<object>;
}
@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit

{


results: any[];
  //game_data: Observable<GameDataPojo[]>;
  //fruits = fruits;
  current_score = current_score;
  maximum_score=maximum_score;
totalAngularPackages;
  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

 constructor(private http: HttpClient) { }

// ngOnInit() {
//    this.reloadData();
//    console.log("asdsdsd");
//  }

ngOnInit() {
        // Simple GET request with response type <any>
        this.http.get<any[]>('http://139.180.142.217:8000/').subscribe(data => {
    //this.totalAngularPackages = data.total;

    this.results = data['results'];
    console.log(this.results[0].id);
})
    }

reloadData() {
    // this.game_data = this.GameServices.getGameDataList();
    // console.log(this.game_data[0].id);
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
        this.totalAngularPackages = data.total;
    })

  }
}
