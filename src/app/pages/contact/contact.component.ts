import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormComponent } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private titleService: Title) {}
  ngOnInit() {
    // Defina o título da página dinamicamente
    this.titleService.setTitle('Contato | Construttore');
  }
}
