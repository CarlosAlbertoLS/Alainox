import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info:any = {};
  cargab:boolean = false;
  carga_productoshogar = false;
  public equipoh:any = [];

  constructor(public http: HttpClient) {
      this.carga();
      this.carga_productos_hogar();
   }

   public carga(){
     this.http.get("assets/data/info.pagina.json")
     .subscribe(data =>{
       this.cargab =true;
       this.info = data;
     });
   }

   public carga_productos_hogar(){
     this.http.get('https://alainox-6b814-default-rtdb.firebaseio.com/Hogar.json')
     .subscribe(data =>{
       console.log(data);
       this.carga_productoshogar=true;
       this.equipoh = data;
     });
   }

}
