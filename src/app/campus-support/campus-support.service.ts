import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {find, map} from 'rxjs/operators';
import { ICampussupport } from './ICampusSupport.model';


@Injectable()
export class SupportService{
    getSupports():Observable<ICampussupport[]>{

        let subject = new Subject<ICampussupport[]>();
        setTimeout(()=> {subject.next(SUPPORT); subject.complete(); },
        100)
        return subject;
    }
    getNextSupport(id:number):ICampussupport{
        let x = SUPPORT.find(cs => cs.id == id);
        if(!x)
            return this.getNextSupport((id+1));
        return x;
    }
    getPrevSupport(id:number):ICampussupport{
        let x = SUPPORT.find(cs => cs.id == id);
        if(!x)
            return this.getNextSupport((id-1));
        return x;
    }
}

const SUPPORT:ICampussupport[] = [
    { 
        id:1,
        address: "../../assets/testimonials/1.png"
    },
    { 
        id:2,
        address: "../../assets/testimonials/2.png"
    },
    { 
        id:3,
        address: "../../assets/testimonials/3.png"
    },
	{ 
        id:4,
        address: "../../assets/testimonials/4.png"
    },
    { 
        id:5,
        address: "../../assets/testimonials/5.png"
    },
    { 
        id:6,
        address: "../../assets/testimonials/6.png"
    },
	{ 
        id:7,
        address: "../../assets/testimonials/7.png"
    },
    { 
        id:8,
        address: "../../assets/testimonials/8.png"
    },
    { 
        id:9,
        address: "../../assets/testimonials/9.png"
    },
	{ 
        id:10,
        address: "../../assets/testimonials/10.png"
    },
    { 
        id:11,
        address: "../../assets/testimonials/11.png"
    },
    { 
        id:12,
        address: "../../assets/testimonials/12.png"
    },
	{ 
        id:13,
        address: "../../assets/testimonials/13.png"
    },
    { 
        id:14,
        address: "../../assets/testimonials/14.png"
    },
	{ 
        id:15,
        address: "../../assets/testimonials/15.png"
    },
    { 
        id:16,
        address: "../../assets/testimonials/16.png"
    },
    { 
        id:17,
        address: "../../assets/testimonials/17.png"
    },
	{ 
        id:18,
        address: "../../assets/testimonials/18.png"
    },
    { 
        id:19,
        address: "../../assets/testimonials/19.png"
    },
    { 
        id:20,
        address: "../../assets/testimonials/20.png"
    },
	{ 
        id:21,
        address: "../../assets/testimonials/21.png"
    },
    { 
        id:22,
        address: "../../assets/testimonials/22.png"
    },
    { 
        id:23,
        address: "../../assets/testimonials/23.png"
    },
	{ 
        id:24,
        address: "../../assets/testimonials/24.png"
    },
	{ 
        id:25,
        address: "../../assets/testimonials/25.png"
    },
    { 
        id:26,
        address: "../../assets/testimonials/26.png"
    },
    { 
        id:27,
        address: "../../assets/testimonials/27.png"
    },
	{ 
        id:28,
        address: "../../assets/testimonials/28.png"
    },
    { 
        id:29,
        address: "../../assets/testimonials/29.png"
    },
    { 
        id:30,
        address: "../../assets/testimonials/30.png"
    },
	{ 
        id:31,
        address: "../../assets/testimonials/31.png"
    },
    { 
        id:32,
        address: "../../assets/testimonials/32.png"
    },
    { 
        id:33,
        address: "../../assets/testimonials/33.png"
    },
 	{ 
        id:34,
        address: "../../assets/testimonials/34.png"
    },
	{ 
        id:35,
        address: "../../assets/testimonials/35.png"
    },
    { 
        id:36,
        address: "../../assets/testimonials/36.png"
    },
    { 
        id:37,
        address: "../../assets/testimonials/37.png"
    },
    { 
        id:39,
        address: "../../assets/testimonials/39.png"
    },
    { 
        id:40,
        address: "../../assets/testimonials/40.png"
    },
	{ 
        id:41,
        address: "../../assets/testimonials/41.png"
    },
    { 
        id:42,
        address: "../../assets/testimonials/42.png"
    },
    { 
        id:43,
        address: "../../assets/testimonials/43.png"
    },
 	{ 
        id:44,
        address: "../../assets/testimonials/44.png"
    },
	{ 
        id:45,
        address: "../../assets/testimonials/45.png"
    },
    { 
        id:46,
        address: "../../assets/testimonials/46.png"
    },
    { 
        id:47,
        address: "../../assets/testimonials/47.png"
    },
	{ 
        id:48,
        address: "../../assets/testimonials/48.png"
    },
    { 
        id:49,
        address: "../../assets/testimonials/49.png"
    },
    { 
        id:50,
        address: "../../assets/testimonials/50.png"
    },
	{ 
        id:51,
        address: "../../assets/testimonials/51.png"
    },
    { 
        id:52,
        address: "../../assets/testimonials/52.png"
    },
    { 
        id:53,
        address: "../../assets/testimonials/53.png"
    },
 	{ 
        id:54,
        address: "../../assets/testimonials/54.png"
    },
	{ 
        id:55,
        address: "../../assets/testimonials/55.png"
    },
    { 
        id:56,
        address: "../../assets/testimonials/56.png"
    },
    { 
        id:57,
        address: "../../assets/testimonials/57.png"
    },
	{ 
        id:58,
        address: "../../assets/testimonials/58.png"
    },
    { 
        id:59,
        address: "../../assets/testimonials/59.png"
    },
    { 
        id:60,
        address: "../../assets/testimonials/60.png"
    },
	{ 
        id:61,
        address: "../../assets/testimonials/61.png"
    },
    { 
        id:62,
        address: "../../assets/testimonials/62.png"
    },
    { 
        id:63,
        address: "../../assets/testimonials/63.png"
    },
	{ 
        id:64,
        address: "../../assets/testimonials/64.png"
    },
	{ 
        id:65,
        address: "../../assets/testimonials/65.png"
    },
    { 
        id:66,
        address: "../../assets/testimonials/66.png"
    },
    { 
        id:67,
        address: "../../assets/testimonials/67.png"
    },
	{ 
        id:68,
        address: "../../assets/testimonials/68.png"
    },
    { 
        id:69,
        address: "../../assets/testimonials/69.png"
    },
    { 
        id:70,
        address: "../../assets/testimonials/70.png"
    },
    { 
        id:72,
        address: "../../assets/testimonials/72.png"
    },
    { 
        id:73,
        address: "../../assets/testimonials/73.png"
    }
]