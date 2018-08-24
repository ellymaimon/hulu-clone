import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-featured-masthead',
  templateUrl: './featured-masthead.component.html',
  styleUrls: ['./featured-masthead.component.css']
})
export class FeaturedMastheadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 520) {
      console.log('You are out of the header');
    }
  }

}
