import './app.scss';
import Navbar from "./components/navbar/Navbar"
import MapLeaftLet from './components/mapleaflet/MapLeaflet';
import Filters from './components/filters/Filters';
import Overview from './components/overview/Overview';
import { useEffect } from 'react';
import { useState } from 'react';
import Cards from './components/cards/Cards';
import locationsData from './locationsData';


function App() {

  const [visibleMarkers, setVisibleMarkers] = useState([]);

  useEffect(() => {

      let current_lat = 43.295824;
      let current_long = -0.368643;
      let current_zoom = 16;
      let center_lat = current_lat;
      let center_long = current_long;
      let center_zoom = current_zoom;

      var L = window.L; //avoids the L not declared error


      // The <div id="map"> must be added to the dom before calling L.map('map')
        let map = L.map('map', {
          center: [center_lat, center_long],
          zoom: center_zoom,
          zoomControl: false
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // var marker = new L.Marker([43.295824, -0.368643], [43.30179,-0.368471]);

        // marker.addTo(map);

        let marker;

        // const locations = [[43.30179,-0.368471], [43.299947,-0.360274],[43.2937,-0.367913]]

        const locations = [
          {
            "id": 1,
            "lat": 43.30179,
            "lng":-0.368471,
            "visible": false,
            "favorite": true,
            "imgURL": "/assets/appartment.png",
            "title": 'T1 - Pau Université',
            "price": 300,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id": 2,
            "lat": 43.299947,
            "lng":-0.360274,
            "visible": false,
            "favorite": true,
            "imgURL": "/assets/appartment2.png",
            "title": 'T2 - Centre Ville',
            "price": 500,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id": 3,
            "lat": 43.2937,
            "lng":-0.367913,
            "visible": false,
            "favorite": false,
            "imgURL": "/assets/appartment3.png",
            "title": 'Studio - Centre Ville',
            "price": 800,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id": 4,
            "lat": 43.301196,
            "lng":-0.375509,
            "visible": false,
            "favorite": false,
            "imgURL": "/assets/appartment4.png",
            "title": 'T3 - Gare de Pau',
            "price": 350,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id": 5,
            "lat": 43.293825,
            "lng":-0.38229,
            "visible": false,
            "favorite": false,
            "imgURL": "/assets/appartment5.png",
            "title": 'T1 - Saragosse',
            "price": 599,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id": 6,
            "lat": 43.283954,
            "lng":-0.392418,
            "visible": false,
            "favorite": false,
            "imgURL": "/assets/appartment6.png",
            "title": 'T1 - Lescar',
            "price": 250,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id": 7,
            "lat": 43.282704,
            "lng":-0.374908,
            "visible": false,
            "favorite": false,
            "imgURL": "/assets/appartment7.png",
            "title": 'T4 - Croix du Prince',
            "price": 499,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id": 8,
            "lat": 43.270206,
            "lng":-0.344696,
            "visible": false,
            "favorite": false,
            "imgURL": "/assets/appartment8.png",
            "title": 'Studio - Gelos',
            "price": 150,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id": 9,
            "lat": 43.288827,
            "lng":-0.351734,
            "visible": false,
            "favorite": false,
            "imgURL": "/assets/appartment9.png",
            "title": 'Studio - Bizanos',
            "price": 700,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
          {
            "id": 10,
            "lat": 43.282579,
            "lng":-0.370274,
            "visible": false,
            "favorite": false,
            "imgURL": "/assets/appartment10.png",
            "title": 'T4 - Centre ville',
            "price": 999,
            "text": "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          },
        ]

        for (var i = 0; i < locations.length; i++) {
          marker = new L.marker([locations[i].lat, locations[i].lng])
            .bindPopup(`${locations[i].lat}, ${locations[i].lng} `)
            .addTo(map);
            // setFavMode(locations[i].favorite)
        }

        // if(map.getBounds().contains(marker.getLatLng()))

        // console.log(map.getBounds().contains(marker.getLatLng()));

        map.on('dragend', function () {
          // Updates markers after user drags the map to change position
          updateVisibleMarkers();
        });
        map.on('zoomend', function () {
          // Updates markers after user zooms in/out
          updateVisibleMarkers();
        });

        const updateVisibleMarkers = () => {
          const bounds = map.getBounds();
          
          const newMarkers = [];
          for (let location of locations) {
            if (bounds.contains(location)) {
              
              // location.visible = true;
              newMarkers.push(location);
            }
          }
          console.log(
            // '!!! map bounds:',
            // map.getBounds(),
            ' visible markers: ',
            newMarkers
          );
          setVisibleMarkers(newMarkers);
        };

        return () => map.remove();
}, []);

  return (
    <div className="App">
      <Navbar />
      <div className='split left'>
        <div className='centered'>
        <MapLeaftLet />
        </div>
      </div>
      <div className='split right'>
          <Filters />
          <div className='overview-container'>
            <Overview setVisibleMarkers={setVisibleMarkers} visibleMarkers={visibleMarkers}/>
            {/* <Cards /> */}
          </div>
         
      </div>
    </div>
  );
}

export default App;
