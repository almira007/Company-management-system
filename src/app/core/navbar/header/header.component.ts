import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/core/service/breadcrumb.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public data!: any;

  constructor(public breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    //breadcrumb using
    this.breadcrumbService.breadCrumb.subscribe((res) => {
      this.data = res
    });
  }
}
