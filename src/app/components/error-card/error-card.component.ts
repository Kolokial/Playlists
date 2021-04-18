import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss'],
})
export class ErrorCardComponent implements OnInit {
  public cuteKittensUrl: string = '/assets/cute-kittens.jpg';

  ngOnInit(): void {}
}
