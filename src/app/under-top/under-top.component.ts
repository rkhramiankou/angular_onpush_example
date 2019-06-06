import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-under-top',
  templateUrl: './under-top.component.html',
  styleUrls: ['./under-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnderTopComponent implements OnInit {

  @Input() price: any;

  constructor() { }

  ngOnInit() {
  }

}
