import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer/footer.component';
import { MenuComponent } from './menu/menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
 exports:[
  FooterComponent,
  MenuComponent
 ]
})
export class FijosModule { }
