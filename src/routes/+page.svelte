<script>
    import { onMount, onDestroy } from 'svelte';
    let mapElement;
    let map;
		let markers = [];
		let vehicles = [];
		let interval;

		onMount(async () => {
      const leaflet = await import('leaflet');	
			
      map = leaflet.map(mapElement).setView([47.490398, 19.055768], 15);

      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);
			const Bus = L.icon({
				iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/BKV_busz_symbol.svg',
				iconSize: [20, 20],
				iconAnchor: [0, 5],
				popupAnchor: [0, 0],
			});

			const Tram = L.icon({
				iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_tramway-budapest.svg',
				iconSize: [20, 20],
				popupAnchor: [0, 0],
			});

			const Trolleybus = L.icon({
				iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Budapest_trolleybus_symbol.svg',
				iconSize: [20, 20],
				popupAnchor: [0, 0],
			});

			const Rail = L.icon({
				iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Bkkvonat.svg',
				iconSize: [20, 20],
				popupAnchor: [0, 0],
			});

			const HEV = L.icon({
				iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Budapest_hev_symbol.svg',
				iconSize: [20, 20],
				popupAnchor: [0, 0],
			});
			

			const updateMap = () => {
				map.eachLayer(function(layer) {
    if (layer instanceof L.Marker) {
        map.removeLayer(layer)
    	}
			})
			markers.forEach(marker => marker.addTo(map))

			}

			const fetchData = async () => {
				const fetched = await fetch('https://futar.bkk.hu/api/query/v1/ws/otp/api/where/vehicles-for-location.json?lon=19.055768&lat=47.490398&radius=100');
				const { data } = await fetched.json();
				const { list } = data;
				vehicles = list;
				markers = [];
				vehicles.forEach(vehicle => {
					const {lat, lon} = vehicle.location
					let icon;
					switch (vehicle.vehicleRouteType) {
						case 'BUS':
							icon = Bus;
							break;
						case 'TRAM':
							icon = Tram;
							break;
						case 'TROLLEYBUS':
							icon = Trolleybus;
							break;
						case 'RAIL':
							icon = Rail;
							break;
						case 'SUBURBAN_RAILWAY':
							icon = HEV;
							break;
						default:
							console.log('Unknown vehicle type: ', vehicle.vehicleRouteType);
					}
					const marker = leaflet.marker([lat, lon], {
							icon
						}).bindPopup(`<h3><span style="--shadow:4; --p:0.5rem; font-family: monospace; --radius: 0.2rem;">${vehicle.licensePlate || ''}</span></h3><p>${vehicle.label || ''}</p>`) 
					markers.push(marker)
				});
			updateMap();
			}
			fetchData();
			interval = setInterval(fetchData, 10000);
		});

    

    onDestroy(async () => {
			if (interval) clearInterval(interval);
        if (map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });
</script>

<svelte:head><title>Where are all the buses?</title></svelte:head>


<div class="map" bind:this={mapElement}>
</div>

<style>
    @import 'leaflet/dist/leaflet.css';

 	.map {
		width: 100vw;
		height: 100vh;
 	}
</style>