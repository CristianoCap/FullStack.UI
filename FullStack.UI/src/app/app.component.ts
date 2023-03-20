import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FullStack.UI';
  username = '';

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.username = this.route.snapshot.params['username']
  }
}
