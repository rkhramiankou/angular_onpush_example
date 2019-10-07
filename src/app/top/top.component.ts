import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopComponent implements OnInit, OnChanges {
  @Input() value: { price: number, obs$: Observable<any> };
  private timeoutId: any;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.value.obs$.subscribe((event) => {
      this.value = { ...this.value, price: 1200 };
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    this.timeoutId = setTimeout(() => {

      // this.value.price = 1000;
      // this.value = { ...this.value, price: 1000 };
      this.timeoutId = null;

      // inner components will not update because on push branch do not track timeouts/input changes from here;
      // this.cd.detectChanges();
    }, 1000);
  }

  onClick(event: Event): void {
    console.log('top OnPush clicked');
  }

}
