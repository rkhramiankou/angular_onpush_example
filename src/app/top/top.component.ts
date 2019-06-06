import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopComponent implements OnInit, OnChanges {
  @Input() value: any;
  private timeoutId: any;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    this.timeoutId = setTimeout(() => {
      this.value.price = 1000;
      this.timeoutId = null;

      // inner components will not update because on push branch;
      this.cd.detectChanges();
    }, 1000);
  }

}
