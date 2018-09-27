import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public countries:any;
  public name;
  public p;

  constructor(private route:ActivatedRoute,private http:HttpService, private spinner:NgxSpinnerService,private location:Location,private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (map)=>{
        this.spinner.show()
        this.name=map.get("id");
        this.http.getCountry(this.name).subscribe(
          (data)=>{
            this.countries=data;
            console.log(this.countries)
            if(this.countries!=null){
              this.spinner.hide()
            }
          },
          (error)=>{
            this.router.navigate(['/not_found'])
          }
        )
      }
    );
    console.log(this.name)
  }

  public back(){
    this.location.back()
  }

}
