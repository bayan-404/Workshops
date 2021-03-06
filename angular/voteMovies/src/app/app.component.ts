import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'voteMovies';
  chosen: boolean = false;
  movieIndex: number = -1;

  posters = {
    split: '../assets/splitPoster.jpg',
    theInvisibleGuest: '../assets/theInvisableGuest.jpg',
    WolfCheldrin: '../assets/wolfCheldrinPoster.jpg',
    yourName: '../assets/yourNamePoster.jpg',
  };

  onVote(index: number) {
    this.movieIndex = index;
    this.chosen = true;
  }

  isChosen(index: number) {
    return this.movieIndex === index;
  }
}
