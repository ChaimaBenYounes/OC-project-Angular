export class AppareilService {
    appareils = [
        {
          id : 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id : 2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id : 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
    //get appareil by id 
    getAppareilById(id:number) {
        const appareil = this.appareils.find(
            (app) => {
                return app.id === id;
            }
        );

        return appareil;
    }
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