import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMember } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  getMembers(){

      let subject = new Subject<IMember[]>();
      setTimeout(()=> {subject.next(TEAMS); subject.complete(); },
      100)
      return subject;
      console.log();
  }
  }



  const TEAMS:IMember[] =
  [
    {
      name:"Josh Squirrell",
      address: "../../assets/team-pictures/Josh_Squirrell1.jpg",
      addressHover:"../../assets/team-pictures/Josh_Squirrell2.jpg",
      addressHoverOut:"../../assets/team-pictures/Josh_Squirrell1.jpg"

    },
    {
      name:"Faalik Zahra",
      address: "../../assets/team-pictures/Faalik_Zahra1.jpg",
      addressHover:"../../assets/team-pictures/Faalik_Zahra2.jpg",
      addressHoverOut:"../../assets/team-pictures/Faalik_Zahra1.jpg"

    },
    {
      name:"Alex van Haaren",
      address: "../../assets/team-pictures/Alex_Van1.jpg",
      addressHover:"../../assets/team-pictures/Alex_Van2.jpg",
      addressHoverOut:"../../assets/team-pictures/Alex_Van1.jpg"

    },
    {
      name:"Lance Entsuah",
      address: "../../assets/team-pictures/Lance_Entsuah1.jpg",
      addressHover:"../../assets/team-pictures/Lance_Entsuah2.jpg",
      addressHoverOut:"../../assets/team-pictures/Lance_Entsuah1.jpg"

    },
    {
      name:"Inna Risma",
      address: "../../assets/team-pictures/Inna_Risma1.jpg",
      addressHover:"../../assets/team-pictures/Inna_Risma2.jpg",
      addressHoverOut:"../../assets/team-pictures/Inna_Risma1.jpg"

    },
    {
      name:"Kiley Gawronski",
      address: "../../assets/team-pictures/Kiley_ Gawronski1.jpg",
      addressHover:"../../assets/team-pictures/Kiley_ Gawronski2.jpg",
      addressHoverOut:"../../assets/team-pictures/Kiley_ Gawronski1.jpg"

    },
    {
      name:"Vidushi Shrivastava",
      address: "../../assets/team-pictures/Vidushi1.jpg",
      addressHover:"../../assets/team-pictures/Vidushi2.jpg",
      addressHoverOut:"../../assets/team-pictures/Vidushi1.jpg"
  
    },
    {
      name:"Jash Gada",
      address: "../../assets/team-pictures/Jash_Gada1.jpg",
      addressHover:"../../assets/team-pictures/Jash_Gada2.jpg",
      addressHoverOut:"../../assets/team-pictures/Jash_Gada1.jpg"
  
    },
    {
      name:"Olivia Kentner",
      address: "../../assets/team-pictures/Via_Kentner.jpg",
      addressHover:"../../assets/team-pictures/Via_Kentner2.jpg",
      addressHoverOut:"../../assets/team-pictures/Via_Kentner.jpg"
  
    },
    {
      name:"Mahathi Venkatesh",
      address: "../../assets/team-pictures/Mahathi1.jpg",
      addressHover:"../../assets/team-pictures/Mahathi2.jpg",
      addressHoverOut:"../../assets/team-pictures/Mahathi1.jpg"
  
    },
    {
      name:"Brian Bartolovich",
      address: "../../assets/team-pictures/Brian_Bartolovich1.jpg",
      addressHover:"../../assets/team-pictures/Brian_Bartolovich2.jpg",
      addressHoverOut:"../../assets/team-pictures/Brian_Bartolovich1.jpg"
  
    },
    {
      name:"Romond Duval",
      address: "../../assets/team-pictures/Romond1.jpg",
      addressHover:"../../assets/team-pictures/Romond2.jpg",
      addressHoverOut:"../../assets/team-pictures/Romond1.jpg"
  
    },
    {
      name:"Olivia Eilerman",
      address: "../../assets/team-pictures/Olivia_Eilerman1-min.jpg",
      addressHover:"../../assets/team-pictures/Olivia_Eilerman2-min.jpg",
      addressHoverOut:"../../assets/team-pictures/Olivia_Eilerman1-min.jpg"
    
    },
    {
      name:"Brad Weidner",
      address: "../../assets/team-pictures/Brad_Weidner1.jpg",
      addressHover:"../../assets/team-pictures/Brad_Weidner2.jpg",
      addressHoverOut:"../../assets/team-pictures/Brad_Weidner1.jpg"
    
    },  
    {
      name:"Quincy Allfree",
      address: "../../assets/team-pictures/Quincy_Allfree1-min.jpg",
      addressHover:"../../assets/team-pictures/Quincy_Allfree2-min.jpg",
      addressHoverOut:"../../assets/team-pictures/Quincy_Allfree1-min.jpg"
    
    },
    {
      name:"Shannon Williams",
      address: "../../assets/team-pictures/Shannon_Williams1.jpg",
      addressHover:"../../assets/team-pictures/Shannon_Williams2.jpg",
      addressHoverOut:"../../assets/team-pictures/Shannon_Williams1.jpg"
    
    },
    {
      name:"Brady Allen",
      address: "../../assets/team-pictures/Brady_Allen1.jpg",
      addressHover:"../../assets/team-pictures/Brady_Allen2.jpg",
      addressHoverOut:"../../assets/team-pictures/Brady_Allen1.jpg"
    
    },
    {
      name:"Shivani Selvam",
      address: "../../assets/team-pictures/Shivani1.jpg",
      addressHover:"../../assets/team-pictures/Shivani2.jpg",
      addressHoverOut:"../../assets/team-pictures/Shivani1.jpg"
    
    },
    {
      name:"Yash Srivastava",
      address: "../../assets/team-pictures/Yash1.jpg",
      addressHover:"../../assets/team-pictures/Yash2.jpg",
      addressHoverOut:"../../assets/team-pictures/Yash1.jpg"
    
    },
    {
      name:"Fatima Khan",
      address: "../../assets/team-pictures/Fatima1.jpg",
      addressHover:"../../assets/team-pictures/Fatima2.jpg",
      addressHoverOut:"../../assets/team-pictures/Fatima1.jpg"
    
    },
    {
      name:"Claire Leupp",
      address: "../../assets/team-pictures/Claire_leupp1.jpg",
      addressHover:"../../assets/team-pictures/Claire_Leupp2.jpg",
      addressHoverOut:"../../assets/team-pictures/Claire_leupp1.jpg"
    
    },
    {
      name:"Cassidy Lakes",
      address: "../../assets/team-pictures/Cassidy_Lakes1-min.jpg",
      addressHover:"../../assets/team-pictures/Cassidy_Lakes2-min.jpg",
      addressHoverOut:"../../assets/team-pictures/Cassidy_Lakes1-min.jpg"
    
    },
    {
      name:"Chris Stepak",
      address: "../../assets/team-pictures/Chris_Stepak1.jpg",
      addressHover:"../../assets/team-pictures/Chris_Stepak2.jpg",
      addressHoverOut:"../../assets/team-pictures/Chris_Stepak1.jpg"
    
    },
    {
      name:"Tessa Ervin",
      address: "../../assets/team-pictures/Tessa_Ervin1.jpg",
      addressHover:"../../assets/team-pictures/Tessa_Ervin2.jpg",
      addressHoverOut:"../../assets/team-pictures/Tessa_Ervin1.jpg"
    
    },
    {
      name:"Max Hogan",
      address: "../../assets/team-pictures/Max_Hogan1.jpg",
      addressHover:"../../assets/team-pictures/Max_Hogan2.jpg",
      addressHoverOut:"../../assets/team-pictures/Max_Hogan1.jpg"
    
    },
    {
      name:"Sarah Sloan",
      address: "../../assets/team-pictures/Sarah_Sloan1.jpg",
      addressHover:"../../assets/team-pictures/Sarah_Sloan2.jpg",
      addressHoverOut:"../../assets/team-pictures/Sarah_Sloan1.jpg"
    
    },
    {
      name:"Simhya Karthikeyan",
      address: "../../assets/team-pictures/Simhya1.jpg",
      addressHover:"../../assets/team-pictures/Simhya2.jpg",
      addressHoverOut:"../../assets/team-pictures/Simhya1.jpg"
    
    },
    {
      name:"Taylor Richardson",
      address: "../../assets/team-pictures/Taylor_Richardson1.jpg",
      addressHover:"../../assets/team-pictures/Taylor_Richardson2.jpg",
      addressHoverOut:"../../assets/team-pictures/Taylor_Richardson1.jpg"
    
    },
]

