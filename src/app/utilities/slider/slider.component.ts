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

  //Arrow display settings
  leftArrowVisible:boolean=false;
  rightArrowVisible:boolean= false;

  width:number;


  loadObservable$: Observable<Event>
  loadSubscription$: Subscription
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  ngOnInit(): void {

    this.setSize();

    this.loadObservable$ = fromEvent(window, 'load')
    this.loadSubscription$ = this.loadObservable$.subscribe( evt => {
      this.setSize();
    });

    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {

      this.setSize();
     
    });
  }

  ngAfterViewInit(): void {
    

   this.setSize();
    
    this.cdRef.detectChanges();
  }

  setSize(){
    if (this.main
      && this.main.nativeElement
      && this.main.nativeElement.offsetWidth) {
      this.sliderWidth = this.main.nativeElement.offsetWidth;
  }
    if(this.sliderWidth){
      this.itemsPerPage= Math.floor(this.main.nativeElement.offsetWidth/200);
      this.cardWidth= Math.floor((this.main.nativeElement.offsetWidth/this.itemsPerPage)-10.1);
      this.translate=0;
      this.checkRightArrow();
      this.checkLeftArrow();
     
    }
    
    //this.cdRef.detectChanges();  
  }
  

  prev() {
    var size= this.list.length;
    var step= this.cardWidth+10;
    if(this.translate<0){
      this.translate+=step;
    }
    this.checkLeftArrow();
    this.checkRightArrow();
  }
  next() {
    var size= this.list.length;
    var step= this.cardWidth+10;
    if(this.translate>(-1*(size-this.itemsPerPage)*step)){
      this.translate-=step;
    }
    this.checkRightArrow();
    this.checkLeftArrow();
  }
  
  
  checkRightArrow(){
    if(this.list && this.list.length>0){
      var size= this.list.length;
      var step= this.cardWidth+10;
      if(this.translate>(-1*(size-this.itemsPerPage)*step)){
        
        this.rightArrowVisible=true;
        return;
      }
    }
    

    this.rightArrowVisible=false;
  }

  checkLeftArrow(){
    if(this.translate<0){
      this.leftArrowVisible=true;
      return;
    }
    this.leftArrowVisible=false;
  }

  getLastIndex(){
    var size=this.list.length;
    if(size<=this.itemsPerPage){
      return 0;
    }
    if(size%this.itemsPerPage == 0){
      return (size/this.itemsPerPage)-1;
    }

    return Math.floor(size/this.itemsPerPage);
  }


}
