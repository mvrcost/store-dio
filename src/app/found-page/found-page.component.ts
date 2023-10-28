import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-found-page',
  templateUrl: './found-page.component.html',
  styleUrls: ['./found-page.component.css']
})
export class FoundPageComponent {
  @Input()foundPage: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.foundPage = this.route.snapshot.params['foundPage'];
    console.log(this.foundPage)
  }

}
