import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowBookingPage } from './show-booking';

@NgModule({
  declarations: [
    ShowBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowBookingPage),
  ],
})
export class ShowBookingPageModule {}
