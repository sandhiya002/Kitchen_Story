import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {common} from 'src/common';

@Component({
  selector: 'app-admin-items',
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.css']
})
export class AdminItemsComponent {
  allowadd:boolean=false;
  choosedone:any;
  disadd=false;
  fruits=common[0].fruits;
  vegetables=common[0].vegetables;
  biscuits=common[0].biscuits;
  milks=common[0].milk
  ischeck:boolean=false;
  isthischeck:boolean=false;
  avail_items:any[]=[];
  selecteditem:any[]=[]
name:string="";
price!:number;
quantity!:number;
  veg: boolean=false;
  fr: boolean=false;
  bis: boolean=false;
  mil:boolean=false;
  data: any;
  constructor(private test:ServiceService,private fb:FormBuilder){
}
ngOnInit(){
  this.ischeck=this.test.get();
  console.log(this.isthischeck);
  if(this.ischeck==true){
    this.avail_items=[{items:"fruits",id:1},
    {items:"biscuits",id:2},
    {items:"vegetables",id:3},
    {items:"milks",id:4},]
  }
   else{
     this.isthischeck=true
     console.log(this.isthischeck);
     }

}
secontypeevent(event:Event){
  this.allowadd=true;
  this.choosedone=(<HTMLInputElement>event.target).value
if(this.choosedone=="fruits"){
  this.fr=true;
  this.veg=false;
  this.bis=false;
  this.mil=false;
}
else{
  if(this.choosedone=="vegetables"){
    this.veg=true;
    this.fr=false;
    this.bis=false;
    this.mil=false;
  }
  else{
    if(this.choosedone=="biscuits"){
      this.bis=true;
      this.fr=false;
      this.veg=false;
      this.mil=false;
    }
    if(this.choosedone=="milks")
    {
      this.mil=true;
      this.bis=false;
      this.fr=false;
      this.veg=false;
    }
  }
}
}
add(){
 this.disadd=!this.disadd
}
submit(){
  console.log(this.name)
  if(this.choosedone=="fruits"){
    let dum=[{types:this.name,price:this.price,quantity:this.quantity}]
this.fruits=[...this.fruits,...dum]
  }
  else{
    if(this.choosedone=="vegetables"){
      let dum=[{types:this.name,price:this.price,quantity:this.quantity}]
      this.vegetables=[...this.vegetables,...dum]
    }
    else{
      if(this.choosedone=="biscuits"){
        let dum=[{types:this.name,price:this.price,quantity:this.quantity}]
        this.biscuits=[...this.biscuits,...dum]
      }
      else{
        if(this.choosedone=="milks"){
          let dum=[{types:this.name,price:this.price,quantity:this.quantity}]
          this.milks=[...this.milks,...dum]
        }
      }
    }
  }
}
deletee(x:any){
  if(this.choosedone=="fruits"){
    this.fruits.splice(x,1);
  }
  else{
    if(this.choosedone=="vegetables"){
      this.vegetables.splice(x,1);
    }
    else{
      if(this.choosedone=="biscuits"){
        this.biscuits.splice(x,1);
      }
      else{
        if(this.choosedone=="milks"){
          this.milks.splice(x,1);
        }
    }
  }
}
}
}