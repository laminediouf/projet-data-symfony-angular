import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
declare let L;

@Component({
  selector: 'app-detail-ecole',
  templateUrl: './detail-ecole.component.html',
  styleUrls: ['./detail-ecole.component.css']
})
export class DetailEcoleComponent implements OnInit {
    public entrepriseId;

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }
  httpdata;

  ngOnInit() {
      this.http.get("https://lamined.promo-21.codeur.online/api-AEFE/public/api/table1s.json").subscribe((data) => this.displaydata(data));



      // Leaflet
      const map = L.map('map').setView([14.672672, -17.437414], 8);
      const marker1 = new L.Marker(new L.LatLng(14.672672, -17.437414));
      const marker2 = new L.Marker(new L.LatLng(14.75, -17.437414));
      const marker3 = new L.Marker(new L.LatLng(16.033311, -16.503021));
      const marker4 = new L.Marker(new L.LatLng(12.57994, -16.283951));
      const marker5 = new L.Marker(new L.LatLng(14.75, -17.3333333));
      const marker6 = new L.Marker(new L.LatLng(14.6696634, -17.4351964));
      const marker7 = new L.Marker(new L.LatLng(14.75, -17.3333333));
      const marker8 = new L.Marker(new L.LatLng(14.4383333, -17.0125));
      const marker9 = new L.Marker(new L.LatLng(14.671624, -17.4360623));
      const marker10 = new L.Marker(new L.LatLng(14.742462, -17.519725));

      marker1.addTo(map).bindPopup('Institut Sainte-Jeanne d\'Arc<br>').openPopup();
      marker2.addTo(map).bindPopup('Lycée Français Jean Mermoz<br>').openPopup();
      marker3.addTo(map).bindPopup('Ecole Française Antoine-De-Saint-Exupéry<br>').openPopup();
      marker4.addTo(map).bindPopup('Ecole Française François-Rabelais<br>').openPopup();
      marker5.addTo(map).bindPopup('Cours Sainte Marie de Hann<br>').openPopup();
      marker6.addTo(map).bindPopup('Ecole Aloys Kobes<br>').openPopup();
      marker7.addTo(map).bindPopup('Ecole Franco-Sénégalaise Dial Diop<br>').openPopup();
      marker8.addTo(map).bindPopup('Ecole Française Jacques Praevert<br>').openPopup();
      marker9.addTo(map).bindPopup('Ecole chez Bouba<br>').openPopup();
      marker10.addTo(map).bindPopup('Ecole maternelle des Almadies<br>').openPopup();

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: ' <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);




      this.route.paramMap.subscribe((params:ParamMap) =>{
          let id = parseInt(params.get('id'));
          this.entrepriseId=id;
      });
  }
    gotoEntreprise() {
        let selectedId = this.entrepriseId ? this.entrepriseId : null;
        //this.router.navigate(['/departments', {id: selectedId}]);
        this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
    }
    displaydata(data) {this.httpdata = Array.of( data[this.entrepriseId-1]);

    }

    goPrevious() {
        let previousId = this.entrepriseId - 1;
        this.router.navigate(['/accueil', previousId]);
    }

    goNext() {
        let nextId = this.entrepriseId + 1;
        this.router.navigate(['/accueil', nextId]);
    }


}