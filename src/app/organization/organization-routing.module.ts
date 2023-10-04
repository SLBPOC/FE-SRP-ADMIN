import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { ViewOrganization } from './components/view-organization/view-organization';
import { EditOrganization } from './components/edit-organization/edit-organization';

const routes: Routes = [
  { path: '', component: OrganizationComponent },
  { path: 'view-org', component: ViewOrganization},
  { path: 'edit-org', component: EditOrganization}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
