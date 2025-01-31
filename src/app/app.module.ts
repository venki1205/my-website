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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { StudentIDComponent } from './student-id/student-id.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormstaskComponent } from './formstask/formstask.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountsDetailsComponent } from './accounts-details/accounts-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';
import { TokenInterceptor } from './token.interceptor';
import { AboutUsModule } from './about-us/about-us.module';

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
    ProfileComponent,
    AccountsComponent,
    CreateVehiclesComponent,
    StudentIDComponent,
    CreateUserComponent,
    FormstaskComponent,
    VehicleDetailsComponent,
    AccountsDetailsComponent,
    StudentDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    CapitalDirective,
    BalancePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
