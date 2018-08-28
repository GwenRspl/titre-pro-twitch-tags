import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-tag',
  templateUrl: './submit-tag.component.html',
  styleUrls: ['./submit-tag.component.css']
})
export class SubmitTagComponent implements OnInit {

	submittedTag: string;

  constructor() { }

  ngOnInit() {
  }

  submitTag(){
  	console.log('Tag ' + this.submittedTag + ' submitted !')
  }

}
