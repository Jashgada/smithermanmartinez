import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html',
    styleUrls:['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit{
    @Input() title: string;
    @Input() backgroundColor: string;
    visible = false;

    ngOnInit(){
        
    }
    toggleContent(){
        this.visible = !this.visible;
    }

    getBackgroundColor(){
        return this.backgroundColor;
    }
}