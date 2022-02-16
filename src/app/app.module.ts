import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeetComponent } from './meet/meet.component';
import { PlatformComponent } from './platform/platform.component';
import { TeamComponent } from './team/team.component';
import { CampusSupportComponent } from './campus-support/campus-support.component';
import { HomeComponent } from './home/home.component';
import { CollapsibleWellComponent } from './platform/collapsible-well.component';
import { PlatformService } from './platform/platform.service';
import { PlatformListComponent } from './platform/platform-list.component';
import { TeamsService } from './team/teams.service';
import { SupportService } from './campus-support/campus-support.service';
import { PlatformIconsComponent } from './platform/platform-icons/platform-icons.component';
import { FooterComponent } from './footer/footer.component';
import { SubmitIdeasComponent } from './submit-ideas/submit-ideas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MeetComponent,
    PlatformComponent,
    TeamComponent,
    CampusSupportComponent,
    HomeComponent,
    CollapsibleWellComponent,
    PlatformListComponent,
    PlatformIconsComponent,
    FooterComponent,
    SubmitIdeasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [
    PlatformService,
  TeamsService,
SupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
