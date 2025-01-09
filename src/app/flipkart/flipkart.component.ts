import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  things : any=[
    { productname: 'pen', price: 50, rating: 3, freedelivary: 'true' },
    { productname: 'phome', price: 30000, rating: 4.5, freedelivary: 'false' },
    { productname: 'shirt', price: 1000, rating: 4, freedelivary: 'true' },
    { productname: 'cap', price: 250, rating: 3.9, freedelivary: 'false' },
    { productname: 'mobilecase', price: 150, rating: 3.5, freedelivary: 'true' },
    { productname: 'remote', price: 300, rating: 2.5, freedelivary: 'true' },
  ]
   delete(i:number){
    this.things.splice(i,1);
   }
   sort1(){
    this.things.sort((a:any,b:any)=>a.price-b.price);
   }
   sort2(){
    this.things.sort((a:any,b:any)=>b.price-a.price);
   }
   sort3(){
    this.things.sort((a:any,b:any)=>a.rating-b.rating);
   }
   sort4(){
    this.things.sort((a:any,b:any)=>b.rating-a.rating);
      }

      text:string="";
      search(){
        this.things=this.things.filter((thing:any)=>thing.productname.includes(this.text));
      }

      delivary(){
        this.things=this.things.filter((thing:any)=>thing.freedelivary.includes(true));
      }
      discount(){
        this.things=this.things.map((things:any)=>{things.price=things.price*50/100;
          return things;
        })
      }
      charges(){
        this.things=this.things.filter((thing:any)=>
          thing.freedelivary.includes(false))
          console.log(this.things);
          this.things=this.things.map((things:any)=>
            {things.price=things.price+25;
            return things;
          })
          
        
    }

    totalprice(){
      let total=this.things.reduce((sum:any,thing:any)=>sum+thing.price,0)
      alert(total)
    }
    count(){
      let items=this.things.reduce((sum:any,thing:any)=>this.things.length)
      alert(items)
    }
    name:string="";
    price:number=0;
    rating:number=0;
    freedelivary:string="";
    yes:boolean=true;
    no:boolean=false;
    
   
  
    add(){
      let thing={
        productname:this.name,
        price:this.price,
        rating:this.rating,
        freedelivary:this.freedelivary
        
       
      };
      this.things.unshift(thing);
    }
  }
