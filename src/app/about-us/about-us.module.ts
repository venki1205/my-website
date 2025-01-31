import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCEOComponent } from './about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-company/about-company.component';



@NgModule({
  declarations: [
    AboutCEOComponent,
    AboutCompanyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
