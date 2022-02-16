import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { IPlatform } from './platform.model';

@Injectable()
export class PlatformService{
    // getPlatforms():Observable<IPlatform[]>{

    //     let subject = new Subject<IPlatform[]>();
    //     setTimeout(()=> {subject.next(PLATFORMS); subject.complete(); },
    //     100)
    //     return subject;
    // }

    getCampusExperience():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(CAMPUSEXP); subject.complete(); },
        100)
        return subject;
    }

    getAction():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(ACTION); subject.complete(); },
        100)
        return subject;
    }
    getSustainability():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(SUSTAINABILITY); subject.complete(); },
        100)
        return subject;
    }
    getVarsity():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(VARSITY); subject.complete(); },
        100)
        return subject;
    }
    getYourCampus():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(YOURCAMPUS); subject.complete(); },
        100)
        return subject;
    }
}


const CAMPUSEXP: IPlatform[] = [
    {
        name: "Career Studio Interview Booths",
        info: `Due to the COVID-19 Pandemic, more interviews are becoming virtual and there is a growing need for a space on campus where students can find quiet, an appropriate background, and good lighting. Through the addition of reservable interview booths, students can feel confident, prepared, and present during their interviews!`,
        impact:"This opportunity will be available to all members of the Bearcat Community. Reservations will be able to be made through the Bearcat Promise Career Studio similar to the Professional Headshot Booth.",
        plan:"While directly working with the staff at the Bearcat Promise Studio, we will create a request template where students can register for a time to use the space. In addition, we plan to collect student feedback through a response form receipt after the reservation is completed to continuously work to make a comfortable space to foster success. ",
        color:"cherry"
    },
    {
        name: "Steger Student Center Office Markings",
        info: "Add office directories to the Steger Student Life Center for improved access and ability to locate varying resources, centers, and offices for student growth.",
        impact:"This initiative will impact all students on campus, but most notably students harboring marginalized identities and that are seeking support during their time at UC.",
        plan:"It is important that students of all identities feel supported on this campus, and our various identity based centers are pivotal in uplifting this part of the student experience. In order for students to connect with these identity based centers, they must be able to easily locate these centers when they are strolling through campus. By adding more signage and floor directories, we hope to remind students that these offices are readily available to support them however they need while also expanding the reach of the groups listed. ",
        color:"cherry"
    },
    {
        name: "Initiative Pipeline",
        info: `In order for the Undergraduate Student Government to truly represent all students, it is important to have a visible and accessible avenue for communication.
        Through the usage of campus screens, including those at branch campuses, SG in collaboration with TUC and MainStreet Operations will create biweekly and monthly reports that will be shared with students to keep them updated with upcoming projects, events, and meetings.`,
        impact:"As SG is to serve all members of the Bearcat Community, this initiative is aimed to impact both students and staff of the University of Cincinnati. Our goal is to be as transparent and include as many students in efforts to advance the university as possible, in turn offering a platform for all to share their thoughts and hopes.",
        plan:"Through combined efforts between G+A ,SG Media Directors and Press Secretary, biweekly updates through social media channels and monthly updates will be submitted to TUC and MainStreet Operations Directors to broadcast on screens in TUC, Dining Halls, Residence Halls, both Branch Campuses, and the University Recreation Center. These updates will include: meeting times and locations, upcoming events, applications, board events, and contact information for the SG Instagram and website. ",
        color:"cherry"
    }
]


const ACTION: IPlatform[] = [
    {
        name: "Less Talk More Action",
        info: "Our university offers a multitude of offices and identity based centers with the purpose of fostering diversity, equity, and inclusion amongst our student body. Just as student organizations are spotlighted through the Annual Student Organization Fair, we propose a week-long diversity, equity and inclusion conference aimed at bringing more attention to identity-based centers, education, and active, available resources.",
        impact:"All members of the Bearcat Community - students, staff, and faculty - are welcomed and encouraged to attend, volunteer, and learn throughout this event.",
        plan:`In order to create this conference, we plan to work alongside parties and offices such as the Office of Ethnic Programs and Services, Bearcat Support Network, and the Office of Equity and Inclusion, as well as identity based centers, such as the Women’s Center, the LGBTQ+ Center, Wellness Center, and the African American Cultural Resource Center to elevate the missions, voices, and resources to all of the student body.
        This week-long event will include sessions to learn about intersectionality and educate peers on critical information about identities and backgrounds as well as events to celebrate what makes us uniquely us. The event will be conducted in a hybrid format, a combination of hybrid and in-person sessions, held at varying times each day to ensure all students are able to participate around their individual schedules.`,
        color:"yellowish"
    },
    {
        name: "Civil Discourse Training",
        info: "Undergraduate Student Government will create a shareable civil discourse training to encourage constructive dialogue between Bearcats. This initiative will be completed in correspondence with the SG Governmental Relations Committee in order to develop an additional presentation for student organizations, students, and faculty to request to become Bearcat Civil Discourse Certified similar to Mental Health Champions. ",
        impact:"All members of the Bearcat community will be positively impacted through the addition of this training to develop their journeys of cultural competency and learn how to effectively engage and address differences. ",
        plan:"Utilize SG Directors and UC Faculty members like Assistant Dean Carol Tonge Mack, to share the training to all corners of UC to reach different organizations and services on campus. While working with these parties we will encourage organizations to include this training as a part of their new member process and / or as a part of their yearly organization RESET. ",
        color:"yellowish"
    },
    {
        name: "Mental Health Advocacy Week",
        info: "The student experience is at the priority of our agenda for this campaign, and mental health is undoubtedly one of the most important topics for students across our campus. Advocating and prioritizing the mental health of our students is of the utmost importance and together, Student Government will host a Mental Health Reset Week with campus and community partners to increase awareness of intersectionality and care. ",
        impact:"Mental health resources are available to all students likewise our Mental Health Reset Week will be open to all interested students to attend and reset.",
        plan:"In order to craft a Mental Health Advocacy week, we plan to work with campus resources, such as Bearcat Support Network, University of Cincinnati Counseling and Psychological Services, the UC Wellness Center and many community and campus partners to build a comprehensive schedule that educates all on vital topics for self and community growth. We hope that this week provides a chance for students to take a moment away from their class work, extracurriculars, and schedules to learn about the importance of mental health. Adjacent to this event, Student Government will encourage organizations to take a week off from weekly meetings, events, and commitments to pay the time forward to their members. This follows the same format as both UC’s and Ohio State University’s Recess Weeks from Fall 2020 Semester.",
        color:"yellowish"
    },
    {
        name: "Your School, Your Voice Information Request",
        info: "An addition of virtual form to the Student Government website for students to suggest initiatives, present feedback, and request contact information. ",
        impact:"This initiative will be open to all students on campus, especially those who are looking to make campus wide change and gather support from fellow students. ",
        plan:`Our plan is to establish a page on the Student Government Website dedicated to having the student voice heard.  Currently, there is no platform for students within Student Government and for those who are not to provide input on what they would like to see happen on this campus. 
        On this page, we will create a section for students to (1) suggest initiatives/changes they would like to see, (2) provide feedback on past or ongoing Student Government initiatives, and (3) request contact information of Student Government officials who they would like to reach out to for further collaboration. 
        Student Government works for you and in order to have the student voice heard, we must establish a platform for students to go to with their suggestions.`,
        color:"yellowish"
    }
]

const SUSTAINABILITY: IPlatform[] = [
    {
        name: "Reusable Dining Sets",
        info: `Let’s promote sustainable practice while eating on and around campus from day one by creating and dispersing a supply of reusable ware and straws to students.
        Creating a greener university is a lifelong commitment for this university and by targeting our dining halls on campus, we can work to create sustainable change in our plastic usage.`,
        impact:"We believe that this initiative would benefit all students, but our main focus would be to support students with on-campus meal plans. Although these items are not limited to only be used on-campus, but can be used anywhere Bearcats roam!",
        plan:`In order to begin this process, we will partner with UC Food Services and UC Sustainability to identify reusable tupperware and straw options that would be best suited for our students.
        In addition, SG will work alongside Residential Education and Development (RED) and Housing Services to distribute these items to on-campus residents at the beginning of the Fall 2021 Semester. Additional sets will be available for students to pick up during Welcome Week and early Fall Semester events.`,
        color:"darkmaroon"
    },
    {
        name: "Everyone Eats - Bearcat Fuel Fridge",
        info: `In between classes and need a snack? Or heading home for the night and haven’t gone grocery shopping yet? We get it!
        Inspired by Cincinnati Local Fridges, SG with support of the Bearcat Food Recovery Network, UC Wellness Center, and Dining Services to add a communal campus fridge for students to take what they need and give what they can.
        Not only will we work to bridge the gap between food insecurity on campus, but lower food waste.`,
        impact:`Everyone Eats.
        The Bearcat Fuel Fridge will be available to all students on UC’s Main Campus, but with greater focus on supporting students who face food insecurity in their daily lives. 
        On busy days, walking to local food pantries can be difficult. Place in a centrally-located space, the new Wellness Cafe located in the old Steger Starbucks lounge, with nutritional items and allergy friendly foods for students to take advantage of so that they do not have to worry where their next meal will be.
        `,
        plan:`In order to establish the Bearcat Fuel Fridge, we establish bonds and communication between Dining Services, Bearcat Food Recovery Network, local businesses, Bearcat Pantry, and UC Wellness Center to obtain items to stock the refrigerator with. 
        In addition, we plan to have our fellow food safety trained Bearcats and staff members manage and maintain the contents of the fridge during operational hours to ensure allergies, nutrition, best by dates are respected and clearly administered. 
        In order to serve all Bearcats and know their needs, a QR Code form will be located at the fridge for participants to scan and fill out based upon their experience. I.e. What items students would like to see added, dietary needs, number of items picked up that day, and feedback submission.  
        `,
        color:"darkmaroon"
    },
    {
        name: "Career Ready Clothing Drive",
        info: "Create a university-wide clothing drive to update and support students taking their next step to future success.",
        impact:"This initiative will affect all students as they will be invited to attend and donate to the Career Ready Clothing Drive. ",
        plan:`Our goal is to place emphasis on providing affordable business professional attire for students to obtain and wear proudly when venturing out to experiential learning and future career opportunities.
        While working with varying offices and career readiness centers, we will build a plethora of updated, styled clothing items for students to pick up and add to their closets. This initiative will be a fluid process with no official end date in order to continue the collaboration. 
        Social media spotlights and email communication will be heavily shared with students regarding the drive when nearing Career Fairs and organization recruitments. 
        `,
        color:"darkmaroon"
    }
]

const VARSITY: IPlatform[] = [
    {
        name: "The Women of One Team",
        info: `When women win, we all win. Together we will increase exposure and empowerment within UC Women’s Sports by advancements in advertisement, exposure, and game coverage.
        Our university is well known for our pride and cheer for our athletic teams as our sport’s success  is a monumental part of our campus experience. 
        As the first all-women slate, we would like to amplify the recognition, hype, and game day coverage of UC Women’s Athletics and individual athletes.
        `,
        impact:`This initiative will impact all UC sports fans and student athletes near and far.`,
        plan:`Our plan for this initiative is broken up into advocacy, exposure, and connection.
        We will continue the work of Hannah Markel’s and Dr. Sojka’s work and legacy of the Inspire Equip Connect Program (IEC) to further positively affect the next generations of Bearcats to come. This program will be expanded to have more members of the community trained and able to attend IEC sessions. 
        Expand recognition of women student athletes and team achievements from additions of, but not limited too: Women Athlete of the Month, game day highlights, promote scheduled meets and events, and recognition of the powerful women-identifying coaching staff. 
        `,
        color:"isthischerry"
    },
    {
        name: "Expand Bearcat Fridays",
        info: `Bring back the excitement of one of UC’s decades long traditions in all it’s glory that will have you boasting from coast to coast! By welcoming local and student run businesses to the game day excitement through the addition of tabling we will foster a community of support for holistic school spirit. `,
        impact:`Expanding Bearcat Fridays means all members of the UC community are invited and highly encouraged to partake in the newest addition of this experience! Through increasing visibility to student entrepreneurial efforts and community members, we hope to positively impact business success. This would also expand inward to the first-year and transfer experience by introducing new Bearcats to all that Cincinnati has to offer!`,
        plan:`Why should Bearcat Fridays stop at game day festivities? We envision spirit and excitement returning to campus with strength in unity as our backbone. 
        Student and locally run businesses will be invited to table during the Friday celebrations in a format similar to that of the annual SG Farmer’s Market. Here businesses are able to expand to new audiences and introduce students to all that is offered at UC. 
        Organizations, Clubs, Identity Based Centers, and Campus Resources will be proudly welcomed to table along MainStreet to introduce their groups to the student body, outreach for recruitment, and increase the excitement. 
        Events including Bearcat photo opportunities, team shoutouts, and spirit squads will also be found in the line up. 
        `,
        color:"isthischerry"
    },
    {
        name: "UC Re-Envisioned",
        info: `With a campus full of passion and color, we know many members of the student body who are always ready to show off their spirit! 
        As we reopen campus we see the need to come back with a new look - students will make their mark on campus with an official spirit rock, outdoor student lounge space, and additional mural spaces.
        `,
        impact:`This initiative will impact all Bearcats! By providing more places for Bearcats to express their pride, we will work to create a brighter and more spirited UC for all. `,
        plan:`To tackle these three ideas, we will work with numerous on campus and off campus groups to ensure all safety precautions, funding needs, and campus requests are fulfilled. 
        Unlike many large universities and institutions, UC does not hold a Spirit Rock for students to decorate and check out. With the addition of our own, organizations and students can advertise and bring awareness to events in a new, exciting format. 
        Both collaborative and decorative campus mural spaces will be created for student’s to reclaim their time at UC and manifest their future success in a creative and expressive manner as well as highlight red & black on campus! 
        Create an on campus location where students can gather to showcase their talents of arts, organizations could meet in fair weather, and re-envisioned to make campus more versatile and up to date with the progression of student experience. We aim to survey the student body and gauge what an ideal outdoor student lounge space would look like in order to craft a working floor plan that all can make their own alongside campus resources and offices. 
        `,
        color:"isthischerry"
    }
]

const YOURCAMPUS: IPlatform[] = [
    {
        name: "Selected Student Submitted Platform Point",
        info: `Due to COVID-19, there has been an obvious drop in funds provided for Registered Student Organizations on campus. The Gable + Allgood administration plans to partner with the University Funding Board, a board of the Undergraduate Student Government, to hold townhall style meetings where student organizations are able to attend in a more direct method of improving RSO access to funds.`,
        impact:``,
        plan:``,
        color:"yellowish"
    }
]