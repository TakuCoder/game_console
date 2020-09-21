import { Component ,OnInit} from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit

{


results: any[];
  //sss = results.find( ({ player_name }) => player_name === 'Kiwi' );
  //current_score = current_score;
  //maximum_score=maximum_score;


 constructor(private http: HttpClient) { }

// ngOnInit() {
//    this.reloadData();
//    console.log("asdsdsd");
//  }

ngOnInit()
{
        // Simple GET request with response type <any>
      //  this.http.get<any[]>('http://139.180.142.217:8000/').subscribe(data => {
      this.http.get<any[]>('http://127.0.0.1:8000/get_all_users').subscribe(data => 
      {

    this.results = data['results'];
    console.log(this.results);
        console.log(this.results[0].block_flag);
//console.log(sss)
})
    }

reloadData() {
    // this.game_data = this.GameServices.getGameDataList();
    // console.log(this.game_data[0].id);
    // this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
    //     this.totalAngularPackages = data.total;
    // })

  }
  getButtonText(id) 
  {
    let buttonText;
  if(id == "true")
  {
buttonText = "UNBLOCK";

  }
  else if(id == "false")
  { 
buttonText = "  BLOCK  ";

  }


  return buttonText;
}
blockUser(name,action)
{
  console.log(name+"blockUser");
console.log(action+"blockUser");

if(action == "false")
{
console.log("actionBLOCK");
  const headers = {  }
const body = { 'name': name }
this.http.post<any>('http://127.0.0.1:8000/block_user', body, { headers }).subscribe(data => {
   // this.postId = data.id;
})
}
else if(action == "true")
{
console.log("actionUNBLOCK");
  const headers = {  }
const body = { 'name': name }
this.http.post<any>('http://127.0.0.1:8000/thiyagu_block_user', body, { headers }).subscribe(data => {
   // this.postId = data.id;
})
}





}

deleteUser(name,acton)
{
  console.log(name+"deleteUser");

}
}
