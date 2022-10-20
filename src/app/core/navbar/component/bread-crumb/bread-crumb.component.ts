import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/core/service/breadcrumb.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  public data!: any;

  constructor(public breadcrumbService: BreadcrumbService) { }

  
  ngOnInit(): void {
    /**
    * breadcrube using subject
    */
    this.breadcrumbService.breadCrumb.subscribe((res) => {
      this.data = res
    });
  }
}
