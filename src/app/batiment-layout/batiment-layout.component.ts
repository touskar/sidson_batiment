import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-batiment-layout',
  templateUrl: './batiment-layout.component.html',
  styleUrls: ['./batiment-layout.component.css']
})
export class BatimentLayoutComponent implements OnInit {

  batimentSwitch: BatimentSwitch;

  constructor() {

  }

  getPropertyLineOf(batiment: Batiment): BatimentPropertyLine[]{
    let result : any[] = [];
    for (let item in batiment){
      if(batiment[item] instanceof BatimentPropertyLine){
        result.push(batiment[item])
      }
    }

    return result;
  }


  getPropertyLineCheckBoxOf(propertyLine: BatimentPropertyLine): PropertyState[]{
    let result : any[] = [];
    for (let item in propertyLine){
      if(propertyLine[item] instanceof PropertyState){
        result.push(propertyLine[item])
      }
    }

    return result;
  }


  ngOnInit() {
    this.batimentSwitch = {
      batiments: [
        {
          name: "Batiment A",
          fondation: new BatimentPropertyLine("Fondation"),
          phSs1: new BatimentPropertyLine("PH-SS-1"),
          phRdc: new BatimentPropertyLine("PH-RDC"),
          phR1: new BatimentPropertyLine("PH R+ 1"),
          phR2: new BatimentPropertyLine("PH R+ 2"),
          phR3: new BatimentPropertyLine("PH R+ 3")
        },
        {
          name: "Batiment B",
          fondation: new BatimentPropertyLine("Fondation"),
          phSs1: new BatimentPropertyLine("PH-SS-1"),
          phRdc: new BatimentPropertyLine("PH-RDC"),
          phR1: new BatimentPropertyLine("PH R+ 1"),
          phR2: new BatimentPropertyLine("PH R+ 2"),
          phR3: new BatimentPropertyLine("PH R+ 3")
        },

      ]
    };
  }

  onCheckStateChange(checkState: PropertyState) {
    checkState.state = !checkState.state;
  }
}

class BatimentSwitch {
  batiments: Batiment[];
}

class Batiment {
  name: String;
  fondation: BatimentPropertyLine;
  phSs1: BatimentPropertyLine;
  phRdc: BatimentPropertyLine;
  phR1: BatimentPropertyLine;
  phR2: BatimentPropertyLine;
  phR3: BatimentPropertyLine;
}

class BatimentPropertyLine {
  name: string;
  enableCoffrage: PropertyState = new PropertyState("Coffrage") ;
  enableFeraillage: PropertyState = new PropertyState("eraillage");
  enableFeraillageDesVerticaux: PropertyState = new PropertyState("Feraillage Vert");
  enableFeraillageDesHorizontaux: PropertyState = new PropertyState("Feraillage  Hor");
  enableNapInferieur: PropertyState = new PropertyState("Nap Inferieur");
  enableNapSuperieur : PropertyState = new PropertyState("Nap Superieur");
  enableNoteDHypothese : PropertyState = new PropertyState("Note D'Hypothese");
  enableGruit : PropertyState = new PropertyState("Gruit");
  enablePrefatBalcon : PropertyState = new PropertyState("Prefat Balcon");
  enableMaconerie : PropertyState = new PropertyState("Macconerie");

  constructor(name) {
    this.name = name;
  }
}


class PropertyState {
  name: string;

  state: boolean = false;

  constructor(name) {
    this.name = name;
  }
}
