import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicPageRoutingModule } from './tic-routing.module';

import { TicPage } from './tic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicPageRoutingModule
  ],
  declarations: [TicPage]
})
export class TicPageModule {}
