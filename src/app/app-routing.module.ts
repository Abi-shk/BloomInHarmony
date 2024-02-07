import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { PlantsComponent } from './plants/plants.component';
import { SeedsComponent } from './seeds/seeds.component';
import { PlantComponent } from './plant/plant.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"app-admin",component:AdminComponent},
  {path:"app-portfolio",component:PortfolioComponent},
  {path:"app-dashboard",component:DashboardComponent},
  {path:"app-about",component:AboutComponent},
  {path:"app-signup",component:SignupComponent},
  {path:"app-plants",component:PlantsComponent},
  {path:"app-seeds",component:SeedsComponent},
  {path:"app-plant",component:PlantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
