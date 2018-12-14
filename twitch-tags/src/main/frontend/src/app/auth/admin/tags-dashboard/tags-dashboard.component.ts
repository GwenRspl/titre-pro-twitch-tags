import { Component, OnInit } from '@angular/core';
import {Tag} from '../../../shared/models/tag.model';
import {Router} from '@angular/router';
import {TagsService} from '../../../services/tags.service';

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
      () => {
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
        this.tagAlreadyExist = true;
      } else {
        const newTag = new Tag(this.submittedTag);
        this.tagService.createTag(newTag).subscribe(() => {
          this.ngOnInit();
        })
      }
    })
  }

  get tags(): Tag[] {
    return this._tags;
  }
}
