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

    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 500) {
      document.getElementById('nav').style.background = "rgba(0, 0, 0, 0.8)";
    }
    if (number < 500) {
      document.getElementById('nav').style.background = "rgba(0, 0, 0, 0.0)";
    }
  }

}
