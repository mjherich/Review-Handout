import { Component, OnInit, NgModule } from '@angular/core';

import { Business } from '../business';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss']
})

export class BusinessInfoComponent implements OnInit {
  
  business = new Business();
  
  constructor() { }

  ngOnInit() {
  }

}
