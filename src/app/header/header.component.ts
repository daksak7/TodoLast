import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  loadedCharacter: any[]=[];
  products : any;
  veri: any;
  


  constructor(private config:ConfigService) {

   }

  ngOnInit(): void {

    // const observable=new Observable((data)=>{
    //   data.next(1);
    //   data.next('deneme');
    //   data.next(3);
    // }).subscribe(element=>console.log('Eleman : ' + element))
    





      this.config.sendGetRequest().subscribe(character => {
        this.products=character
        //console.log(this.products)
        console.log(this.products.anime)
        console.log(this.products.character)
      
        // console.log(JSON.parse(this.products.anime))
        
      })

    // this.config.sendGetRequest().subscribe(data=>{
    //   this.config.sendGetRequest(data.name).subscribe(homeworld=>{
    //     this.character=homeworld;
    //     this.loadedCharacter=character;
    //   })
    // }

    //)
 
  }

}


