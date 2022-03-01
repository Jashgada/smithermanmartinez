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
        name: "Sustainability ",
        info: `i. Solar Panel Charging Stations
        Collaborating with student engineering organizations, 1819 Hub,
        and P+D+C, we plan to prototype Solar Panel Charging stations
        that can be placed in Sigma Sigma Commons to charge devices,
        power wifi boosters, and allow students to work outside with ease.
        Using 75W solar panels, lithium batteries, and the ingenuity of UC
        students, we can create charging stations that will power phones,
        laptops, and wifi boosters.
        `,
        impact:`ii. Gas Free UC
        As we continue to address issues related to climate change and
        transition to a more sustainable future, it is essential that UC
        creates a plan to transition away from the use of fossil fuels on
        campus. By purchasing electrical landscaping equipment,
        induction stoves, and investing in sustainable heating systems in
        newly constructed buildings, UC can take another step in being a
        leader in the green future.`,
        plan:'',
        color:"cherry"
    },
    {
        name: "Transportation ",
      info:` i. UC Rides
      We plan to re-engage Cincinnati METRO and develop a plan to
      provide free rides for all UC students. Every UC student deserves
      access to reliable and affordable transportation that will help
      reduce traffic in Clifton, provide connections to the greater
      Cincinnati area, as well as save students time, money, and stress
      while attending the University of Cincinnati.
      `,
      impact:`ii. Better Bus Stops
      In tandem with providing UC students free METRO rides, it is
      essential that UC students have access to better bus stops. We
      plan to work with METRO to expand routes to service short-vine,
      ensure that all bus stops within a mile radius of UC have a bench,
      and remove anti-homeless infrastructure from every bus stop in
      the Clifton community.
      `,
      plan: '',
        color:"cherry"
    },
    {
        name: "Accessibility ",
        info:`i. Wheelchair Stations
        In collaboration with the Office of Accessibility, we plan to
        implement electric wheelchair stations accessible to any student
        with a disability or injury to use while traveling to and from classes.
        Taking away stress from students about how they will traverse
        across our campus while experiencing chronic illnesses and
        damages will be an essential step to ensuring thatour campus is
        accessible for all.
        `,
        impact:`ii. Improved Walking Paths
        Due to several locations that we have identified in the Clifton
        community, such as the intersection of Warner and Wheeler, we
        plan to collaborate with city officials to increase signage and
        crosswalks throughout the Clifton community. Additionally, we plan
        to work with the UC community to identify areas in the surrounding
        neighborhood where lighting can be improved for safer walks
        home.
        `,
        plan:`iii. Tampon Task Force
        Before COVID, the University committed to putting tampon
        stations in every women's and gender neutral bathroom on
        campus. We plan to work with the University to re-implement this
        commitment as well as expand the initiatives to cover all
        bathrooms on campus. UC students who menstruate deserve
        easy access to quality menstruation products while on-campus.

        iv. Revamp Lactation Rooms
        Working with the Women's center and the Office of Equity and
        Inclusion we plan to clarify who is responsible for managing our
        lactation rooms on campus as well as looking into ways that we
        can revamp and modernize the rooms themselves. Currently, like
        most rooms on campus, UCPD has to be called to gain access to
        a lactation room. This system is not equitable or accessible, but
        through the power of technology and innovation we will take the
        next steps to ensure that all student parents, care-givers, and
        pregnant individuals feel welcome and supported on our campus.

        v. Collaborating with Bearcats Pantry (BCP) Resource Center
        We plan to collaborate with P+D+C to establish an on-campus
        location for the BCP Resource Center in TUC. We plan to work
        with P+D+C to redesign the upper floor of Stratford building 14 to
        have the capability to permanently house the BCP Resource
        Center. We plan to utilize Student Government resources to help
        expand on the BCP Thanksgiving meal program for students who
        are experiencing food insecurity or are not able to travel home
        during the holidays.
        `,
        color:"cherry"
    }
]


const ACTION: IPlatform[] = [
    {
        name: "Funding Cost Centers ",
        info:`i. Every year the Student Advisory Committee on the University
              Budget (SACUB) gives recommendations to the University about
              allocating the $28 million general fee. Each year our
              identity-based centers request
              additional funds to support the programming coming out of
              their office, but with limited funding resources, these
              requests often go unfulfilled. We will work with Athletics
              to develop a plan to begin re-allocating small portions of
              their $5.5 million general fee allotment as they increase revenue
              with media contracts, ticket sales, and merchandising profits to fulfill
              requests from other cost centers on campus.

              ii. What could this fund?
                1. For EPS
                    a. The return of Emerging Ethnic Leaders
                    b. API Programming
                    c. Latinx Programming
                2. For AACRC
                    a. More support for Brother 2 brother
                    b. More support for Sisters Impacting Sisters
                    c. Expand Transitions
                    d. Expand Tyheimba
                    e. Expand Kuamka
                3. For LGBTQ+ Center
                    a. Fund professional development for staff members
        `,
        impact:'',
        plan:'',
        color:"yellowish"
    },
    {
        name: "DE&I Townhall",
        info:`i. To increase transparency and awareness for DE&I initiatives
              occurring out our University, we plan to invite faculty, staff,
              and upper level UC administration to participate in semesterly
              town halls to address concerns related to hiring and retaining
              staff as well as resources for students across UC’s campuses.
        `,
        impact:'',
        plan:'',
        color:"yellowish"
    },
    {
        name: "UC Historian Position",
        info:`i. To move forward as a University it is essential that we
              understand our past. As detailed in the McMicken report, we
              plan to work with the Provost and President’s office to
              establish an official UC Historian position that will
              document the very beginnings of our University and all
              the incidents leading to our current state,
              good, bad, and ugly.
        `,
        impact:'',
        plan:'',
        color:"yellowish"
    },
    {
        name: "Non-Student Visa Advisor ",
        info:`i. Currently about 300 of our 4500 International
              students hold Non-Student visas that complicate processes
              such as filing taxes and applying for work authorization forms.
              We plan to work with International Student Services to create
              an official title for one of their current advisors that would
              designate them as the expert on Non-Student visas. This would
              give students a streamlined process to receive assistance,
              as well as ensure International Student Services are able to
              reach students who need them the most.
        `,
        impact:'',
        plan:'',
        color:"yellowish"
    },
    {
      name: "Non-Student Visa Advisor ",
      info:`i. Currently about 300 of our 4500 International
            students hold Non-Student visas that complicate processes
            such as filing taxes and applying for work authorization forms.
            We plan to work with International Student Services to create
            an official title for one of their current advisors that would
            designate them as the expert on Non-Student visas. This would
            give students a streamlined process to receive assistance,
            as well as ensure International Student Services are able to
            reach students who need them the most.
      `,
      impact:'',
      plan:'',
      color:"yellowish"
  },
  {
    name: "UC Vogues ",
    info:`i. We plan to collaborate with the AACRC and LGBTQ+
          Center to create programming that specifically highlights
          queer POC culture. Everyone loves drag queens,
          so who wouldn’t love a ball?!
    `,
    impact:'',
    plan:'',
    color:"yellowish"
}
]

const SUSTAINABILITY: IPlatform[] = [
    {
        name: "Nippert Watch Party ",
        info:`i. To continue to support our student athletes as well as engage
              with the Cincinnati community, we plan to host an annual Nippert Watch Party
              during one of the UC Football away games. We will invite local
              businesses to serve and sell food, collaborate with the band and athletics
              to have music and giveaways, and give students a fun and amazing
              opportunity to cheer on the bearcats!
    `,
    impact:'',
    plan:'',
        color:"darkmaroon"
    },
    {
        name: "Return of Ruckus Rewards ",
        info:`i. We plan to work with Athletics and UC IT
              to bring back Ruckus Rewards in order to create an
              incentive system that will increase engagement for
              our teams that don’t receive their deserved level
              of attention such as
              Women’s sports and Esports.

    `,
    impact:'',
    plan:'',
        color:"darkmaroon"
    },
    {
      name: "Book Fair ",
      info:`i. To continue to engage with the Cincinnati community,
            we want to connect with local bookstores in the area to
            start an annual book fair that will allow students to support
            and learn about local businesses, encourage students to read,
            and provide a fun event for students to destress and explore all
            of their unique interests. `,
  impact:'',
  plan:'',
        color:"darkmaroon"
    }
]

const VARSITY: IPlatform[] = [
    {
      name: "Revamp Outreach Week",
      info:`i. In collaboration with SAB and UFB, we plan to
            revamp Outreach Week and send Student Government
            members to directly engage with student organizations
            on campus. During this week, SG members will meet with
            several student organizations to explain funding processes,
            and various resources that the Student Government network can
            provide. This will create direct links from every student organization
            to Student Government and encourage collaboration and connectivity across campus. `,
  impact:'',
  plan:'',
        color:"isthischerry"
    },
    {
      name: "Student Trustee Voting Rights ",
      info:`i. For too long, our Student Trustee has gone without
      the ability to cast a vote on essential issues that directly
      impact the student body. This not only diminishes the Student Trustees
      ability to engage with other Board of Trustee members, but also diminishes
      the voice of the Student Body as a whole. We plan to work directly with the
      Governor's Office and State Legislature to ensure that the UC student voice
      can be heard in a clear and concise manner, not lost in
      meeting minutes on UC’s website.
      `,
  impact:'',
  plan:'',
        color:"isthischerry"
    },
    {
      name: "Advocating with SACUB ",
      info:`i. Every year, the Student Advisory Committee on the
      University Budget provides recommendations to the University
      about how to allocate our $28 million dollar general fee.
      We believe it is essential that Student Government becomes
      more engaged in this process and assists SACUB in advocating
      for the implementation of its recommendations each year.
      d. Student Safety Board Reform
      i. Since the murder of Sam DuBose and the reform of Univeristy of
      Cincinnati Police Department, the Student Safety Board has not had a clear vision for their mission and purpose within Student Government. We plan to open dialogue about where SSB can engage with students and they can collaborate with offices like International Student Services, the Office of Accessibility, etc. to spread awareness about issues and
      advocate for the safety of all students on campus.

      `,
  impact:'',
  plan:'',
        color:"isthischerry"
    },
    {
      name: "Student Safety Board Reform",
      info:`i. Since the murder of Sam DuBose and the
            reform of Univeristy of Cincinnati Police Department,
            the Student Safety Board has not had a clear vision for their
            mission and purpose within Student Government. We plan to open
            dialogue about where SSB can engage with students and they can
            collaborate with offices like International Student Services,
            the Office of Accessibility, etc. to spread awareness about
            issues and advocate for the safety of all students on campus.
      `,
  impact:'',
  plan:'',
        color:"isthischerry"
    },
    {
      name: "SG Legislative Agenda ",
      info:`i. Working in tandem with our Governmental Relations
      committee, we plan to establish an SG Legislative Agenda
      on our official website that will track important local, state,
      and federal bills as well as give students tangible advocacy
      tools to engage with their Representatives and get
      involved with the civic process.

      `,
  impact:'',
  plan:'',
        color:"isthischerry"
    }
]

const YOURCAMPUS: IPlatform[] = [
    {
        name: "Sustainability ",
        info: `i. We want every student on campus to know that we are dedicated to sustainable advocacy and will continue that dedication if elected into
        these positions. Our dedication can be seen in our campaign t-shirts that were screen printed with the help of SFI (Sustainable Fashion Initiatives), our commitment to providing food options for UC students with dietary restrictions at all of our events, and our support of local business in all of our social media giveaways.
        `,
        impact:``,
        plan:``,
        color:"yellowish"
    },
    {
      name: "Collaboration and Connectivity ",
      info: `i. As you read through our platform, we want you to
      notice how many different organizations, offices, and
      community partners we plan to collaborate with in our initiatives.
      We believe that it is essential for Student Government to become
      more integrated into the social ecosystem of our campus, clifton,
      and cincinnati communities. We plan to be bolder advocates for
      everyone who is impacted by our University and that can only
       happen if we are connected to those people on a deeper level.

      `,
      impact:``,
      plan:``,
      color:"yellowish"
  },
  {
    name: "Renaming McMicken ",
    info: `i. We believe that Renaming McMicken is a crucial issue
    to the progress of our University as a whole. While we do not
    believe that we have all the answers for how this issue should
    be solved, we plan to ensure that this conversation stays at the
    forefront by bringing together a committee of campus partners
    such as the AACRC, EPS, students, faculty, staff, University Alumni,
    and organizations that have already begun advocacy on this issues.
    Working with these groups, we will identify a new name for the
    McMicken building as well as steps that the University can take
    to address all incidents of racial inequality in its past, present, and future.

    `,
    impact:``,
    plan:``,
    color:"yellowish"
},
{
  name: "YMCA Building",
  info: `i. AAs the University continues to work on
  stabilizing the YMCA building on Calhoun street,
  we plan to continuously engage P+D+C on its progress
  and plans for the future of the building. Although we
  support visions such as the Herbert + Liebman initiative
  to establish a Center for Civic Excellence, we also plan to
  engage the student body about how the
  space can be utilized for future Bearcats.

  `,
  impact:``,
  plan:``,
  color:"yellowish"
},
{
  name: "Cincinnati Public School Recruitment ",
  info: `i. We are committed to working with the
  Admissions office to strategize on improvements to our
  current CPS recruitment tactics. Schools like Hughes high
  school are not even in the top 10 of recruitment from CPS
  schools, and it is essential that UC is reaching every
  high school student in Cincinnati if we are to continue
  progressing as a University. Student Government has the
  resources to support current recruitment efforts and should
  also be engaging students about the importance of this issue
  and how they can get involved in reaching and retaining future CPS
  graduates.


  `,
  impact:``,
  plan:``,
  color:"yellowish"
},
{
  name: "Graduation Assistance ",
  info: `i. Every year, there are several students who
  are not able to graduate because of outstanding payments
  to the University. We plan to work with the UC Foundation
  and other UC administrators to ensure that every student in
  their senior year is able to graduate, and that there are systems
  in place to clear payments so that seniors can take the next steps
  in their Bearcat journey.
  `,
  impact:``,
  plan:``,
  color:"yellowish"
}
]
