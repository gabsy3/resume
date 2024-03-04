import { Component, signal } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  message = signal("");
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_nna5qfv', 'template_i8nne2m', e.target as HTMLFormElement, {
        publicKey: 'YEQiExwdbJKy1Yvvr',
      })
      .then(
        () => {
          this.message.set("success")
        },
        (error) => {
          this.message.set(`error ${(error as EmailJSResponseStatus).text}`)
        },
      );
  }
}
