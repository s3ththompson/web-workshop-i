import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import QRCode from "qrcode";
import confetti from "canvas-confetti";

// mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
// const map = new mapboxgl.Map({
//   container: 'map', // container ID
//   center: [-73.997, 40.706], // starting position [lng, lat]
//   zoom: 13 // starting zoom
// });

// await QRCode.toCanvas(
//   document.getElementById('qr'),
//   'https://www.poetryfoundation.org/poems/43262/the-bridge-to-brooklyn-bridge',
//   { margin: 0}
// );

// window.addEventListener('scroll', () => {
//     // if the user has scrolled to the bottom of the page
//     if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
//       confetti({ origin: { y: 1 }}); // move origin to bottom center
//     }
// });