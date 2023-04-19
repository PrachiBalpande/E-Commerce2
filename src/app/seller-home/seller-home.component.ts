// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-seller-home',
//   templateUrl: './seller-home.component.html',
//   styleUrls: ['./seller-home.component.css']
// })
// export class SellerHomeComponent {

// }


import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[]
  productMessage: undefined | string;
  icon=faTrash;
  editIcon=faEdit

  constructor(private product: ProductService) { }
  ngOnInit(): void {
    this.list()
  }
  deleteProduct(id: number) {
    console.log('test id', id)
    this.product.deleteProduct(id).subscribe((res) => {
      if (res) {
        this.productMessage = "product is deleted"
        this.list()
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined
    },3000)
  }
  list(){
    this.product.productList().subscribe((res) => {
      console.log(res)
      if(res){
        this.productList = res;
      }
     
    })

}
}
