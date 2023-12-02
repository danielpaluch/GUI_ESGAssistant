import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEmissionFactorComponent} from "../../components/add-emission-factor/add-emission-factor.component";

@Component({
  selector: 'app-emission-factor-main',
  templateUrl: './emission-factor-main.component.html',
  styleUrls: ['./emission-factor-main.component.scss']
})
export class EmissionFactorMainComponent {
  components: string[] = []

  constructor(private dialog: MatDialog) {

  }

  public addEmissionFactor():void{
    console.log('add')
    const dialogRef = this.dialog.open(AddEmissionFactorComponent)

    // dialogRef.afterClosed((emission)=>{
    //   if (emission) {
    //     this.components.push(emission);
    //   }
    // })
  }
}
