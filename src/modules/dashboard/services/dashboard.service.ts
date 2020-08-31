import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class DashboardService {
    // tslint:disable-next-line: variable-name
    api_url: any;
    httpOptions: any;
    headers: any;
    constructor(private http: HttpClient) {
        this.api_url = 'http://127.0.0.1/speedestimator/index.php/Api/';

        this.httpOptions = {
            headers: new HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                boundary: 'l3iPy71otz',
            }),
        };
    }

    getDashboard$(): Observable<{}> {
        return of({});
    }
    getLicencePlates() {
        return this.http.get(this.api_url + 'getLicencePLates');
    }
    getInvoices(){
        return this.http.get(this.api_url +'getInvoices')
    }
}
