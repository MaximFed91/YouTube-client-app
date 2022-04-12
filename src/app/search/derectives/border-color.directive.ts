import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import getBorderColor from 'src/app/common/helpers';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input() pubDate?: string;

  constructor(private elem: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    if (!this.pubDate) return;

    const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
    const daysPast = Math.floor((Date.now() - Date.parse(this.pubDate)) / MILLISECONDS_IN_A_DAY);
    this.render.setStyle(this.elem.nativeElement, 'border-color', getBorderColor(daysPast));
  }
}
