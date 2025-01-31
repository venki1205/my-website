import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { ErrorComponent } from './error/error.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
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
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountsDetailsComponent } from './accounts-details/accounts-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCEOComponent } from './about-us/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'website',component:WebsiteComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'home',component:HomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'error',component:ErrorComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicle',canActivate:[AuthenticationGuard],component:VehicleComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'mail',component:MailComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'blog',component:BlogComponent},
    {path:'imdb',component:ImdbComponent},
    {path:'profile',canActivate:[AuthenticationGuard],component:ProfileComponent},
    {path:'accounts',canActivate:[AuthenticationGuard],component:AccountsComponent},
    {path:'create-vehicles',canActivate:[AuthenticationGuard],component:CreateVehiclesComponent},
    {path:'student-id',canActivate:[AuthenticationGuard],component:StudentIDComponent},
    {path:'create-user',canActivate:[AuthenticationGuard],component:CreateUserComponent},
    {path:'formstask', canActivate:[AuthenticationGuard],component:FormstaskComponent},
    {path:'vehicle-details/:id', canActivate:[AuthenticationGuard],component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id', canActivate:[AuthenticationGuard],component:CreateVehiclesComponent},
    {path:'accounts-details/:id',canActivate:[AuthenticationGuard],component:AccountsDetailsComponent},
    {path:'student-details',canActivate:[AuthenticationGuard],component:StudentDetailsComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'sibling2',component:Sibling2Component},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'rating',component:RatingComponent},
    {path:'about-ceo',component:AboutCEOComponent},
    {path:'about-company',component:AboutCompanyComponent},
    {path:'payments',loadChildren: ()=> import('./payments/payments.module').then(m => m.PaymentsModule)}
    
    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
