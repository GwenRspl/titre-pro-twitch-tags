import { Component, OnInit } from '@angular/core';
import {Tag} from "../../../shared/models/tag.model";
import {Router} from "@angular/router";
import {TagsService} from "../../../services/tags.service";

@Component({
  selector: 'app-tags-dashboard',
  templateUrl: './tags-dashboard.component.html',
  styleUrls: ['./tags-dashboard.component.css']
})
export class TagsDashboardComponent implements OnInit {
  private _tags: Tag[];
  submittedTag: string;
  tagAlreadyExist = false;

  constructor(private router: Router, private tagService: TagsService) { }

  ngOnInit() {
    this.tagService.getTags().subscribe(
      data => {
        this._tags = data;
        this._tags.sort((n1, n2) => {
          if (n1.id > n2.id) {
            return 1;
          }
          if (n1.id < n2.id) {
            return -1;
          }
          return 0;
        });
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteTag(tag: Tag) {
    this.tagService.deleteTag(tag).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    )
  }

  addNewTag() {
    this.tagService.tagExists(this.submittedTag).subscribe(data => {
      if(data) {
        console.log('tag already exists');
        this.tagAlreadyExist = true;
      } else {
        console.log('ok!');
        const newTag = new Tag(this.submittedTag);
        this.tagService.createTag(newTag).subscribe(data => {
          console.log(data);
          this.ngOnInit();
        })
      }
    })
  }

  get tags(): Tag[] {
    return this._tags;
  }
}
