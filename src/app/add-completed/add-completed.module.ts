import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCompletedPageRoutingModule } from './add-completed-routing.module';

import { AddCompletedPage } from './add-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCompletedPageRoutingModule
  ],
  declarations: [AddCompletedPage]
})
export class AddCompletedPageModule {}
