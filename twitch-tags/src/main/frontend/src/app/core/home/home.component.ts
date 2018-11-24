import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('TwitchTags - Home');
  }

  goToSearchByTags() {
    this.router.navigate(['/app/search']);
  }

  goToSearchByName() {
    this.router.navigate(['/app/searchName']);
  }
}
