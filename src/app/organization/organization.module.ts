import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { SharedModule } from '../shared/shared.module';
import { RemoveOrganizationDialog } from './components/remove-organization/remove-organization';
import { AddOrganizationDialog } from './components/add-organization/add-organization';
import { ViewOrganization } from './components/view-organization/view-organization';
import { EditOrganization } from './components/edit-organization/edit-organization';
// import { EventFilterAndSortComponent } from './components/event-filter-and-sort/event-filter-and-sort.component';

@NgModule({
  declarations: [
    OrganizationComponent,
    RemoveOrganizationDialog,
    AddOrganizationDialog,
    ViewOrganization,
    EditOrganization
    
    // EventFilterAndSortComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ]
})
export class OrganizationModule { }
