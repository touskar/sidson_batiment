import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-batiment-layout',
  templateUrl: './batiment-layout.component.html',
  styleUrls: ['./batiment-layout.component.css']
})
export class BatimentLayoutComponent implements OnInit {

  displayedPlancolumns = ["diffused", "zone", "nivTitre1", "nivTitre2", "natTitre", "dateDiffPrevesionel", "dateLastIndice", "projet", "phase", "emetteur", "lot", "lnv1", "type", "bat", "number", "indice", "toBeDifused"];
  batimentSwitch: BatimentSwitch;
  plans: Plan[] = Mooker.getFakePlanData();

  constructor() {

  }

  getPropertyLineOf(batiment: Batiment): BatimentPropertyLine[] {
    let result: any[] = [];
    for (let item in batiment) {
      if (batiment[item] instanceof BatimentPropertyLine) {
        result.push(batiment[item])
      }
    }

    return result;
  }


  getPropertyLineCheckBoxOf(propertyLine: BatimentPropertyLine): PropertyState[] {
    let result: any[] = [];
    for (let item in propertyLine) {
      if (propertyLine[item] instanceof PropertyState) {
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

  onPlanCheckDiffusionChange(plan: Plan) {
    plan.toBeDifused = !plan.toBeDifused;
  }

  toHumanDate(dateLastIndice: any) {
    if(dateLastIndice){
      return new Date().toISOString().substring(0, 10).replace(/-/g,'/')
    }
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
  enableCoffrage: PropertyState = new PropertyState("Coffrage");
  enableFeraillage: PropertyState = new PropertyState("eraillage");
  enableFeraillageDesVerticaux: PropertyState = new PropertyState("Feraillage Vert");
  enableFeraillageDesHorizontaux: PropertyState = new PropertyState("Feraillage  Hor");
  enableNapInferieur: PropertyState = new PropertyState("Nap Inferieur");
  enableNapSuperieur: PropertyState = new PropertyState("Nap Superieur");
  enableNoteDHypothese: PropertyState = new PropertyState("Note D'Hypothese");
  enableGruit: PropertyState = new PropertyState("Gruit");
  enablePrefatBalcon: PropertyState = new PropertyState("Prefat Balcon");
  enableMaconerie: PropertyState = new PropertyState("Macconerie");

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

class Plan {
  diffused?: string;
  zone?: string;
  nivTitre1?: string;
  nivTitre2?: string;
  natTitre?: string;
  dateDiffPrevesionel?: Date;
  dateLastIndice?: Date;
  projet?: string;
  phase?: string;
  emetteur?: string;
  lot?: string;
  lnv1?: string;
  type?: string;
  bat?: string;
  number?: string;
  indice?: string;
  toBeDifused ?: boolean;
}

class PlanProperty {
  name: string;
}

class Mooker {
  static getFakePlanData(){
    const template = {
      diffused: "OUI",
      zone: "A0",
      nivTitre1: "A0",
      nivTitre2: "Fondations",
      natTitre: "Ferraillage",
      dateDiffPrevesionel: null,
      dateLastIndice: new Date(),
      projet: "ABC",
      phase: "EXE",
      emetteur: "SIN",
      lot: "GOE",
      lnv1: "S1",
      type: "FER",
      bat: "A0",
      number: "101",
      indice: "C",
      toBeDifused: false
    };

    return new Array(20).fill(undefined).map(() => Object.assign({}, template))
  }

}
