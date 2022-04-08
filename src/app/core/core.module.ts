import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { LoginBlockComponent } from './component/header/login-block/login-block.component';
import { FilterBlockComponent } from './component/filter-block/filter-block.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginBlockComponent,
    FilterBlockComponent,
    NotFoundComponent,
    MainComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
