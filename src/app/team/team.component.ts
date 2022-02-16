import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMember } from './member.model';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private teamsService: TeamsService) { }
members:Observable<IMember[]>;
  ngOnInit(): void {
    this.members = this.teamsService.getMembers();
  }

}
