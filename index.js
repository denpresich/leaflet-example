const map = L.map("map").setView([47.9653981, 33.4440451], 11);

map.setMaxBounds(
  L.latLngBounds(L.latLng(48.299888, 32.718564), L.latLng(47.503002, 34.126729))
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 10.5,
  attribution: "© OpenStreetMap",
}).addTo(map);
