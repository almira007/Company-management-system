import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/core/service/breadcrumb.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title!: string
  constructor(private breadcrumb: BreadcrumbService)
    {  
   }

  ngOnInit(): void {
    //breadcrumb using
     this.title = '';
     this.breadcrumb.breadcrumb.subscribe(res => this.title = res);
     console.log(this.title)
  }

}
