import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrCal = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '/'],
    ['C', '0', '.', '*'],
    ['<', '>', '='],
  ];
  resultado = '';

  reset() {
    this.resultado = '';
  }
  add(op: string) {
    switch (op) {
      case 'C':
        this.reset();
        break;
      case '=':
        this.cal();
        break;
      default:
        this.resultado += op;
        break;
    }
  }
  cal() {
    debugger;
    if (!this.resultado) {
      this.resultado = '';
    } else {
      this.resultado = eval(this.resultado);
    }
  }
}
