import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeServiceService {
  // USING SERVICES OF RAPID API 

  getLanguagesOptionsURL = 'https://online-code-compiler.p.rapidapi.com/v1/languages/'
  postProgramURL = 'https://online-code-compiler.p.rapidapi.com/v1/';

  headers = new HttpHeaders().set(
    'content-type', 'application/json'
  ).set('X-RapidAPI-Key', '3cf3cd0faamsh56422d1b60b3ae8p1a0d21jsn2027a356948d')
    .set('X-RapidAPI-Host', 'online-code-compiler.p.rapidapi.com'
)


  constructor(private http: HttpClient,) { }

  postProgram(programToPost:string,selectedLanguage:string) {
    const response = this.http.post(this.postProgramURL, {
      "language": selectedLanguage,
      "version": "latest",
      "code": programToPost,
      "input": null
    },{headers:this.headers});
    return response;
  }

  getLanguagesOptions() { 
    const response = this.http.get(this.getLanguagesOptionsURL,  { headers: this.headers });
    return response;
  }


}
