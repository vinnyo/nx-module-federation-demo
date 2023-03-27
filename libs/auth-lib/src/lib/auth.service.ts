import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userName = '';

  public get userName(): string {
    return this._userName;
  }

  constructor() {
    console.log("## Auth service library");
  }

  login(userName: string, password: string): void {
    this._userName = userName;
  }

  logout(): void {
    this._userName = '';
  }
}
