import { Component } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent {

  membroQ: number = 0;
  comodoQ: number = 0;
  maquinaLaV: number = 0;
  maquinaLaT: number = 0;
  maquinaSeV: number = 0;
  maquinaSeT: number = 0;
  computQ: number = 0;
  computT: number = 0;
  tarifaE: number = 0;
  tarifaD: number = 0;
  resup: string = "";

  consumoDiarioM: number = 0;
  consumoDiarioC: number = 0;
  consumoDiarioL: number = 0;
  consumoDiarioS: number = 0;
  consumoDiarioP: number = 0;
  consumoDiarioTotal: number = 0;
  custoMensal: string = "";

  calcular(){
    this.consumoDiarioM = 100*this.membroQ; // Membro da casa
    this.consumoDiarioC = 132*this.comodoQ; // Comodo da casa
    this.consumoDiarioL = (800*this.maquinaLaT)*this.maquinaLaV; // Máquina de lavar
    this.consumoDiarioS = (300*this.maquinaSeT)*this.maquinaSeV; // Máquina de secar
    this.consumoDiarioP = (5*this.computT)*this.computQ; // PCs e TVs
    this.consumoDiarioTotal = ((this.consumoDiarioM)+(this.consumoDiarioC)+(this.consumoDiarioL)+(this.consumoDiarioS)+(this.consumoDiarioP))/1000;
    this.custoMensal = (((this.consumoDiarioTotal*30)*this.tarifaE)+this.tarifaD).toFixed(2);
    this.resup = 'Seu gasto de energia por mês é de aproximadamente R$ ' + this.custoMensal;
  }
}
