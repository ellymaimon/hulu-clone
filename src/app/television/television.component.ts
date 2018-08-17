import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show.model'
import { Router } from '@angular/router';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css'],
  providers: [ShowService]
})

export class TelevisionComponent implements OnInit {
  shows: Show[];

  constructor(private router: Router, private showService: ShowService) {}
  
  ngOnInit(){
    this.shows = this.showService.getShows();
  }

  goToDetailPage(clickedShow: Show) {
    this.router.navigate(['tv', clickedShow.id]);
  }
}