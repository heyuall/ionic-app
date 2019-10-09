import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SevicesPage } from './sevices';

@NgModule({
  declarations: [
    SevicesPage,
  ],
  imports: [
    IonicPageModule.forChild(SevicesPage),
  ],
})
export class SevicesPageModule {}
