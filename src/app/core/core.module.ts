import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { LoginBlockComponent } from './component/header/login-block/login-block.component';
import { FilterBlockComponent } from './component/filter-block/filter-block.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { KeyApiInterceptor } from './interceptors/key-api.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginBlockComponent,
    FilterBlockComponent,
    NotFoundComponent,
    MainComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: KeyApiInterceptor, multi: true }],
  exports: [HeaderComponent],
})
export class CoreModule {}
