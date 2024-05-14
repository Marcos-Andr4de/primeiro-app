import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData(){
    this.httpClient.get(`${API_URL}/weather?q=${"Johannesburg"}&appid=${API_KEY}`).subscribe(results =>{
      console.log(results);
    })

  }

}
