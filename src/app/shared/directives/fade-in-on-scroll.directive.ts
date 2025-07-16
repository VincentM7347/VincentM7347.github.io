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
          this.observer.unobserve(this.el.nativeElement); // Stop observing once visible
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
