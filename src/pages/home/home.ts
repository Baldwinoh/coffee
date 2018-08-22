import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ShowBookingPage } from '../show-booking/show-booking';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

Cappuccino=25;
affricanCofee=15;
BaldwinoCoffe=10;
tembisan=20;
price=0.0;
counter:number=1;
quantity:number=1;

cap=false;
afri=false;
bald=false;
temb=false;

purchase():void{

this.calcCost();

}

calcCost():number{
  this.price=this.tembisan*this.quantity;
  this.price=this.Cappuccino*this.quantity;
  this.price=this.BaldwinoCoffe*this.quantity;
  this.price=this.affricanCofee*this.quantity;

if(this.cap){
this.price=(this.Cappuccino)*this.quantity;
}


if(this.afri){
  this.price=(this.affricanCofee)*this.quantity;
  }


  if(this.bald){
    this.price=(this.BaldwinoCoffe)*this.quantity;
    }

    if(this.temb){
      this.price=(this.tembisan)*this.quantity;
      }
return this.price;
}

Quantity(value:number):void {
  this.quantity += value;
}



clear():void {

  this.Cappuccino=0;
  this.affricanCofee=0;
  this.BaldwinoCoffe=0;
  this.tembisan=0;

}

orderPage():void{

  this.navCtrl.push(ShowBookingPage);
}


letsClear() {
  const confirm = this.alertCtrl.create({
    title: 'Are you sure you want to clear?',
    message: '',
    buttons: [
      {
        text: 'No',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Agree clicked');
        }
      }
    ]
  });
  confirm.present();
}
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

}
