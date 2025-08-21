/*
  This module exports an array of project objects and a helper function to
  retrieve a project by its slug.  Each project includes descriptive
  information, investment highlights, a list of available units, a gallery,
  and contact information.  These values are used by the dynamic project
  page to render comprehensive content for each development.

  To add a new development simply append a new object to the array below
  and provide a unique slug value.  The ProjectPage component will
  automatically handle rendering the new project when its slug appears in
  the URL.
*/

export const projects = [
  {
    slug: "hama",
    name: "Hama",
    location: "Mahahual, Quintana Roo",
    status: "Pre-sales",
    tagline: "Beach‑lifestyle residences in Costa Maya",
    summary:
      "Beach‑lifestyle residences in Costa Maya designed for strong capital appreciation and top‑tier vacation rental income.",
    highlights: [
      "Steps to the beach",
      "Condo‑hotel operations",
      "Turn‑key units",
      "High occupancy potential",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop",
    investmentStats: {
      plusvalia: "12% annually",
      occupancy: "80%",
      nightlyRate: "$220 USD",
    },
    units: [
      {
        type: "1BR Garden Suite",
        size: "55 m²",
        beds: 1,
        baths: 1,
        price: "$180,000 USD",
        availability: "Available",
        layout:
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=800&auto=format&fit=crop",
      },
      {
        type: "2BR Ocean View",
        size: "75 m²",
        beds: 2,
        baths: 2,
        price: "$265,000 USD",
        availability: "Available",
        layout:
          "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop",
      },
      {
        type: "Penthouse",
        size: "120 m²",
        beds: 3,
        baths: 3,
        price: "$480,000 USD",
        availability: "Limited",
        layout:
          "https://images.unsplash.com/photo-1499793983931-4476c0ac96fe?q=80&w=800&auto=format&fit=crop",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505692794403-34d4989a6b9b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983931-4476c0ac96fe?q=80&w=1600&auto=format&fit=crop",
    ],
    mapEmbed: "", // Provide a Google Maps embed URL if available
    whatsappLink:
      "https://wa.me/529990000000?text=I'm%20interested%20in%20Hama",
  },
  {
    slug: "angelique",
    name: "Angelique",
    location: "Tulum, Quintana Roo",
    status: "Pre‑launch",
    tagline: "Jungle‑meets‑luxury living in Tulum",
    summary:
      "Jungle‑meets‑luxury living in a world‑class destination, balancing lifestyle with premium short‑stay yields.",
    highlights: [
      "Signature amenity club",
      "Prime Tulum location",
      "Rental program",
      "Lifestyle‑first design",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
    investmentStats: {
      plusvalia: "10% annually",
      occupancy: "75%",
      nightlyRate: "$250 USD",
    },
    units: [
      {
        type: "1BR Loft",
        size: "60 m²",
        beds: 1,
        baths: 1,
        price: "$200,000 USD",
        availability: "Available",
        layout:
          "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=800&auto=format&fit=crop",
      },
      {
        type: "2BR Villa",
        size: "85 m²",
        beds: 2,
        baths: 2,
        price: "$270,000 USD",
        availability: "Limited",
        layout:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      },
      {
        type: "3BR Villa",
        size: "110 m²",
        beds: 3,
        baths: 3,
        price: "$395,000 USD",
        availability: "Coming Soon",
        layout:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1600&auto=format&fit=crop",
    ],
    mapEmbed: "", // Provide a Google Maps embed URL if available
    whatsappLink:
      "https://wa.me/529990000000?text=I'm%20interested%20in%20Angelique",
  },
];

/**
 * Find a project by its slug.
 *
 * @param {string} slug - The unique slug for the project.
 * @returns {object|undefined} The project object if found, otherwise undefined.
 */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export default projects;