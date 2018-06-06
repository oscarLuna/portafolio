import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos:any[] = [];
  cargando_productos:boolean = true;

  constructor(private http:Http) {
    this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando_productos = true;
    this.http.get('https://pagina-portafolio.firebaseio.com/productos_idx.json')
      .subscribe( res => {
        setTimeout( ()=>{
          this.cargando_productos = false;
          this.productos=res.json();
        },1500)
      });
  }
  
  public cargar_producto(cod:string){
    return this.http.get(`https://pagina-portafolio.firebaseio.com/productos/${ cod }.json`);
  }

}
