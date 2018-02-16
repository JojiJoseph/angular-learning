// joke.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke: Joke;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  deleteJoke(joke) { // joke is not needed
    this.onDelete.emit(true);
  }
}
