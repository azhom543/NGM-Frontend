import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  submitting = false;
  errorMessage = '';

  onSubmit() {
    const body = new URLSearchParams();
  body.set('form-name', 'contact');
  body.set('name', this.contactForm.name);
  body.set('email', this.contactForm.email);
  body.set('subject', this.contactForm.subject);
  body.set('message', this.contactForm.message);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString()
  })
  .then(() => {
    this.submitted = true;
  })
  .catch(() => {
    this.errorMessage = 'Submission failed. Please try again.';
  });
  }
}