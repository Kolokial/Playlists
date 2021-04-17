import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorCardComponent } from './error-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ErrorCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [ErrorCardComponent],
})
export class ErrorCardModule {}
