import { Directive, ElementRef, HostBinding, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
  standalone: true
})
export class FadeInOnScrollDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  @HostBinding('class.is-visible') isVisible = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.observer.unobserve(this.el.nativeElement); 
        }
      });
    }, { threshold: 0.1 }); 

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
