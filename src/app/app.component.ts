import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	
	title = "AliSensei's blog";
  
  	posts=[
	{
		postName : 'Article 1',
		postContent : 'Bla bla blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		postLikes : '0',
		postDate : new Date
	},
		{
		postName : 'Article 2',
		postContent : 'Bla bla blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		postLikes : '0',
		postDate : new Date
	},
		{
		postName : 'Article 3',
		postContent : 'Bla bla blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		postLikes : '0',
		postDate : new Date
	}]
	
}
