import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [ {name: 'product A', price:21},
                {name: 'product B', price:32, description:"nice producto"}
  ]; 
 

  constructor() { }

  ngOnInit() {
  
  }

}