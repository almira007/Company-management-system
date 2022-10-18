import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title!: string
  constructor( 
    private breadcrumb: BreadcrumbService ) 
    {
   }

  ngOnInit(): void {
    //breadcrumb using
    this.title = ''
    this.breadcrumb.breadcrumbs$.subscribe((res:any )=> this.title = res)
    console.log(this.title);
  }

}
