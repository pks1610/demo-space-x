import { Component } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX Launch Programs';
  allPrograms;
  demoImg = "../assets/img/demo.jpg";
  yearFilter = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]

  constructor(private dataServ: GetDataService){ }

  ngOnInit(){
    this.getAllProgramsData();
  }

  getAllProgramsData(){
    this.dataServ.getAllPrograms().subscribe(data => {
      this.allPrograms = data;
    })
  }

  filterByYear(year){
    this.dataServ.getDataByYear(year).subscribe(data => {
      this.allPrograms = data;
    })
  }

  filterByLaunch(istrue){
    this.dataServ.getDataByLaunch(istrue).subscribe(data => {
      this.allPrograms = data;
    })
  }

  filterByLanding(isTrue){
    this.dataServ.getDataByLanding(isTrue).subscribe(data => {
      this.allPrograms = data;
    })
  }
}
