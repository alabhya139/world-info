import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public country:any;
  public name;

  constructor(private route:ActivatedRoute,private http:HttpService,private spinner:NgxSpinnerService,private location:Location) { }

  ngOnInit() {
    this.spinner.show();
    this.name= this.route.snapshot.params.name;
    this.http.getCountry(this.name).subscribe(
      (data)=>{
        if(this.country==null){
          this.spinner.hide()
        }
        this.country=data;
      },
      (error)=>{

      }
    );
  }

  public isNull(data:string):boolean{
    if(data==undefined || data==null || data=="" ||data.length==0){
      return true;
    }else return false;
  }

  public back(){
    this.location.back()
  }

}
