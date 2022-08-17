import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-photo-button',
  templateUrl: './photo-button.component.html',
  styleUrls: ['./photo-button.component.css']
})
export class PhotoButtonComponent implements OnInit {

  photo: string = '';

  ngOnInit(): void {
  }

  photos = [];

  constructor (private fetch: FetchService) {
      this.fetchPhoto();
      }


  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
  this.fetch.getPhoto().subscribe((response)=> {
    this.photo = response.urls.regular;
  });

}

}
