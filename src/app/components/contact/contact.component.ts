import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

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

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.subject || !this.contactForm.message) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    this.submitting = true;
    this.errorMessage = '';
    this.submitted = false;

    this.contactService.submitContact(this.contactForm).subscribe({
      next: (response) => {
        if (response.success) {
          this.submitted = true;
          this.contactForm = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            this.submitted = false;
          }, 5000);
        } else {
          this.errorMessage = response.message || 'An error occurred. Please try again.';
        }
        this.submitting = false;
      },
      error: (error) => {
        console.error('Error submitting contact form:', error);
        this.errorMessage = 'Failed to send message. Please try again later.';
        this.submitting = false;
      }
    });
  }
}

