const places = [
  {
    name: "Човникова станція",
    coordinates: {
      lat: 47.897872826697785,
      lng: 33.33298162115136,
    },
  },
  {
    name: "Арт майдан",
    coordinates: {
      lat: 47.904592186707376,
      lng: 33.34175971008661,
    },
  },
  {
    name: "Квітковий годинник",
    coordinates: {
      lat: 47.905200785590274,
      lng: 33.39208067967246,
    },
  },
  {
    name: "Музей гірничої техніки під відкритим небом",
    coordinates: {
      lat: 48.15004075741973,
      lng: 33.584965100845366,
    },
  },
  {
    name: "Академія руху",
    coordinates: {
      lat: 48.00003585422228,
      lng: 33.44884598570862,
    },
  },
];

const map = L.map("map").setView([47.9653981, 33.4440451], 11);

map.setMaxBounds(
  L.latLngBounds(L.latLng(48.299888, 32.718564), L.latLng(47.503002, 34.126729))
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 10.5,
  attribution: "© OpenStreetMap",
}).addTo(map);

places.map(({ name, coordinates: { lat, lng } }) => {
  L.marker([lat, lng])
    .addTo(map)
    .on("click", () => {
      L.popup()
        // Make + 0.02 to display popup above the marker
        .setLatLng([lat + 0.02, lng])
        .setContent("<p>" + name + "</p>")
        .openOn(map);
    });
});
