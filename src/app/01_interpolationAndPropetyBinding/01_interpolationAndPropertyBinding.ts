import { Component, signal } from '@angular/core';
import { isActive } from '@angular/router';

@Component({
  selector: 'app-01_interpolationAndPropertyBinding',
  imports: [],
  templateUrl: './01_interpolationAndPropertyBinding.html',
  styleUrl: './01_interpolationAndPropertyBinding.css',
})
export class a01{
  msg = "this is login component";
  imageUrl = "https://imgs.search.brave.com/WK83vgivAFvJ2pIAEvECx5fSERCMCsUDFm4Hph2_SVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzU5LzM4LzE2/LzM2MF9GXzEyNTkz/ODE2ODVfRWRCalhy/SUhuTUs0endLUjI4/enJKRmh6Q0lURnpE/MHQuanBn";
  isDisabled  = false;
  username =  "mohit";
  isActive = true;
  boxwidth = 100;
  bgcolor = 'red';
  count = signal(0);
}
