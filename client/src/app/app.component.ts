import { Component, OnInit } from '@angular/core';
import { ApiSeviceService } from './api-sevice.service';
import { Response } from './response';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor(private apiservice:ApiSeviceService) { }

  title = 'app';
  data;
  response:string[];
  result
  ngOnInit() {
  this.apiservice.GetData().subscribe((Response:Response)=>{
    console.log(Response)
   this.data=Response.question
   this.response=Response.response;
  }, error=>{
    
  })
  }
  onValide(form:NgForm)
  {
    console.log("data",this.response[form.value.select])
 this.result=this.response[form.value.select]
  }

}
