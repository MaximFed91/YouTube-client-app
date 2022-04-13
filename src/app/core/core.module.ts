import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { LoginBlockComponent } from './component/header/login-block/login-block.component';
import { FilterBlockComponent } from './component/filter-block/filter-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginBlockComponent,
    FilterBlockComponent,
    NotFoundComponent,
    MainComponent,
    AdminComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
