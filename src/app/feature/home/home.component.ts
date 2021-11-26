import { Component, OnInit } from '@angular/core';
import { TCRMService } from '../../core/services/tcrm.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(protected service: TCRMService) { }

  ngOnInit() {

    this.service.obtenerTCRM().subscribe((data)=>{
      console.log('data ',data);
    })
    
  }

}
