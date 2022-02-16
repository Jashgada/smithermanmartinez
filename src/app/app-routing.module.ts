import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampusSupportComponent } from './campus-support/campus-support.component';
import { HomeComponent } from './home/home.component';
import { MeetComponent } from './meet/meet.component';
import { PlatformComponent } from './platform/platform.component';
import { SubmitIdeasComponent } from './submit-ideas/submit-ideas.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'meet', component:MeetComponent},
  {path:'campus-support', component:CampusSupportComponent},
  {path:'platform', component:PlatformComponent},
  {path:'team', component:TeamComponent},
  {path:'ideas', component:SubmitIdeasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
