import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlatform } from './platform.model';
import { PlatformService } from './platform.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
Platform:string = "Platform";
platforms: Observable<IPlatform[]>;
campusExp: Observable<IPlatform[]>;
action: Observable<IPlatform[]>;
sustainability: Observable<IPlatform[]>;
varsity: Observable<IPlatform[]>;
yourcampus: Observable<IPlatform[]>;
  showContentToggle:boolean = false;
  constructor(private platformService: PlatformService) { }

  ngOnInit(): void {

    this.campusExp = this.platformService.getCampusExperience();
    this.action = this.platformService.getAction();
    this.sustainability = this.platformService.getSustainability();
    this.varsity = this.platformService.getVarsity();
    this.yourcampus = this.platformService.getYourCampus();

  }
  onHeaderClick():void{
    this.showContentToggle = !this.showContentToggle;

  }

}
