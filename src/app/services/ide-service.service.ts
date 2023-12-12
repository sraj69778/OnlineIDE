import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from 'config/compiler.api.config';

@Injectable({
  providedIn: 'root'
})
export class IdeServiceService {
  // USING SERVICES OF RAPID API 

  getLanguagesOptionsURL = `${apiConfig.baseURL}v1/languages/`;
  postProgramURL = `${apiConfig.baseURL}v1/`;

  private headers = new HttpHeaders().set(
    'content-type', 'application/json'
  ).set('X-RapidAPI-Key', apiConfig.apiKey)
    .set('X-RapidAPI-Host', 'online-code-compiler.p.rapidapi.com'
    )


  constructor(private http: HttpClient,) { }

  postProgram(programToPost: string, selectedLanguage: string) {
    const response = this.http.post(this.postProgramURL, {
      "language": selectedLanguage,
      "version": "latest",
      "code": programToPost,
      "input": null
    }, { headers: this.headers });
    return response;
  }

  getLanguagesOptions() {
    const response = this.http.get(this.getLanguagesOptionsURL, { headers: this.headers });
    return response;
  }


}
