import {Component, signal} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEmissionFactorComponent} from "../../components/add-emission-factor/add-emission-factor.component";
import {EmissionFactor} from "../../models/emission-form.model";

@Component({
  selector: 'app-emission-factor-main',
  templateUrl: './emission-factor-main.component.html',
  styleUrls: ['./emission-factor-main.component.scss']
})
export class EmissionFactorMainComponent {
  components: EmissionFactor[] = []

  constructor(private dialog: MatDialog) {

  }

  public addEmissionFactor():void{
    const dialogRef = this.dialog.open(AddEmissionFactorComponent)

    dialogRef.afterClosed().subscribe((data: EmissionFactor)=>{
      this.components.push(data)
    })
  }
}
