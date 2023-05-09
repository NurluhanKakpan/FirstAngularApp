import {AfterViewInit, Directive, ElementRef, OnChanges, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit,AfterViewInit {

  constructor(
    private _elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this._elementRef.nativeElement.focus();
  }

  ngOnInit(): void {
  }

}
