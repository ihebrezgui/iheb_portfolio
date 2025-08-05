import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.contact-content', {
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%'
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.contact-info', {
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%'
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Floating label logic
    const floatLabels = document.querySelectorAll('.floating');
    floatLabels.forEach((label) => {
      const input = label.querySelector('input, textarea');
      if (input) {
        input.addEventListener('focus', () => {
          label.classList.add('active');
        });
        input.addEventListener('blur', () => {
          if ((input as HTMLInputElement).value === '') {
            label.classList.remove('active');
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      alert('Please fill all fields correctly.');
      return;
    }

    const templateParams = {
      from_name: this.contactForm.value.name,
      reply_to: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };

    emailjs.send('service_fz3wb0c', 'template_jjelv7e', templateParams, '9u7IviXP5E2AGJFSm')
      .then(() => {
        alert('Message sent successfully!');
        this.contactForm.reset();
      }, (error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message.');
      });
  }
}
