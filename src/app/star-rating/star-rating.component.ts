import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() rating: number = 0; 
  @Input() id: number = 0;
  floorValue: number = 0;
  cropwidth = 75;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.adjustWidth();
  }

  adjustWidth(){
    this.cropwidth = this.rating * 75/5;
  }

}
