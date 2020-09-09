import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getAllPrograms(){
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  getDataByYear(year){
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=`+ year)
  }

  getDataByLaunch(isTrue){
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=` + isTrue)
  }

  getDataByLanding(isTrue){
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=` + isTrue)
  }
}
