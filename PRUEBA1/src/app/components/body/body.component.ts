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
  0,/*1.-BRISKET*/
  4,/*2.-FLANK & SHORT PLATE*/
  8 /*3.-ROUND*/
];
l: number[]=[
  3,/*1.-BRISKET*/
  7,/*2.-FLANK & SHORT PLATE*/
  20
];

English:string[]=[
  'Brisket',
  'Flank & Short Plate', 
  'Round'
];

EnglishParts: string[] = [
  // BRISKET-ENG
  'Shank Cross Cut',
  'Brisket, Whole',
  'Corned Brisket, Point Half',
  'Brisket, Flat Half',
  // FLANK & SHORT PLATE-ENG
  'Flank Steak',
  'Fajita',
  'Skirt Steak',
  'Fajita (Skirt)',
  //ROUND-ENG
  'Round Steak',
  'Bottom Round Roast',
  'Botton Round Steak',
  'Eye Round Roast',
  'Eye Round Steak',
  'Top Round Steak',
  'Boneless Rump Roast',
  'Tip Roast,Cap off',
  'Tips steak'

  ];

Spanish:string[]=[
  'Pecho',
  'Falda anterior y Falda Posterior',
  'Pierna'
];

SpanishParts: string[] = [
  // BRISKET-SPA  
    'Chambarete',
    'Pecho, Entero',
    'Pecho,Mitad Punta ',
    'Pecho, Mitad Plana',
  //FLANK & SHORT PLATE-SPA
    'Corte de Falda',
    'Fajita',
    'Corte de Arrachera',
    'Fajita (Arrachera)',
    //ROUND-SPA 
  'Corte de Pierna',
  'Pulpa Blanca en trozo',
  'Corte de pulpa Blanca',
  'Cuete en trozo',
  'Corte de cuete',
  'Corte de pulpa negra',
  'Cadera sin hueso en trozo',
  'Bola en trozo,sin tapa',
  'Milanesa de bola'
];



  constructor() { }

  ngOnInit(): void {
  }

}
