import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { TileComponent } from './tile/tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    GameBoardComponent,
    TileComponent,
    GameOverComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
