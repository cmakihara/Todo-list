import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: string[] = [];
  todo: string;
  novo = 0;
  index: number;

  constructor(public navCtrl: NavController) {

  }

  add() {
      this.todos.push(this.todo);
      this.todo = "";
      this.novo = 0;
  }

  delete(item) {
      var index = this.todos.indexOf(item, 0);
      if (index > -1) {
          this.todos.splice(index, 1);
      }
  }

  editar(item) {
    this.todo = item;
    this.novo = 1;
    this.index = this.todos.indexOf(item, 0);
    console.log(this.index);
  }
  modificar() {
    if (this.index > -1) {
      this.todos.splice(this.index, 1);
      this.todos.push(this.todo);
      this.novo = 0;
      this.todo = "";
    }
  }
}
