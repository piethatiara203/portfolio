import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { SettingsComponent } from './settings/settings.component';
import { CategoryComponent } from './product/category/category.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'list-product',
        component: ListProductComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    SettingsComponent,
    CategoryComponent,
    ListProductComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminModule {}
