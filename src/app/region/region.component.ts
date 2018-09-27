import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { Location } from '@angular/common'

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  public countries:any
  public region:string

  constructor(private route:ActivatedRoute,private router:Router, private http:HttpService,private spinner:NgxSpinnerService,private location:Location) { }

  ngOnInit() {
    this.spinner.show()
    this.http.getRegion(this.route.snapshot.params.region).subscribe(
      (data)=>{
        if(this.countries==null){
          this.spinner.hide()
        }
        this.countries=data;
        this.region=this.countries[0].region;
      },
      (error)=>{
        this.router.navigate(['/not_found'])
      }
    );
  }

  public back(){
    this.location.back()
  }

}
