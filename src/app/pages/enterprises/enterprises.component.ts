import { Component } from '@angular/core';
import { Enterprise } from 'src/app/models/enterprise.model';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { Title } from '@angular/platform-browser';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css'],
})
export class EnterprisesComponent {
  enterprises: Enterprise[] | undefined;
  declarations: [BreadcrumbComponent] | undefined;
  constructor(
    private enterpriseService: EnterpriseService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.getEnterprises();
    this.titleService.setTitle('Empreendimentos | Construttore');
  }

  getEnterprises() {
    this.enterpriseService.getEnterprises().subscribe((enterprises) => {
      this.enterprises = enterprises;
    });
  }
}
