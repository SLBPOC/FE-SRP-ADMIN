import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { SharedModule } from '../shared/shared.module';
// import { EventFilterAndSortComponent } from './components/event-filter-and-sort/event-filter-and-sort.component';

@NgModule({
  declarations: [
    OrganizationComponent,
    // EventFilterAndSortComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ]
})
export class OrganizationModule { }
