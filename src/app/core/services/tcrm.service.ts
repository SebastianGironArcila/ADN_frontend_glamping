import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class TCRMService{

    constructor(protected http: HttpService
    ){}

    public obtenerTCRM(){
        return this.http.doGet<any>(`${environment.endpoint}/tcrm`);
    }


}