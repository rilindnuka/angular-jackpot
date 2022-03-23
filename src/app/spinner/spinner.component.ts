import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() figures;
  @Input() initialFigure;
  @Output() stop: EventEmitter<number> = new EventEmitter<number>();

  private figureSet = [
    {name: 'Captain', url: '../assets/img/captain.png'},
    {name: 'Thor', url: '../assets/img/thor.png'},
    {name: 'Thanos', url: '../assets/img/thanos.png'},
    {name: 'Groot', url: '../assets/img/groot.png'},
    {name: 'Iron-Man', url: '../assets/img/ironman.png'},
    {name: 'Vision', url: '../assets/img/vision.png'},
    {name: 'Spiderman', url: '../assets/img/spiderman.png'},
    {name: 'Hulk', url: '../assets/img/hulk.png'},
    {name: 'Black Panther', url: '../assets/img/panther.png'}
  ];

  public currentFigure = 3;

  private _spin = false;
  private _speed = 100;
  private intervalID = null;
  constructor() { }

  ngOnInit() {
    this.currentFigure = this.initialFigure;
  }

  @Input() set speed(newValue: number) {
    if ((0 <= newValue) && (newValue <= 1000)) {
      this._speed = newValue;
    }
    if (this._spin) { // apply new speed
       this.stopSpinning();
       this.startToSpin();
    }
  }

  @Input() set spin(newValue: boolean) {
    if (newValue && !this._spin) { // only start if not already started
      this.startToSpin();
    } else if (!newValue) {
       this.stopSpinning();
    } else {
      // do nothing
    }
  }

  private startToSpin() {
    clearInterval(this.intervalID); // never shedule more then one interval
    this.intervalID = setInterval(() => {
      this.randomChangeFigure();
    }, 1000 - this._speed);
    this._spin = true;
  }

  private stopSpinning() {
    clearInterval(this.intervalID);
    this._spin = false;
  }

  private  randomChangeFigure() {
    this.currentFigure = Math.floor(Math.random() * 9);
  }

  onSpinnerClick() {
    if (this._spin) { // only emit when was spinning
      this.stopSpinning();
      this.stop.emit(this.currentFigure);
    }
  }

}
