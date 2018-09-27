import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  public countries:any;
  public name;
  public lang;

  constructor(private route:ActivatedRoute,private router:Router, private http:HttpService,private location:Location,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    this.name = this.route.snapshot.params.code;
    this.http.getCountryByLanguage(this.name).subscribe(
      (data)=>{
        if(this.countries==null){
          this.spinner.hide()
        }
        this.countries=data;
        for(let language of data[0].languages){
          if(language.iso639_1==this.name){
            this.lang=language.name;
          }
        }
      },
      (error)=>{
        this.router.navigate(['/not_found'])
      }
    )
  }

  public back(){
    this.location.back()
  }


}
