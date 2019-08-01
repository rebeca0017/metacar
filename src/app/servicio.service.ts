import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ServicioService {

    private URL_API: string;

    constructor(private httpClient: HttpClient) {
        this.URL_API = 'http://127.0.0.1:8000/';

    }

    get(url: string) {
        return this.httpClient.get(this.URL_API + url);
    }

    post(url: string, data: any) {
        return this.httpClient.post(this.URL_API + url, data);
    }

    put(url: string, data: any) {
        return this.httpClient.put(this.URL_API + url, data);
    }
    delete(url: string) {
        return this.httpClient.delete(this.URL_API + url);
    }
}
