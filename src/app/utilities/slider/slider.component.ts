import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { skillDTO } from 'src/app/skills/skills.models';
import { fromEvent, Observable, Subscription } from "rxjs";
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit, AfterContentInit{

  @ViewChild('main') main;

  constructor(private cdRef:ChangeDetectorRef) { }
 
  
  

  @Input() 
  list;
  @Input()
  sliderWidth:number =0;
  cardHeight:number=300;
  cardWidth:number=0;
  items:any[];
  itemsPerPage=0;
  @Input()
  count:number;

  width:number;


  loadObservable$: Observable<Event>
  loadSubscription$: Subscription
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  ngOnInit(): void {
    this.items=this.list;
    if(this.main){
      console.log(this.main.nativeElement.offsetWidth)
    }
    
    
    console.log('test');
    console.log(this.list);
    this.loadObservable$ = fromEvent(window, 'load')
    this.loadSubscription$ = this.loadObservable$.subscribe( evt => {
      if (this.main
        && this.main.nativeElement
        && this.main.nativeElement.offsetWidth){
          this.itemsPerPage= Math.floor(this.main.nativeElement.offsetWidth/200);
          this.items= this.list.slice(0, this.itemsPerPage);
          this.cardWidth= (this.main.nativeElement.offsetWidth/this.itemsPerPage)-10;
        }
      
    });
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.itemsPerPage= Math.floor(this.main.nativeElement.offsetWidth/200);
      this.items= this.list.slice(0, this.itemsPerPage);
      this.cardWidth = (this.main.nativeElement.offsetWidth/this.itemsPerPage)-10;
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
      this.cardWidth= (this.main.nativeElement.offsetWidth/this.itemsPerPage)-10;
      this.items= this.list.slice(0, this.itemsPerPage);
    }  
    
    this.cdRef.detectChanges();
  }
  ngAfterContentInit(): void {
   // this.cardWidth= (this.main.nativeElement.offsetWidth/this.itemsPerPage)-10;
  }

  
  
  


}
