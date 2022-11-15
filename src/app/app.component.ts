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
  simbolos = ['<', '>', '=', '+', '-', '/', '*', '.'];

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
        debugger;
        if (
          this.resultado.length > 1 &&
          this.simbolos.find(
            (s) => s === this.resultado.charAt(this.resultado.length - 2)
          ) &&
          this.resultado.charAt(this.resultado.length - 1) === '0' &&
          !this.simbolos.find((s) => s === op)
        ) {
          this.resultado =
            this.resultado.substring(0, this.resultado.length - 1) + op;
        } else if (
          this.resultado === '0' &&
          !this.simbolos.find((s) => s === op)
        ) {
          this.resultado = op;
        } else {
          this.resultado += op;
        }
        break;
    }
  }
  cal() {
    if (!this.resultado) {
      this.resultado = '';
    } else {
      this.resultado = eval(this.resultado) + '';
    }
  }
}
