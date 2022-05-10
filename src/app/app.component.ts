import { Component } from '@angular/core';
import { right } from '@popperjs/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'K2 Portal Integration - SmartyDreams'; //M&L cambiamos el titulo del componente.
  msg: string = ''; //para los mensajes

  projects = [
    {'name' : 'Hydra', duration: '4 months', estimatedCost: '$100'},
    {'name' : 'OpenProject', duration: '1 year', estimatedCost: '$150'},
    {'name' : 'K2', duration: '5 years', estimatedCost: '$0'}
  ];

  model:any ={};
  model2:any ={};
  hideUpdate:boolean = true; //variable para ocultar por defecto el formulario de actualización.

  anadirProject():void{
    this.projects.push(this.model);
    this.msg = 'Added successfully.';
  }

  eliminarProject(i: any):void{
    var answer = confirm('Are you sure you want to remove this element?');
    if(answer == true){
      this.projects.splice(i,1);
      this.msg = 'Successfully removed.';
    }
  }

  myValue: any;

  modificarProject(i: any):void{
    this.hideUpdate = false;
    this.model2.name = this.projects[i].name;
    this.model2.duration = this.projects[i].duration;
    this.model2.estimatedCost = this.projects[i].estimatedCost;
    this.myValue = i;
  }

  actualizarProject():void{
    let i = this.myValue;
    for(let j=0; j < this.projects.length; j++){
      if(i == j ){
        this.projects[i] = this.model2;
        this.msg = 'Successfully updated.';
        this.model2 = {}; //limpiamos el modelo para que el formulario de update vuelva a estar disponible y se limpie
      }
    }
  }

  closeAlert():void{
    this.msg = '';
  }
}
