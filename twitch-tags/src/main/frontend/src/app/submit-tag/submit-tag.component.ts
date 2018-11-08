import { Component, OnInit } from '@angular/core';
import {TagsService} from "../services/tags.service";
import {Tag} from "../shared/models/tag.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submit-tag',
  templateUrl: './submit-tag.component.html',
  styleUrls: ['./submit-tag.component.css']
})
export class SubmitTagComponent implements OnInit {
	submittedTag: string;
	tagAlreadyExist = false;
	modalActive = false;

  constructor(private tagsService: TagsService, private router: Router) { }

  ngOnInit() {
  }

  submitTag(){
    this.tagsService.tagExists(this.submittedTag).subscribe(data => {
      if(data) {
        this.tagAlreadyExist = true;
      } else {
        this.tagAlreadyExist = false;
        const newTag = new Tag(this.submittedTag);
        this.tagsService.createTag(newTag).subscribe(() => {
          this.modalActive = true;
        })
      }
    })
  }

  addAnother() {
    this.submittedTag = '';
    this.modalActive = !this.modalActive;
  }

  goToHomepage(){
    this.router.navigate(['/']);
  }
}
