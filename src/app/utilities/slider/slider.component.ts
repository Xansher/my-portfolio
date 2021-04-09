import {   AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { skillDTO } from 'src/app/skills/skills.models';
import { fromEvent, Observable, Subscription } from "rxjs";
import { ChangeDetectorRef } from '@angular/core';




@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: []
})
export class SliderComponent implements OnInit, AfterViewInit{

  @ViewChild('main') main;
  @ViewChild('inner') inner:ElementRef;

  constructor(private cdRef:ChangeDetectorRef) { }

 
  
  state='normal';

  @Input() 
  list:any[];
  @Input()
  sliderWidth:number =0;
  cardHeight:number=350;
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
      this.cardWidth= Math.floor((this.main.nativeElement.offsetWidth/this.itemsPerPage)-14);
      this.translate=0;
      this.inner.nativeElement.scrollLeft=0;
      //this.checkRightArrow();
      if(this.inner.nativeElement.offsetWidth<this.inner.nativeElement.scrollWidth){
        this.rightArrowVisible=true;
      }else{
        this.rightArrowVisible=false;
      }
      this.leftArrowVisible=false;
     
    }
    
    //this.cdRef.detectChanges();  
  }
  

  prev() {
    var step= this.itemsPerPage* (this.cardWidth+14);
    this.inner.nativeElement.scrollLeft -= step;
    var next=this.inner.nativeElement.scrollLeft - step;
    if(next<=0){
      this.leftArrowVisible=false;
    }
    this.rightArrowVisible=true;
  }
  next() {
    var step= this.itemsPerPage* (this.cardWidth+14);
    this.inner.nativeElement.scrollLeft += step;
    var next=this.inner.nativeElement.scrollLeft + step;
    var total= this.inner.nativeElement.scrollWidth;
    this.leftArrowVisible=true;
    if(total-step<next+2){
      this.rightArrowVisible=false;
    }
    /*this.checkRightArrow();
    this.checkLeftArrow();*/
  
  }
  
  
  checkRightArrow(){
    console.log(this.inner.nativeElement.scrollLeft);
    console.log(this.inner.nativeElement.scrollWidth);
    
    var step= this.itemsPerPage* (this.cardWidth+10);
    var next=this.inner.nativeElement.scrollLeft + step;
    var total= this.inner.nativeElement.scrollWidth;
    if(total-step>next){
      this.rightArrowVisible=true;
      return;
    } 

    this.rightArrowVisible=false;
  }

  checkLeftArrow(){
    if(this.inner.nativeElement.scrollLeft>0){
      this.leftArrowVisible=true;
      return;
    }
    this.leftArrowVisible=false;
  }




}
