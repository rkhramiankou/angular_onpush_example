import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'on-push-example';
  value = { price: 0, obs$: interval(1200) };

  ngOnInit(): void {
    interval(3000).subscribe(() => {
      this.value = { ...this.value, price: Math.floor(Math.random() * (9 - 0) ) + 0 };
    });
  }
}
