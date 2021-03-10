import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }

  @Output()
  changeMarkdown = new EventEmitter<string>();

  @Input()
  label='Label';

  @Input()
  markdownContent='';

  ngOnInit(): void {
  }

}
