import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('addForm')
  addForm: NgForm;
  username :string;
  parentuser:string
  title = 'app';
  addUser($event) {
    this.parentuser = this.addForm.value.username;
    console.log('>> connect component come come: ', this.addForm.value);
  }
//
}
