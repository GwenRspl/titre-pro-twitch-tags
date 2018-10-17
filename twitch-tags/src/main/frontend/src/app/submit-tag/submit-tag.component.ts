import { Component, OnInit } from '@angular/core';
import {TagsService} from "../services/tags.service";
import {Tag} from "../shared/models/tag.model";

@Component({
  selector: 'app-submit-tag',
  templateUrl: './submit-tag.component.html',
  styleUrls: ['./submit-tag.component.css']
})
export class SubmitTagComponent implements OnInit {
	submittedTag: string;
	tagAlreadyExist = false;

  constructor(private tagsService: TagsService) { }

  ngOnInit() {
  }

  toggleTagAlreadyExists(){
    this.tagAlreadyExist = !this.tagAlreadyExist;
  }

  submitTag(){
  	console.log('Tag ' + this.submittedTag + ' submitted !');
    this.tagsService.tagExists(this.submittedTag).subscribe(data => {
      if(data) {
        console.log('tag already exists');
        this.tagAlreadyExist = true;
      } else {
        console.log('ok!');
        const newTag = new Tag(this.submittedTag);
        this.tagsService.createTag(newTag).subscribe(data => {
          console.log(data);
        })
      }
    })
  }

}
