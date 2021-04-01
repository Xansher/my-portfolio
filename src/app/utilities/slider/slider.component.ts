import {  AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { skillDTO } from 'src/app/skills/skills.models';
import { fromEvent, Observable, Subscription } from "rxjs";
import { ChangeDetectorRef } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { slide } from 'src/app/animation';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [slide]
})
export class SliderComponent implements OnInit, AfterViewInit{

  @ViewChild('main') main;

  constructor(private cdRef:ChangeDetectorRef) { }
 
  
  state='normal';

  @Input() 
  list:any[];
  @Input()
  sliderWidth:number =0;
  cardHeight:number=300;
  cardWidth:number=0;
  items:any[];
  nextItems:any[];
  itemsPerPage=0;
  currentIndex:number=0;
  @Input()
  count:number;

  width:number;


  loadObservable$: Observable<Event>
  loadSubscription$: Subscription
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  ngOnInit(): void {
    /*this.items=this.list;
    if(this.main){
      console.log(this.main.nativeElement.offsetWidth)
    }*/
    
    
    console.log('test');
    console.log(this.list);
    this.loadObservable$ = fromEvent(window, 'load')
    this.loadSubscription$ = this.loadObservable$.subscribe( evt => {
      if (this.main
        && this.main.nativeElement
        && this.main.nativeElement.offsetWidth){
          this.itemsPerPage= Math.floor(this.main.nativeElement.offsetWidth/200);
          this.items= this.list.slice(0, this.itemsPerPage);
          this.cardWidth= Math.floor((this.main.nativeElement.offsetWidth/this.itemsPerPage)-10.1);
        }
      
    });
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.itemsPerPage= Math.floor(this.main.nativeElement.offsetWidth/200);
      this.items= this.list.slice(0, this.itemsPerPage);
      this.cardWidth = Math.floor((this.main.nativeElement.offsetWidth/this.itemsPerPage)-10.1);
      //console.log(` items: ${this.itemsPerPage} tOTAL: ${this.main.nativeElement.offsetWidth} CARD:${this.cardWidth}`);
    });
  }

  ngAfterViewInit(): void {

    if (this.main
      && this.main.nativeElement
      && this.main.nativeElement.offsetWidth) {
      this.sliderWidth = this.main.nativeElement.offsetWidth;
  }
    if(this.sliderWidth){
      this.itemsPerPage= Math.floor(this.main.nativeElement.offsetWidth/200);
      this.cardWidth= Math.floor((this.main.nativeElement.offsetWidth/this.itemsPerPage)-10.1);
      this.items= this.list.slice(0, this.itemsPerPage);
      //this.nextItems=this.list.slice(3, 5);
      console.log(this.cardWidth);
    }  
    
    this.cdRef.detectChanges();
  }
  

  prev() {
    this.currentIndex-=1;
    this.items=this.list.slice(this.currentIndex*this.itemsPerPage, (this.currentIndex+1)*this.itemsPerPage);
  }
  next() {
    console.log(this.list.length);
    var itemsToFull=(this.currentIndex+2)*this.itemsPerPage;
    var length=this.list.length;
    if(itemsToFull>length){
      var diff=itemsToFull-length;
      this.currentIndex+=1;
      console.log(this.items);
      this.items.splice(0,1);
      console.log(this.items);
      console.log(this.list);
      
      console.log(this.list.slice(3,4));
      this.list.slice(3,4).forEach(x=> {
        this.items.push(x);
      });
    //  this.items=this.list.slice(this.currentIndex*this.itemsPerPage-diff, (this.currentIndex+1)*this.itemsPerPage-diff);
      
    }else{
      this.currentIndex+=1;
      
      //this.items=this.list.slice(this.currentIndex*this.itemsPerPage, (this.currentIndex+1)*this.itemsPerPage);
      console.log('przed'+this.items);
      //this.items.push(this.list.slice(2,4));
      console.log(this.items);
      this.items.splice(0,1);
      console.log(this.items);
      this.list.slice(3,4).forEach(x=> {
        this.items.push(x);
      });
      
    }
    
  }
  
  
  


}
