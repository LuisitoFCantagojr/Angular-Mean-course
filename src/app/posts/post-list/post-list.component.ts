import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']


})


export class PostListComponent {

  // posts = [
  //   {title:"First post", content: "This is the first post"},
  //   {title:"Second post", content: "This is the Second post"},
  //   {title:"Third post", content: "This is the Third post"},

  // ];

  @Input() posts = [];



}
