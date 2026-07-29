import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  post(endpoint: any, bean: any, callback: any) {
    return this.httpClient.post(endpoint, bean, { withCredentials: true }).subscribe((data) => {
      callback(data);
    }, (error) => {
      this.handleError(error, callback);
    });
  }

  get(endpoint: any, callback: any) {
    return this.httpClient.get(endpoint, { withCredentials: true }).subscribe((data) => {
      callback(data);
    }, (error) => {
      this.handleError(error, callback);
    });
  }

  // private handleError(error: any): void {
  //   console.error('Request failed', error);
  //   if (error.status === 401) {
  //     localStorage.clear();
  //     this.router.navigate(['/login'], {
  //       queryParams: { errorMessage: error.error.error }
  //     });
  //   }
  // }
  private handleError(error: any, callback: any): void {

  console.error('Request failed', error);

  if (error.status === 503 || error.status === 500 || error.status === 0) {

    callback({
      success: false,
      result: {
        message: "Database Server Down!! Please try again later."
      }
    });

    return;
  }

  if (error.status === 401) {

    localStorage.clear();

    this.router.navigate(['/login'], {
      queryParams: {
        errorMessage: error.error.error
      }
    });

  }
}

  //   else if (error.status === 401) {
  //     localStorage.clear();
  //     this.router.navigate(['/login'], {
  //       queryParams: { errorMessage: error.error.error }
  //     });
  //   }
  //  }
  
  }

