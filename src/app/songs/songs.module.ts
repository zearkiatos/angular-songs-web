import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SongsComponent],
  exports: [SongsComponent],
})
export class SongsModule {}
