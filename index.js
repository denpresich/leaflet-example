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

// Close modal function
const closeModal = () => {
  // Get modal element by id
  const modal = document.getElementById("exampleModal");

  // Hide backdrop
  document.getElementById("exampleModalBackdrop").remove();

  // Close the modal for the user
  modal.classList.remove("show");
  modal.style.display = "none";
  modal.removeAttribute("aria-modal");
  modal.removeAttribute("role", "dialog");
  modal.setAttribute("aria-hidden", "true");
};

// Show modal
const showModal = (content) => {
  // Get modal element by id
  const modal = document.getElementById("exampleModal");

  // Get modal content element and set HTML content
  const modalContent = document.getElementById("exampleModalContent");
  modalContent.innerHTML = content;

  // Show modal backdrop
  const backdrop = document.createElement("div", {});
  backdrop.className = "modal-backdrop fade show";
  backdrop.id = "exampleModalBackdrop";

  document.body.appendChild(backdrop);

  // Show modal for the user
  modal.classList.add("show");
  modal.style.display = "block";
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("role", "dialog");
  modal.removeAttribute("aria-hidden");
};

places.map(({ name, imageUrl, coordinates: { lat, lng } }) => {
  L.marker([lat, lng])
    .addTo(map)
    // Handle click event
    .on("click", () => {
      const modalHeader = `
        <div class="modal-header">
          <h5 class="modal-title">${name}</h5>
          <button type="button" class="btn-close" onclick="closeModal()" aria-label="Close">
          </button>
        </div>
      `;

      const modalBody = `
        <div class="modal-body">
          <img class="place-image" alt="${name}" src="${imageUrl}" />
        </div>
      `;

      showModal(modalHeader + modalBody);
    });
});
