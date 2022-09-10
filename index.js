const places = [
  {
    name: "Човникова станція",
    imageUrl:
      "https://ua.igotoworld.com/frontend/webcontent/images/tours/1940195_800x600_ParkPravdi.jpg",
    coordinates: {
      lat: 47.897872826697785,
      lng: 33.33298162115136,
    },
  },
  {
    name: "Арт майдан",
    imageUrl:
      "https://ua.igotoworld.com/frontend/webcontent/images/tours/1940198_800x600_Art-Maidan_u_gorodskogo_teatra.jpg",
    coordinates: {
      lat: 47.904592186707376,
      lng: 33.34175971008661,
    },
  },
  {
    name: "Квітковий годинник",
    imageUrl:
      "https://ua.igotoworld.com/frontend/webcontent/images/tours/1940201_800x600_zvet1-b.jpg",
    coordinates: {
      lat: 47.905200785590274,
      lng: 33.39208067967246,
    },
  },
  {
    name: "Музей гірничої техніки під відкритим небом",
    imageUrl:
      "https://ua.igotoworld.com/frontend/webcontent/images/tours/1940696_800x600_mine_001.jpg",
    coordinates: {
      lat: 48.15004075741973,
      lng: 33.584965100845366,
    },
  },
  {
    name: "Академія руху",
    imageUrl:
      "https://ua.igotoworld.com/frontend/webcontent/images/tours/1940210_800x600_teatr.jpg",
    coordinates: {
      lat: 48.00003585422228,
      lng: 33.44884598570862,
    },
  },
];

const map = L.map("map").setView([47.9653981, 33.4440451], 11);

// Set max boundaries
map.setMaxBounds(
  L.latLngBounds(L.latLng(48.299888, 32.718564), L.latLng(47.503002, 34.126729))
);

// Display the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 10.5,
  attribution: "© OpenStreetMap",
}).addTo(map);

places.map(({ name, imageUrl, coordinates: { lat, lng } }) => {
  L.marker([lat, lng])
    .addTo(map)
    // Handle click event
    .on("click", () => {
      L.popup()
        // Make + 0.02 to display popup above the marker
        .setLatLng([lat + 0.02, lng])
        .setContent(
          "<div>" +
            `<h3>${name}</h3>` +
            `<img class="place-image" src="${imageUrl}" alt="${name}" />` +
            "</div>"
        )
        .openOn(map);
    });
});
