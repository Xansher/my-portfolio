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
  translate:number=0;
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
  
    this.loadObservable$ = fromEvent(window, 'load')
    this.loadSubscription$ = this.loadObservable$.subscribe( evt => {
      if (this.main
        && this.main.nativeElement
        && this.main.nativeElement.offsetWidth){
          this.itemsPerPage= Math.floor(this.main.nativeElement.offsetWidth/200);
          this.cardWidth= Math.floor((this.main.nativeElement.offsetWidth/this.itemsPerPage)-10.1);
        }
      
    });
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.itemsPerPage= Math.floor(this.main.nativeElement.offsetWidth/200);
      this.cardWidth = Math.floor((this.main.nativeElement.offsetWidth/this.itemsPerPage)-10.1);
      this.translate=0;
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
    
    }  
    
    this.cdRef.detectChanges();
  }
  

  prev() {
    var size= this.list.length;
    var step= this.cardWidth+10;
    if(this.translate<0){
      this.translate+=step;
    }
  }
  next() {
    var size= this.list.length;
    var step= this.cardWidth+10;
    if(this.translate>(-1*(size-this.itemsPerPage)*step)){
      this.translate-=step;
    }
    
  }
  
  
  


}
