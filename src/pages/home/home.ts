import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalcProvider } from '../../providers/calc/calc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  param1: string;
  param2: string;
  answer: string;
  constructor(public calc: CalcProvider) {

  }

  add()
  {
    let data = {
      param1: this.param1,
      param2: this.param2
    }

    this.calc.add(data).then(result => {
      this.answer = result;
    }).catch(err => alert("Error : " + err));
  }
  substract()
  {
    let data = {
      param1: this.param1,
      param2: this.param2
    }

    this.calc.substract(data).then(result => {
      this.answer = result;
    }).catch(err => alert("Error : " + err));
  }

  multiply()
  {
    let data = {
      param1: this.param1,
      param2: this.param2
    }

    this.calc.multiply(data).then(result => {
      this.answer = result;
    }).catch(err => alert("Error : " + err));
  }
  divide()
  {
    let data = {
      param1: this.param1,
      param2: this.param2
    }

    this.calc.divide(data).then(result => {
      this.answer = result;
    }).catch(err => alert("Error : " + err));
  }


}
