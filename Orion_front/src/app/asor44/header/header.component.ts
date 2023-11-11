import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const icons = this.el.nativeElement.querySelector('.logo_asor');
    const nav = this.el.nativeElement.querySelector('nav');
    const links = this.el.nativeElement.querySelectorAll('nav li');

    icons.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        this.renderer.removeClass(nav, 'active');

      } else {
        this.renderer.addClass(nav, 'active');

      }
    });


    // links.forEach((link) => {
    //   link.addEventListener('click', () => {
    //     this.renderer.removeClass(nav, 'active');
    //   });
    // });
  }
}

