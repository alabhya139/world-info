import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public countries:any;
  public name;
  public curr;

  constructor(private route:ActivatedRoute,private router:Router, private http:HttpService,private location:Location,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    this.name = this.route.snapshot.params.code;
    this.http.getCountryByCurrency(this.name).subscribe(
      (data)=>{
        if(this.countries==null){
          this.spinner.hide()
        }
        this.countries=data;
        for(let currency of data[0].currencies){
          if(currency.code==this.name){
            this.curr=currency.name;
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
