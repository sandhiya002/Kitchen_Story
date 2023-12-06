import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {common} from 'src/common';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-clientside',
  templateUrl: './clientside.component.html',
  styleUrls: ['./clientside.component.css']
})
export class ClientsideComponent {
kitchen!:FormGroup
fruits=common[0].fruits
vegetables=common[0].vegetables
biscuits=common[0].biscuits
milks=common[0].milk
arr:any[]=[]

  ischoice: boolean=false;
constructor(private fb:FormBuilder,private test:ServiceService){
  this.kitchen=this.fb.group({
    search:['',[Validators.required]]
  })

}
search(){
  this.ischoice=true;
  if(this.kitchen.get('search')?.value=="fruits"){
   this.arr=this.fruits
  }
  else{
    if(this.kitchen.get('search')?.value=="vegetables"){
      this.arr=this.vegetables
    }
    else{
      if(this.kitchen.get('search')?.value=="biscuits"){
        this.arr=this.biscuits
      }
      else{
        if(this.kitchen.get('search')?.value=="milks"){
          this.arr=this.milks
        }
      }
    }
  }
}
buy(x:any,y:any){

let dumarr=[{a:x,b:y}];
console.log(x)
console.log(y)
this.test.set(dumarr);
}
}
