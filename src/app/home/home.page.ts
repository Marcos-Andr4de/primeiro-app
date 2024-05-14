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
  weatherTemp :any
  todayDate = new Date()
  cityName :any
  weatherIcon :any
  weatherDetails:any

  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData(){
    this.httpClient.get(`${API_URL}/weather?q=${"Rio de Janeiro"}&appid=${API_KEY}`).subscribe((results: any) =>{
      console.log(results);
      this.weatherTemp = results ['main']
      this.cityName = results ['name']
      console.log(this.weatherTemp);
      this.weatherDetails = results['weather'][0]
      console.log(this.weatherDetails);
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`

    })

  }

}
