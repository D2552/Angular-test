import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/models/account.interface';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent {
  
  public data = [];
  accounts: Account[] = [];

  constructor(private _http: HttpClient) {
    this._http.get<Account[]>('http://localhost:3000/accounts').subscribe(data => {
      
    this.accounts = data;

    });
  }

}