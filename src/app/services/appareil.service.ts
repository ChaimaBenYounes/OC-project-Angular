import { Subject } from 'rxjs';

export class AppareilService {

    appareilsSubject = new Subject<any[]>();
    private appareils = [
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

    emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());//slice une copie du tableau 
    }

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
            this.emitAppareilSubject();
        }  
    }

    // make all machine off
    switchOffAll(){
        for(let appareil  of this.appareils){
            appareil.status = 'éteint';
            this.emitAppareilSubject();
        }  
    }

    // make one machine On
    switchOnOne(i:number){
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();
    }

    // make One machine off
    switchOffOne(i:number){
        this.appareils[i].status = 'éteint';
        this.emitAppareilSubject();
    }
}