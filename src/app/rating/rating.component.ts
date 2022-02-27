import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.num > 5) {
      this.num = this.num - 5;
    }
  }
  @Input() num: number = 0;
  @Input() color: string = '';
}
