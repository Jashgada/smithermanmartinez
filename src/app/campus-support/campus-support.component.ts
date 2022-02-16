import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SupportService } from './campus-support.service';
import { ICampussupport } from './ICampusSupport.model';

@Component({
  selector: 'app-campus-support',
  templateUrl: './campus-support.component.html',
  styleUrls: ['./campus-support.component.css']
})


export class CampusSupportComponent implements OnInit {

  supports: Observable<ICampussupport[]>;
  modalImg:ICampussupport = {id:0, address:""};
  imgOpen:boolean = false;
  constructor( private supportService: SupportService) { }

  ngOnInit(): void {
this.supports = this.supportService.getSupports();
  }

  openImage(src:ICampussupport){
    console.log(src);
    this.modalImg = {id:0, address:""};
    this.modalImg.id = src.id;
    this.modalImg.address = src.address;
this.imgOpen = true;
  }
closeImage(){
  this.imgOpen = false;
}
slideNext(){
 this.modalImg =  this.supportService.getNextSupport((this.modalImg.id) + 1);
}

slidePrev(){
  this.modalImg =  this.supportService.getPrevSupport((this.modalImg.id) - 1);
 }

}
