import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name: string = '';
  number: string = '';

  contacts: { name: string; number: string }[] = [];
  selectedIndex: number = -1;

  add() {
    if (this.name.trim() === '' || this.number.trim() === '') {
      alert('Please enter name and number.');
      return;
    }


    this.contacts.push({
      name: this.name,
      number: this.number
    });

    this.clear();


  }

  update() {
    if (this.selectedIndex !== -1) {
      this.contacts[this.selectedIndex].name = this.name;
      this.contacts[this.selectedIndex].number = this.number;
      alert('Contact Updated!');
    } else {
      alert('Select a contact to update.');
    }


    this.clear();


  }

  delete() {
    const index = this.contacts.findIndex(c => c.name === this.name);


    if (index !== -1) {
      this.contacts.splice(index, 1);
      alert('Contact Deleted!');
    } else {
      alert('Contact Not Found!');
    }

    this.clear();

  }

  // Fill input fields for editing
  edith(index: number) {
    this.selectedIndex = index;
    let tempName: any = prompt("Enter update name", this.contacts[index].name)
    let tempNumber: any = prompt("Enter update name", this.contacts[index].number)

    // this.contacts.push({
    //   name: tempName,
    //   number: tempNumber
    // })

    this.contacts[index] = {
      name: tempName,
      number: tempNumber
    }

  }

  // Delete directly from table
  deletedata(index: number) {
    this.contacts.splice(index, 1);
  }

  clear() {
    this.name = '';
    this.number = '';
    this.selectedIndex = -1;
  }
}
