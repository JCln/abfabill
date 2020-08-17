import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceService } from 'src/app/services/interface.service';

import { ITokenIpg } from './../interfaces/itoken-ipg';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private interfaceService: InterfaceService, private errorHandler: ErrorHandlerService) { }

  redirectByToken = (token: string) => {
    const link = `https://pec.shaparak.ir/NewIPG/?Token=${token}`;
    window.location.href = link;
  }

  private token = (getedDataIdFromRoute: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        this.interfaceService.getTokenIpg(getedDataIdFromRoute).subscribe((res: Observable<ITokenIpg>) => {
          if (res) {
            resolve(res);
          }
          else {
            resolve(false);
          }
        });
      } catch (e) { reject(e) }
    });
  }
  tokenIPG = async (getedDataIdFromRoute: string) => {
    const token = await this.token(getedDataIdFromRoute);
    if (token instanceof Boolean) {
      this.errorHandler.customToaster(5000, 'خطا، لطفا دقایقی دیگر امتحان فرمایید');
      return;
    }
    if (token.status === 0) {
      this.redirectByToken(token.token);
    }
  }
}
