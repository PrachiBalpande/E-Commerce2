
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  searchResult: undefined | product[]

  constructor(private route: Router, private product: ProductService) { }
  ngOnInit(): void {

    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') || val.url.includes('seller')) {
          console.log("this is seller area")
          this.menuType = 'seller'
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller')
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        }
        else {
          this.menuType = 'default'
        }
      }

    })
  }
  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((res) => {
        if (res.length > 5) {
          res.length = 5
        }
        this.searchResult = res
      })
    }
  }
  hideSearch() {
    this.searchResult = undefined
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }
  submitSearch(val: string) {

    this.route.navigate([`search/${val}`])

  }
}
