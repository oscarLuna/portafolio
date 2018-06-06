import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando_productos:boolean = true;

  constructor(private http:Http) {
    this.cargar_productos();
  }

  public buscar_producto(termino:string){
    console.log(this.productos.length);

    if(this.productos.length === 0){
      this.cargar_productos().then( ()=>{
        this.filtrar_producto(termino);
      });
    } else {
      this.filtrar_producto(termino);
    }
  }

  private filtrar_producto(termino:string){
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      console.log(prod);
      if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0){
        this.productos_filtrado.push(prod);
      }
    })
  }

  public cargar_productos(){
    this.cargando_productos = true;

    let promesa = new Promise( ( resolve, reject ) => {
      this.http.get('https://pagina-portafolio.firebaseio.com/productos_idx.json')
      .subscribe( res => {
        //setTimeout( ()=>{
          this.cargando_productos = false;
          this.productos=res.json();
          resolve();
        //},1500)
      });
    });
    return promesa;
  }
  
  public cargar_producto(cod:string){
    return this.http.get(`https://pagina-portafolio.firebaseio.com/productos/${ cod }.json`);
  }

}
