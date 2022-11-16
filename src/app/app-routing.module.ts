import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
