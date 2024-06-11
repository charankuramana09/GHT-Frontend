import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Simulate form submission
      alert(`Message sent! Thank you, ${this.contact.name}.`);
      // Reset form after submission
      form.reset();
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
