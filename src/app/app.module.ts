import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { CircleComponent } from './circle/circle.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { WebsiteComponent } from './website/website.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from "@angular/common/http";
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    CalculatorComponent,
    RectangleComponent,
    BmiComponent,
    CircleComponent,
    DatabindingComponent,
    WebsiteComponent,
    ErrorComponent,
    LoginComponent,
    WelcomeComponent,
    DirectivesComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    AmazonComponent,
    MailComponent,
    PinterestComponent,
    BlogComponent,
    ImdbComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
