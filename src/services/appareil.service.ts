export class AppareilService {
    appareils = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
    
    // make all machine On
    switchOnAll(){
        for(let appareil  of this.appareils){
            appareil.status = 'allumé';
        }  
    }

    // make all machine off
    switchOffAll(){
        for(let appareil  of this.appareils){
            appareil.status = 'éteint';
        }  
    }

    // make one machine On
    switchOnOne(i:number){
        this.appareils[i].status = 'allumé';
    }

    // make One machine off
    switchOffOne(i:number){
        this.appareils[i].status = 'éteint';
    }
}