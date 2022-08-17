import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FetchService {



  constructor(private http: HttpClient) {
  }

  getPhoto() {
    return  this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {

      headers: {
        Authorization: 'Client-ID lnH9VXO9Z4Iz_G_60kF04C0-_3lOStieLk-t0_U-zZE',
        orientation: 'squarish'

      }

    })
  }
}
