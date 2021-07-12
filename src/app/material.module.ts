import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [MatDialogModule, MatIconModule, MatButtonModule],
  imports: [MatDialogModule, MatIconModule, MatButtonModule],
})
export class MaterialModule {}
