import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URLS } from '../config.url/url.config';

@Injectable({
    providedIn: 'root'
})
export class ThemeService{


    constructor(private http: HttpClient){

    }

    getAllThemes(): Observable<any>{
        return this.http.get(API_URLS.THEMES_URL);
    }

}