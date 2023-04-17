import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  // @ts-ignore
  @Input('srvElement') element: { type: string; name: string; content: string };
  // @ts-ignore
  @Input() name: string;
  // @ts-ignore
  @ViewChild('heading') header: ElementRef;
  // @ts-ignore
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges')
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called!')
    console.log('Text Content '+this.header.nativeElement.textContent)
    console.log('Text Content of paragraph '+this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
    console.log('Text Content of paragraph '+this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!')
    console.log('Text Content '+this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterContentChecked called!')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!')
  }
}
