import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private router: Router) { }

  redirectByToken = (token: string) => {
    const link = `https://pec.shaparak.ir/NewIPG/?Token=${token}`;
    this.router.navigateByUrl(link);
  }
}
