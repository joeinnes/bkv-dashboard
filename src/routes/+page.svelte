<script>
	import { onMount, onDestroy } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import routeDetails from '$lib/data/routes';
	/**
	 * @type {HTMLDivElement}
	 */
	let mapElement;

	let map;
	/**
	 * @type {number | undefined}
	 */
	let interval;
	let vehicleMarkers = new Map();
	let L;
	let Bus, Tram, Trolleybus, Rail, HEV;

	onMount(async () => {
		L = await import('leaflet');
		map = L.map(mapElement).setView([47.490398, 19.055768], 15);
		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: 'abcd',
			maxZoom: 20
		}).addTo(map);
		Bus = L.icon({
			iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/BKV_busz_symbol.svg',
			iconSize: [20, 20],
			iconAnchor: [0, 5],
			popupAnchor: [0, 0]
		});

		Tram = L.icon({
			iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_tramway-budapest.svg',
			iconSize: [20, 20],
			popupAnchor: [0, 0]
		});

		Trolleybus = L.icon({
			iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Budapest_trolleybus_symbol.svg',
			iconSize: [20, 20],
			popupAnchor: [0, 0]
		});

		Rail = L.icon({
			iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Bkkvonat.svg',
			iconSize: [20, 20],
			popupAnchor: [0, 0]
		});

		HEV = L.icon({
			iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Budapest_hev_symbol.svg',
			iconSize: [20, 20],
			popupAnchor: [0, 0]
		});
		interval = setInterval(invalidateAll, 5000);
	});

	const getRouteDetails = async (routeId) => {
		try {
			if (routeDetails.has(routeId)) return routeDetails.get(routeId);
			const fetched = await fetch(`/api/route/${routeId}`);
			const { data } = await fetched.json();

			const { entry } = data;
			const { shortName, description } = entry;
			routeDetails.set(routeId, { shortName, description });
			window.routeDetails = routeDetails;
			return routeDetails.get(routeId);
		} catch (e) {
			console.log(`Error getting details for ${routeId}`, e);
			return null;
		}
	};
	const createOrUpdateMarkerLocation = async (vehicle) => {
		if (!vehicle.routeId || !L) return;
		const { lat, lon } = vehicle.location;
		const { vehicleId } = vehicle;
		if (vehicleMarkers.has(vehicleId)) {
			const thisVehicle = vehicleMarkers.get(vehicleId);
			const newLatLng = new L.LatLng(lat, lon);
			thisVehicle.setLatLng(newLatLng);
			thisVehicle.lastUpdated = new Date();
		} else {
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
			try {
				const routeDetails = await getRouteDetails(vehicle.routeId);
				const { shortName, description } = routeDetails;
				let licensePlate = '';
				if (vehicle.licensePlate.length === 6) {
					licensePlate = vehicle.licensePlate.substr(0, 3) + '-' + vehicle.licensePlate.substr(3);
				} else if (vehicle.licensePlate.length > 0) {
					licensePlate = vehicle.licensePlate;
				}
				const marker = L.marker([lat, lon], {
					icon
				}).bindPopup(
					`<h2 style="--size: 1.4rem">${shortName} ▶ ${
						vehicle.label || ''
					}</h2><h3><div style="--size: 1.2rem;--shadow:4; font-family: monospace; --radius: 0.5rem; --of:hidden; --d:inline; --pt:0.5rem; --pb:0.5rem;"><span style="--c: white; --bgc: #003399; -h:100%; --p:0.5rem; --radius:0.5rem 0 0 0.5rem">H</span><span class="--p:1rem;">&nbsp;${
						licensePlate || ''
					}&nbsp;</span></span></h3><p>${description}</p><p>${vehicle.model || ''}</p>`
				);
				marker.lastUpdated = new Date();
				vehicleMarkers.set(vehicleId, marker);
				marker.addTo(map);
			} catch (e) {
				console.log(e);
			}
		}
	};
	export let data;
	$: {
		let { list } = data;
		list.forEach((vehicle) => createOrUpdateMarkerLocation(vehicle));
		const now = new Date();
		let threshold = new Date(now);
		threshold.setMinutes(threshold.getMinutes() - 5);
		for (const [vehicleId, marker] of vehicleMarkers) {
			if (marker.lastUpdated < threshold) {
				console.log(`Vehicle ${vehicleID} not updated in 5 minutes, considered out of service`);
				vehicleMarkers.delete(vehicleId);
			}
		}
	}

	onDestroy(async () => {
		if (interval) clearInterval(interval);
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<svelte:head><title>Where are all the buses?</title></svelte:head>

<div class="map" bind:this={mapElement} />

<style>
	@import 'leaflet/dist/leaflet.css';

	.map {
		width: 100vw;
		height: 100vh;
	}

	:global(img) {
		-webkit-transition: transform 10s linear;
		-moz-transition: transform 10s linear;
		-o-transition: transform 10s linear;
		-ms-transition: transform 10s linear;
		transition: transform 10s linear;
	}
</style>
