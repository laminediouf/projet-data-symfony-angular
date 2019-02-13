import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
/*import {any} from 'codelyzer/util/function';*/
declare let L;

@Component({
  selector: 'app-detail-ecole',
  templateUrl: './detail-ecole.component.html',
  styleUrls: ['./detail-ecole.component.css']
})
export class DetailEcoleComponent implements OnInit {
    id: any;
    latitude: any;
    longitude: any;
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }
  httpdata;


  ngOnInit() {
      this.http.get("https://lamined.promo-21.codeur.online/api-AEFE/public/api/table1s.json").subscribe((data) => this.displaydata(data));

    /*  this.route.paramMap.subscribe((params:ParamMap) =>{
          let id = parseInt(params.get('id'));
          this.entrepriseId=id;

          let latitude = parseInt(params.get('latitude'));
          this.latitude=latitude;

          let longitude = parseInt(params.get('longitude'));
          this.latitude=longitude;
      });*/
      this.route.params.subscribe(params => {
          if (typeof params['id'] !== undefined) {
              this.id = params['id'];
              console.log(this.id);
          } else { this.id = ''; }

          if (typeof params['latitude'] !== undefined) {
              this.latitude = params['latitude'];
              console.log(this.latitude);
          } else { this.latitude = ''; }
          if (typeof params['longitude'] !== undefined) {
              this.longitude = params['longitude'];
              console.log(this.longitude);
          } else { this.longitude = ''; }
      });

      // Leafletk
      const map = L.map('map').setView([this.longitude,this.latitude] , 4);
      /*  const marker1 = new L.Marker(new L.LatLng(14.994, -16.283951));
        const marker2 = new L.Marker(new L.LatLng(13.5166667, 2.1));
        const marker3 = new L.Marker(new L.LatLng(12.57994, -16.283951));
        const marker4 = new L.Marker(new L.LatLng(30.064742, 31.249509));
        const marker5 = new L.Marker(new L.LatLng(-15.408193, 28.287167));
        const marker6 = new L.Marker(new L.LatLng(14.75, -17.3333333));
        const marker7 = new L.Marker(new L.LatLng(12.0226521, 8.5429618));

        const marker8 = new L.Marker(new L.LatLng(14.4383333, -17.0125));
        const marker9 = new L.Marker(new L.LatLng(14.671624, -17.4360623));
        const marker10 = new L.Marker(new L.LatLng(14.742462, -17.519725));

        marker1.addTo(map).bindPopup('Nom ecole: Institution Sainte Jeanne d\'Arc<br>Ville: Dakar<br>Pays: Sénégal<br>Email: isja@isjadakar.org<br>Siteweb: <br>').openPopup();
        marker2.addTo(map).bindPopup('Nom ecole: Lycée La Fontaine <br>Ville: Niamey <br>Pays: Niger <br>Email: proviseur@fontaine.ne <br>Siteweb: <a href="http://www.lfniamey.fontaine.ne" target="blank">http://www.lfniamey.fontaine.ne</a> <br>').openPopup();
        marker3.addTo(map).bindPopup('Nom ecole: Ecole française François Rabelais<br>Ville: Ziguinchor <br>Pays: Sénégal<br>Email: effr.ziguinchor@laposte.net <br>Siteweb: <br>').openPopup();
        marker4.addTo(map).bindPopup('Nom ecole: Ecole française du Caire <br>Ville: Caire <br>Pays: Egypte <br>Email: proviseur@lfcaire.org <br>Siteweb: <a href="www.lfcaire.org" target="blank">www.lfcaire.org</a> <br>').openPopup();
        marker6.addTo(map).bindPopup('Nom ecole: Cours Sainte Marie de Hann <br>Ville: Dakar <br>Pays: Sénégal <br>Email: csmh@mariste.sn <br>Siteweb: <a href="www.mariste.sn" target="blank">www.mariste.sn</a> <br>').openPopup();
        marker5.addTo(map).bindPopup('Nom ecole: Ecole française Champollion <br>Ville: Lusaka <br>Pays: Zambie <br>Email: direction@ef-lusaka.net <br>Siteweb: <br>').openPopup();
        marker7.addTo(map).bindPopup('Nom ecole:Ecole Francais de Nigeria <br>Ville:Kano <br>Pays:Nigeria <br>Email:efk_kano@hotmail.com <br>Siteweb: <br>').openPopup();

        marker8.addTo(map).bindPopup('Nom ecole:Ecole française Jacques Prevert <br>Ville: Mbour <br>Pays: Sénégal<br>Email: ecolefrancaisesalycollege@gmail.com <br>Siteweb: <a href="http://www.jaquesprevertsaly.org" target="blank">http://www.jaquesprevertsaly.org</a> <br>').openPopup();
        marker9.addTo(map).bindPopup('Nom ecole: <br>Ville: <br>Pays: <br>Email: <br>Siteweb: <br>').openPopup();
        marker10.addTo(map).bindPopup('Nom ecole: <br>Ville: <br>Pays: <br>Email: <br>Siteweb: <br>').openPopup();*/

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: ' <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
   /*  const circle=new L.Circle(new L(this.longitude,this.latitude),26000,{
          color:'#ffc121',
          fillColor:'red',
          fillOpacity:0.15
      }).addTo(map);*/
      const marker1 = new L.Marker(new L.LatLng(this.longitude,this.latitude));
      marker1.addTo(map);
  }


    gotoEntreprise() {
        let selectedId = this.id ? this.id : null;
        /*this.router.navigate(['/departments', {id: selectedId}]);*/
        this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });

    }
    displaydata(data) {this.httpdata = Array.of( data[this.id-1]);
        console.log(this.httpdata);
    }

   /* displaydata1(data) {this.httpdata1 = Array.of( data[this.entrepriseId-1]['longitude']);
        console.log(this.httpdata1);
    }
    displaydata2(data) {this.httpdata2 = Array.of( data[this.entrepriseId-1]['latitude']);
        console.log(this.httpdata2);
    } */

   /* goPrevious() {
        let previousId = this.entrepriseId - 1;
        this.router.navigate(['/accueil', previousId]);
    }

    goNext() {
        let nextId = this.entrepriseId + 1;
        this.router.navigate(['/accueil', nextId]);
    }*/


}