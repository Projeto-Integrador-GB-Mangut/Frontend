import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menuhome',
  templateUrl: './menuhome.component.html',
  styleUrls: ['./menuhome.component.css']
})
export class MenuhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deslogado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }

}
