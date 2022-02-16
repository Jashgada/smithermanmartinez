import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'platform-icons',
  templateUrl: './platform-icons.component.html',
  styleUrls: ['./platform-icons.component.css']
})
export class PlatformIconsComponent implements OnInit {

  @Input() description:boolean;
  @Input() lastPlat: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
