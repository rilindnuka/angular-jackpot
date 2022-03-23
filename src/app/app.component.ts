import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spinners = [0];
  private speed = 200;
  private defaultSpeedChange = 20;
  private spin = false;
  private win = false;
  private lose = false;
  title = 'The Avengers - Jackpot';
  private stoppedFigures: number[] = [];

  addRandomToSpinners() {
    this.spinners.push(Math.floor(Math.random() * 9));
  }

  removeLastSpinner() {
    this.spinners.pop();
  }

  startSpinning() {
    this.spin = !this.spin;
    if (this.spin) {
      this.stoppedFigures = [];
      this.win = false;
      this.lose = false;
    }
  }

  onSpinnerClick(figureIndex: number) {
    this.stoppedFigures.push(figureIndex);
    this.spin = !this.checkIfAllSpinnersAreClicked();
    this.win = this.checkWinner();
    this.lose = this.checkLoser();
  }

  checkIfAllSpinnersAreClicked(): boolean {
    return this.stoppedFigures.length === this.spinners.length;
  }

  checkWinner(): boolean {
    return this.checkIfAllSpinnersAreClicked() && this.stoppedFigures.length > 1 &&
      this.stoppedFigures.every((index) => index === this.stoppedFigures[0]);
  }

  checkLoser(): boolean {
    return this.checkIfAllSpinnersAreClicked() && this.stoppedFigures.length > 1 &&
      !this.stoppedFigures.every((index) => index === this.stoppedFigures[0]);
  }

  speedUp() {
    this.speed += this.defaultSpeedChange;
  }

  slowDown() {
    this.speed -= this.defaultSpeedChange;
  }
}


