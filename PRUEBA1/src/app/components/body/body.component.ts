import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

active=false;
language:string[];
parts:string[];

onClickEng() {
  this.active=true;
  this.language=this.English;
  this.parts=this.EnglishParts
};
onClickSpa() {
  this.active=true;
  this.language=this.Spanish;
  this.parts=this.SpanishParts
};

/*SIZES*/
i: number[]=[
  0, /*1.-BRISKET*/
  4, /*2.-FLANK & SHORT PLATE*/
  8, /*3.-ROUND*/
 17  /*4.-SHORT LOIN*/

];
l: number[]=[
  3, /*1.-BRISKET*/
  7, /*2.-FLANK & SHORT PLATE*/
  16,/*3.-ROUND*/
  21 /*4.-SHORT LOIN*/
];

English:string[]=[
  'Brisket',
  'Flank & Short Plate', 
  'Round',
  'Short Loin'
];

EnglishParts: string[] = [
  // BRISKET-ENG 0-3
/*0*/  'Shank Cross Cut',
/*1*/  'Brisket, Whole',
/*2*/  'Corned Brisket, Point Half',
/*3*/  'Brisket, Flat Half',
  // FLANK & SHORT PLATE-ENG 4-7
/*4*/  'Flank Steak',
/*5*/  'Fajita',
/*6*/  'Skirt Steak',
/*7*/  'Fajita (Skirt)',
  //ROUND-ENG 8-16
/*8*/  'Round Steak',
/*9*/  'Bottom Round Roast',
/*10*/  'Botton Round Steak',
/*11*/  'Eye Round Roast',
/*12*/  'Eye Round Steak',
/*13*/  'Top Round Steak',
/*14*/  'Boneless Rump Roast',
/*15*/  'Tip Roast,Cap off',
/*16*/  'Tip Steak',
  //SHORT LOIN-ENG 17-21
/*17*/  'Top Loin Steak/New York Steak',
/*18*/  'T-Bone Steak',
/*19*/  'Porterhouse',
/*20*/  'Tenderloin Roast (Fillet Mignon)',
/*21*/  'Tenderloin Steak (Fillet Mignon)',
  //SIRLOIN-ENG
  ];

Spanish:string[]=[
  'Pecho',
  'Falda anterior y Falda Posterior',
  'Pierna',
  'Lomo'
];

SpanishParts: string[] = [
  // BRISKET-SPA  
/*0*/    'Chambarete',
/*1*/    'Pecho, Entero',
/*2*/    'Pecho,Mitad Punta ',
/*3*/    'Pecho, Mitad Plana',
  //FLANK & SHORT PLATE-SPA
/*4*/    'Corte de Falda',
/*5*/    'Fajita',
/*6*/    'Corte de Arrachera',
/*7*/    'Fajita (Arrachera)',
    //ROUND-SPA 
/*8*/   'Corte de Pierna',
/*9*/   'Pulpa Blanca en trozo',
/*10*/  'Corte de pulpa Blanca',
/*11*/  'Cuete en trozo',
/*12*/  'Corte de cuete',
/*13*/  'Corte Pulpa negra',
/*14*/  'Cadera sin hueso en trozo',
/*15*/  'Bola en trozo,sin tapa',
/*16*/  'Milanesa de bola',
  //SHORT LOIN-SPA
/*17*/  'Corte New York',
/*18*/  'T-Bone',
/*19*/  'Porterhouse',
/*20*/  'Filete en trozo (Filete Mignon)',
/*21*/  'Corte de Filete (Filete Mignon)',
  //SIRLOIN-SPA

];



  constructor() { }

  ngOnInit(): void {
  }

}
