import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  //Dependency injection
  constructor(private sharedDataSvc: SharedDataService) { }

  ngOnInit(): void {
    console.log(this.sharedDataSvc.sharedString);
  }

}
