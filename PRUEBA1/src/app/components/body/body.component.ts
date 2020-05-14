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
  17,/*4.-SHORT LOIN*/
  22, /*5.-SIRLOIN*/
  29, /*6.-RIB*/
  35 /*7.-CHUCK*/

];
l: number[]=[
  4, /*1.-BRISKET*/
  8, /*2.-FLANK & SHORT PLATE*/
  17,/*3.-ROUND*/
  22,/*4.-SHORT LOIN*/
  29, /*5.-SIRLOIN*/
  35, /*6.-RIB*/
  48 /*7.-CHUCK*/
];

English:string[]=[
  'Brisket',
  'Flank & Short Plate', 
  'Round',
  'Short Loin',
  'Sirloin',
  'Rib',
  'Chuck'
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
/*22*/  'Sirloin Steak, flat bone',
/*23*/  'Sirloin Steak, round bone',
/*24*/  'Top Sirloin Steak',
/*25*/  'Tri-Tip Roast, Cap off',
/*26*/  'Tri-Tip Steak, Cap off',
/*27*/ 'Tri-Tip Roast, Cap on (Picanha)',
/*28*/ 'Tri-Tip Steak, Cap on (Picanha)',
  //RIB-ENG
/*29*/'Rib Roast, Large End',
/*30*/'Rib Roast, Small End',
/*31*/'Rib Steak, Small End',
/*32*/'Ribeye Roast',
/*33*/'Ribeye Steak',
/*34*/'Back Ribs',
  //CHUCK-ENG
/*35*/'7-Bone Pot Roast',
/*36*/'Arm Pot Roast',
/*37*/'Blade Roast',
/*38*/'Under Blade Pot Roast',
/*39*/'Chuck Pot Roast',
/*40*/'Chuck Eye Roast',
/*41*/'Short Ribs',
/*42*/'Flanken Style Ribs',
/*43*/'Mock Tender Roast',
/*44*/'Chuck Top Blade Stake',
/*45*/'Shoulder Top Blade Steak (Flat Iron)',
/*46*/'Shoulder Petite Tender',
/*47*/'Shoulder Petite Tender Medallions'
  ];

Spanish:string[]=[
  'Pecho',
  'Falda anterior y Falda Posterior',
  'Pierna',
  'Lomo',
  'Sirloin/Aguayón',
  'Costillar',
  'Espaldilla'
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
/*22*/ 'Corte de Sirloin,hueso plano',
/*23*/ 'Corte sirloin, hueso redondo',
/*24*/ 'Corte sirloin, sin hueso',
/*25*/ 'Empuje en trozo',
/*26*/ 'Corte de empuje',
/*27*/ 'Picaña en trozo (Picanha)',
/*28*/ 'Corte de Picaña (Picanha)',
  //RIB-SPA
/*29*/'Costillar en trozo lado de la espaldilla',
/*30*/'Costillar en trozo lado posterior',
/*31*/'Corte del Costillar lado posterior',
/*32*/'Trozo de Ribeye',
/*33*/'Corte Ribeye',
/*34*/'Costillas de Ribeye',
  //CHUCK-SPA
/*35*/'Costilla del 7 en trozo',
/*36*/'Brazuelo en trozo',
/*37*/'Paleta en trozo',
/*38*/'Paleta inferior en trozo',
/*39*/'Espaldilla en trozo',
/*40*/'Corazón de diezmillo en trozo',
/*41*/'Costilla cargada',
/*42*/'Costillas estilo flanken',
/*43*/'Juil en trozo',
/*44*/'Corte de planchuela',
/*45*/'Corte de diezmillo',
/*46*/'Teres mayor(Carnaza de paleta)',
/*47*/'Medallones de Teres mayor'

];



  constructor() { }

  ngOnInit(): void {
  }

}
