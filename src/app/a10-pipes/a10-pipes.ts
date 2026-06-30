import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertCurrencyPipe } from './pipe/convert-currency-pipe';

@Component({
  selector: 'app-a10-pipes',
  imports: [CommonModule ,PipeShortNamePipe ,ConvertCurrencyPipe],
  templateUrl: './a10-pipes.html',
  styleUrl: './a10-pipes.css',
})
export class A10Pipes {
  lName = "mohit";
  uName = "MOHIT";

  today = new Date();

  amount = 2500;

  per = 0.35;

  user = {
    name : "mohit",
    age : 35
  }

  fullName = "Piyush kohli"

  usd = 10;
  usdToInr = 95;
}
