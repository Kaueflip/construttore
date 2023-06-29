import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EnterprisesComponent } from './pages/enterprises/enterprises.component';
import { EnterpriseDetailsComponent } from './pages/enterprises/enterprise-details/enterprise-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OpportunitiesComponent } from './pages/opportunities/opportunities.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'empreendimentos',
    component: EnterprisesComponent,
  },
  {
    path: 'empreendimentos/:id',
    component: EnterpriseDetailsComponent,
  },
  {
    path: 'contato',
    component: ContactComponent,
  },
  {
    path: 'oportunidades',
    component: OpportunitiesComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
