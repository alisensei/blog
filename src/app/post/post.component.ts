import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	
	@Input() postName: string;
	@Input() postContent: string;
	@Input() postLikes: number=0;
	@Input() postDate: Date;

	constructor() { }
	
	ngOnInit() {
	}


	
  	getPostContent(){return this.postContent;}
	
	getPostLikes(){return this.postLikes;}
	
	getPostDate(){return this.postDate;}

	
	
	like(){	this.postLikes++; }
	
	dislike(){ this.postLikes--; }

}
