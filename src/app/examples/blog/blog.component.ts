import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:any[] = [
    {
      id: 1,
      titulo: 'Business Intelligence en el sector salud',
      descripcion: 'Descubre como es que el sector Salud...'
    },
    {
      id: 2,
      titulo: 'Transformación digital con Análisis de Datos',
      descripcion: 'Comienza la transformación digital de tu empresa con análisis de datos...'
    },
    {
      id: 3,
      titulo: 'Business intelligence-5 Tips para el Analisis de datos',
      descripcion: 'Comprenda sus datos sin importar la cantidad ni el...'
    },
    {
      id: 4,
      titulo: 'Analisis de Datos para el Sector Financiero',
      descripcion: 'Descubre los beneficios que trae consigo el...'
    },
    {
      id: 5,
      titulo: '7 señales de que tu empresa necesita Business Intelligence',
      descripcion: '¿Cómo saber si mi empresa necesita...'
    }
  ];

  blog_busqueda:any[] = [];

  buscar:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  busqueda(){
    // console.log(this.buscar);
    this.blog_busqueda = [];
    for (let index = 0; index < this.blog.length; index++) {
      if(this.blog[index].titulo.toString().toLowerCase().includes(this.buscar.toLowerCase())){
        // console.log("R: " + this.blog[index].titulo);
        this.blog_busqueda.push(this.blog[index]);
      }else{
        // console.log("aqui no: " + this.blog[index].titulo);
      }
    }
    
  }

}
