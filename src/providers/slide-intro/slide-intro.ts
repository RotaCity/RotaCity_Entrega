import { Injectable } from '@angular/core';

let slide_key_name = "slide";

@Injectable()
export class SlideIntroProvider {

  private slide = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {
    
  }

  //Recuperar dados do localstorage
  getSlideData(): any {
    return localStorage.getItem(slide_key_name);
  }

  //Grava os dados do localstorage
  setSlideData(showSlide?: boolean, name?: string, username?: string) {
    let slide = {
      showSlide: false,
      name: "",
      username: ""
    };

    if(showSlide) {
      slide.showSlide = showSlide;
    }

    if(name) {
      slide.name = name;
    }

    if(username) {
      slide.username = username;
    }

    localStorage.setItem(slide_key_name, JSON.stringify(slide));

  }

}