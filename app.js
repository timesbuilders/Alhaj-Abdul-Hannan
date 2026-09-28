// Abdul Hannan Real Estate - Times Builders & Bismillah Molla Properties
// Core Application Logic & Interactivity

const DEFAULT_PROPERTIES = [
  {
    id: "dolphin-tower",
    title: "Dolphin Tower (ডলফিন টাওয়ার)",
    category: "flat",
    projectType: "tower",
    badge: "Flagship Ongoing Project",
    featured: true,
    location: "Rayerbag, Dhaka",
    address: "Near Rayerbag Bus Stand, Dhaka-Chittagong Highway, Dhaka",
    size: "1,150 – 1,650 sq.ft",
    bedrooms: "3 - 4 Beds",
    bathrooms: "3 - 4 Baths",
    balconies: "2 - 3 Verandas",
    developer: "Times Builders & Bismillah Molla Properties",
    contactPerson: "আলহাজ্ব আবদুল হান্নান",
    price: "Attractive Rate & Installments",
    priceType: "Booking Open",
    status: "Under Construction (Fast Pace)",
    handover: "December 2026",
    floors: "G + 9 Storied Modern Tower",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    description: "Dolphin Tower is a flagship residential project by Times Builders under the personal supervision of Alhaj Abdul Hannan. Located in prime Rayerbag with immediate access to the Dhaka-Chittagong Highway, Hanif Flyover, schools, and shopping centers.",
    amenities: [
      "Modern High-Speed Passenger Elevator",
      "Standby Full Generator Power Backup",
      "Dedicated Substation & DESCO Line",
      "Emergency Wide Staircase & Fire Safety",
      "Deep Tube-well & WASA Water Connection",
      "24/7 CCTV & Security Guard Personnel",
      "Intercom System to Every Unit",
      "Spacious Covered Car Parking Facility"
    ]
  },
  {
    id: "al-aksa-tower",
    title: "Al Aksa Tower (আল আকসা টাওয়ার)",
    category: "flat",
    projectType: "tower",
    badge: "Ongoing Project",
    featured: true,
    location: "Rayerbag, Dhaka",
    address: "Prime Residential Zone, Rayerbag, Dhaka",
    size: "1,200 – 1,550 sq.ft",
    bedrooms: "3 Beds",
    bathrooms: "3 Baths",
    balconies: "2 Verandas",
    developer: "Times Builders & Bismillah Molla Properties",
    contactPerson: "আলহাজ্ব আবদুল হান্নান",
    price: "Competitive Developer Price",
    priceType: "Flexible Installments",
    status: "RCC Structural Work Ongoing",
    handover: "Mid 2027",
    floors: "G + 8 Storied Elegant Building",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    description: "Al Aksa Tower is crafted for modern families seeking a quiet, secure, and prestigious lifestyle in Rayerbag. Engineered with earthquake-resistant frame and high-standard construction materials.",
    amenities: [
      "European Standard Passenger Lift",
      "Auto-Start Soundless Generator",
      "Dedicated Substation Capacity",
      "Community Gathering & Prayer Space on Roof",
      "24-Hour Guard Surveillance & Gate Control",
      "Secured Basement Parking",
      "Earthquake Resistant RCC Frame Structure",
      "Wide Front Access Road"
    ]
  },
  {
    id: "islamia-tower",
    title: "Islamia Tower (ইসলামিয়া টাওয়ার)",
    category: "land-share",
    projectType: "tower",
    badge: "Ongoing & Land Share Project",
    featured: true,
    location: "Rayerbag / Jatrabari Zone, Dhaka",
    address: "Direct Access from Rayerbag Bus Stand, Dhaka",
    size: "1,250 – 1,700 sq.ft",
    bedrooms: "3 - 4 Beds",
    bathrooms: "3 Baths",
    balconies: "3 Balconies",
    developer: "Times Builders & Bismillah Molla Properties",
    contactPerson: "আলহাজ্ব আবদুল হান্নান",
    price: "Cost-to-Cost Basis",
    priceType: "Land Share & Flat Booking",
    status: "Share Booking & Construction Active",
    handover: "Early 2027",
    floors: "G + 10 Storied High-Rise",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    description: "Islamia Tower combines premium residential living with high-saving Land Share investment opportunities. By participating in the land share model, buyers secure flats at original construction cost, saving up to 35% compared to commercial rates.",
    amenities: [
      "Twin Modern High-Speed Lifts",
      "Heavy-Duty Generator Backup",
      "Commercial & Residential Segregated Entries",
      "Rooftop Landscaped Garden & Community Hall",
      "24/7 Security Guards with Full CCTV",
      "Reserved Covered Parking Slots",
      "Deep Water Filtration System",
      "Complete Fire Fighting Infrastructure"
    ]
  },
  {
    id: "rayerbag-land-share-prime",
    "title": "Prime Land Share Project - Rayerbag (ল্যান্ড শেয়ার প্রকল্প)",
    "category": "land-share",
    "projectType": "land-share",
    "badge": "High Savings (30-40%)",
    "featured": false,
    "location": "Rayerbag, Dhaka",
    "address": "Walking Distance to Rayerbag Bus Stand & Highway, Dhaka",
    "size": "Share Size: 1,350 sq.ft Flat Allotment",
    "bedrooms": "3 Beds",
    "bathrooms": "3 Baths",
    "balconies": "2 Verandas",
    "developer": "Times Builders (আলহাজ্ব আবদুল হান্নান)",
    "contactPerson": "আলহাজ্ব আবদুল হান্নান",
    "price": "Land Share + Actual Cost",
    "priceType": "Cost to Cost Basis",
    "status": "Share Booking Open",
    "handover": "2027",
    "floors": "G + 9 Storied Project",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    "description": "The smartest way to own a flat in Dhaka. Purchase a legally registered sub-deed share of land in your own name, and complete the building construction together at actual cost with no developer markup.",
    "amenities": [
      "Individual Sub-Deed Registration of Land Share",
      "Transparent Accounting & Bank Account",
      "Payment in Easy Step-by-Step Installments",
      "Lift & Substation Included in Shared Budget",
      "Full Supervision by Alhaj Abdul Hannan",
      "Vetted Mutation and Clean Khatian"
    ]
  },
  {
    "id": "demra-highway-plots",
    "title": "South Dhaka Prime Residential Plots (আবাসিক প্লট)",
    "category": "plot",
    "projectType": "plot",
    "badge": "Deed & Mutation Ready",
    "featured": false,
    "location": "Rayerbag / Demra Link, Dhaka",
    "address": "Near Highway Link, South Dhaka",
    "size": "3 Katha & 5 Katha Plots Available",
    "bedrooms": "Plot (Residential / Commercial)",
    "bathrooms": "N/A",
    "balconies": "N/A",
    "developer": "Bismillah Molla Properties",
    "contactPerson": "আলহাজ্ব আবদুল হান্নান",
    "price": "Competitive Market Rate",
    "priceType": "Direct Sub-Deed Registration",
    "status": "Ready for Immediate Possession & Boundary",
    "handover": "Instant Possession",
    "floors": "Boundary Demarcated",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    "description": "100% dispute-free residential and investment plots. Thoroughly verified through CS, SA, RS, and City Jorip records. Zero litigation, ready for immediate sub-deed registration and boundary construction.",
    "amenities": [
      "100% Freehold Land with Clear Title",
      "25 to 40 Feet Wide Connecting Access Roads",
      "Utility Connections Readily Available",
      "Immediate High-Ground Ready for Construction",
      "Demarcated Boundary with Cement Pillars",
      "Proximity to Markets, Mosques, & Transport"
    ]
  },
  {
    "id": "ready-luxury-flat-rayerbag",
    "title": "Ready Luxury Apartment near Rayerbag Bus Stand",
    "category": "flat",
    "projectType": "flat",
    "badge": "Ready to Move",
    "featured": false,
    "location": "Rayerbag Bus Stand, Dhaka",
    "address": "2 Minutes Walk from Rayerbag Bus Stand, Dhaka",
    "size": "1,450 sq.ft",
    "bedrooms": "3 Master Beds",
    "bathrooms": "3 Modern Baths",
    "balconies": "3 Balconies",
    "developer": "Times Builders",
    "contactPerson": "আলহাজ্ব আবদুল হান্নান",
    "price": "Ready Registry Deal",
    "priceType": "Instant Key Handover",
    "status": "Ready for Immediate Move-in",
    "handover": "Immediate",
    "floors": "4th Floor (South-Facing Corner Unit)",
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
    "description": "South-facing corner apartment offering abundant natural light and cross ventilation. Fully finished with premium Spanish-design tiles, branded sanitary fittings, and separate reserved parking.",
    "amenities": [
      "Ready Sub-Deed Transfer Immediately",
      "Active WASA Water and Dedicated Substation",
      "Operating High-Speed Lift",
      "Dedicated Covered Parking Slot",
      "Spacious Modern Kitchen with Granite Counter",
      "Open South View without Obstruction"
    ]
  }
];

let propertiesData = [...DEFAULT_PROPERTIES];
let currentFilter = 'all';
let currentSearch = '';

// Load properties from JSON or fallback
async function initProperties() {
  try {
    const res = await fetch('data/properties.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        propertiesData = data;
      }
    }
  } catch (e) {
    console.log("Loaded default bundled properties data.");
  }
  renderProperties();
}

// Render Property Cards
function renderProperties() {
  const container = document.getElementById('propertiesGrid');
  if (!container) return;

  const filtered = propertiesData.filter(item => {
    // Category Filter
    let matchesCategory = true;
    if (currentFilter === 'towers') {
      matchesCategory = item.projectType === 'tower' || ['dolphin-tower', 'al-aksa-tower', 'islamia-tower'].includes(item.id);
    } else if (currentFilter === 'flat') {
      matchesCategory = item.category === 'flat';
    } else if (currentFilter === 'land-share') {
      matchesCategory = item.category === 'land-share';
    } else if (currentFilter === 'plot') {
      matchesCategory = item.category === 'plot';
    }

    // Search Filter
    let matchesSearch = true;
    if (currentSearch.trim() !== '') {
      const q = currentSearch.toLowerCase();
      matchesSearch = (
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.developer.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      );
    }

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
        <i class="fa-solid fa-building-circle-exclamation text-slate-300 text-6xl mb-4"></i>
        <h3 class="text-xl font-bold text-slate-700">No properties found</h3>
        <p class="text-slate-500 mt-2">Try changing your search term or select "All Properties" tab.</p>
        <button onclick="resetFilters()" class="mt-4 px-6 py-2.5 bg-amber-600 text-white rounded-xl text-sm font-semibold hover:bg-amber-700 transition">
          Reset Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isTower = item.projectType === 'tower' || ['dolphin-tower', 'al-aksa-tower', 'islamia-tower'].includes(item.id);
    const waText = encodeURIComponent(`Hello Alhaj Abdul Hannan, I am interested in "${item.title}" at ${item.location}. Please provide more details and pricing.`);
    
    return `
      <div class="property-card bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col group">
        <!-- Image & Badges -->
        <div class="relative h-64 overflow-hidden bg-slate-900">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30"></div>
          
          <!-- Top Badges -->
          <div class="absolute top-4 left-4 flex flex-wrap gap-2">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md ${
              isTower 
                ? 'bg-amber-500 text-slate-950 font-black' 
                : item.category === 'land-share'
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-600 text-white'
            }">
              ${item.badge}
            </span>
            ${item.category === 'land-share' ? '<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 backdrop-blur-md border border-emerald-400/30">35% Savings</span>' : ''}
          </div>

          <!-- Developer Tag Bottom Right -->
          <div class="absolute bottom-3 right-4 text-xs font-medium text-amber-200/90 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-amber-500/20">
            ${item.developer.includes('Times Builders') ? 'Times Builders' : 'Bismillah Molla Properties'}
          </div>

          <!-- Location Bottom Left -->
          <div class="absolute bottom-3 left-4 text-xs text-white flex items-center gap-1.5 font-medium drop-shadow-md">
            <i class="fa-solid fa-location-dot text-amber-400"></i> ${item.location}
          </div>
        </div>

        <!-- Content Body -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
              <span class="flex items-center gap-1">
                <i class="fa-solid fa-user-tie text-amber-600"></i> ${item.contactPerson}
              </span>
              <span class="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md font-semibold border border-emerald-200/60">
                ${item.status}
              </span>
            </div>

            <h3 class="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
              ${item.title}
            </h3>

            <p class="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
              ${item.description}
            </p>

            <!-- Key Specs Grid -->
            <div class="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <div class="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                <i class="fa-solid fa-vector-square text-amber-600 text-sm"></i>
                <span class="font-semibold text-slate-800">${item.size}</span>
              </div>
              <div class="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                <i class="fa-solid fa-bed text-amber-600 text-sm"></i>
                <span class="font-semibold text-slate-800">${item.bedrooms}</span>
              </div>
              <div class="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                <i class="fa-solid fa-bath text-amber-600 text-sm"></i>
                <span class="font-semibold text-slate-800">${item.bathrooms}</span>
              </div>
              <div class="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                <i class="fa-solid fa-calendar-check text-amber-600 text-sm"></i>
                <span class="font-semibold text-slate-800">${item.handover}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <div>
              <span class="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">Pricing / Rate</span>
              <span class="text-sm font-bold text-slate-900">${item.price}</span>
            </div>
            
            <div class="flex items-center gap-2">
              <button onclick="openPropertyModal('${item.id}')" class="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition flex items-center gap-1.5" title="View Project Details">
                <i class="fa-solid fa-circle-info"></i> Details
              </button>
              
              <a href="https://wa.me/8801915075522?text=${waText}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm hover:shadow flex items-center gap-1.5" title="Inquire on WhatsApp">
                <i class="fa-brands fa-whatsapp text-sm"></i> Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Reset Search & Filters
function resetFilters() {
  currentFilter = 'all';
  currentSearch = '';
  const searchInput = document.getElementById('propertySearchInput');
  if (searchInput) searchInput.value = '';
  
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.remove('bg-slate-900', 'text-white', 'shadow');
    tab.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
  });
  const allTab = document.querySelector('[data-filter="all"]');
  if (allTab) {
    allTab.classList.add('bg-slate-900', 'text-white', 'shadow');
    allTab.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
  }
  renderProperties();
}

// Open Property Modal
function openPropertyModal(id) {
  const item = propertiesData.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById('propertyModal');
  const modalBody = document.getElementById('modalContent');
  if (!modal || !modalBody) return;

  const waText = encodeURIComponent(`Assalamu Alaikum Alhaj Abdul Hannan, I am interested in "${item.title}" (${item.location}). Please send me full brochure, floor plan, and pricing.`);

  modalBody.innerHTML = `
    <!-- Modal Header Image -->
    <div class="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30"></div>
      
      <button onclick="closePropertyModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition flex items-center justify-center border border-white/20 z-10">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="absolute bottom-6 left-6 right-6 text-white">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-full">${item.badge}</span>
          <span class="px-3 py-1 bg-slate-800/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold rounded-full">${item.developer}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white">${item.title}</h2>
        <p class="text-slate-300 text-sm mt-1 flex items-center gap-2">
          <i class="fa-solid fa-location-dot text-amber-400"></i> ${item.address}
        </p>
      </div>
    </div>

    <!-- Modal Content Details -->
    <div class="p-6 sm:p-8 space-y-6">
      
      <!-- Key Spec Badges -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <div>
          <span class="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Unit / Plot Size</span>
          <p class="font-extrabold text-slate-800 text-base mt-0.5">${item.size}</p>
        </div>
        <div>
          <span class="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Rooms / Spec</span>
          <p class="font-extrabold text-slate-800 text-base mt-0.5">${item.bedrooms}</p>
        </div>
        <div>
          <span class="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Building Heights</span>
          <p class="font-extrabold text-slate-800 text-base mt-0.5">${item.floors || 'Modern Structure'}</p>
        </div>
        <div>
          <span class="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Handover Time</span>
          <p class="font-extrabold text-emerald-700 text-base mt-0.5">${item.handover}</p>
        </div>
      </div>

      <!-- Description -->
      <div>
        <h4 class="text-sm uppercase font-bold text-slate-400 tracking-wider mb-2">Project Overview</h4>
        <p class="text-slate-700 leading-relaxed text-sm sm:text-base">
          ${item.description}
        </p>
      </div>

      <!-- Amenities & Features -->
      <div>
        <h4 class="text-sm uppercase font-bold text-slate-400 tracking-wider mb-3">Included Amenities & Legal Guarantees</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${item.amenities.map(amenity => `
            <div class="flex items-center gap-2.5 text-sm text-slate-700 bg-white p-2.5 rounded-xl border border-slate-100 shadow-xs">
              <i class="fa-solid fa-check-circle text-emerald-600 text-base"></i>
              <span class="font-medium">${amenity}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Alhaj Abdul Hannan Trust Verification -->
      <div class="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-4">
        <img src="images/abdul-hannan-thumb.jpg" alt="Alhaj Abdul Hannan" class="w-12 h-12 rounded-xl object-cover border border-amber-400 flex-shrink-0 shadow-sm">
        <div>
          <h5 class="font-bold text-slate-900 text-sm">Direct Contact with Proprietor: আলহাজ্ব আবদুল হান্নান</h5>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">
            All paperwork, mutation, sub-deed registration, and project inspections are managed directly with 100% legal verification under Times Builders & Bismillah Molla Properties. Office located at Rayerbag Bus Stand, Dhaka.
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <a href="tel:01915075522" class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-amber-300 hover:bg-amber-100 transition">
              <i class="fa-solid fa-phone text-amber-600"></i> 01915075522
            </a>
            <a href="mailto:timesbuilders3@gmail.com" class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-amber-300 hover:bg-amber-100 transition">
              <i class="fa-solid fa-envelope text-amber-600"></i> timesbuilders3@gmail.com
            </a>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="text-xs text-slate-400 block font-bold uppercase">Pricing / Rate</span>
          <span class="text-xl font-black text-slate-900">${item.price}</span>
        </div>

        <div class="flex items-center gap-3 w-full sm:w-auto">
          <a href="tel:01915075522" class="flex-1 sm:flex-initial text-center px-5 py-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-100 transition">
            <i class="fa-solid fa-phone mr-1.5"></i> Call Office
          </a>
          <a href="https://wa.me/8801915075522?text=${waText}" target="_blank" rel="noopener noreferrer" class="flex-1 sm:flex-initial text-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition shadow-md flex items-center justify-center gap-2">
            <i class="fa-brands fa-whatsapp text-lg"></i> Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePropertyModal() {
  const modal = document.getElementById('propertyModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Calculate Land Share Savings
function calculateLandShareSavings() {
  const sizeInput = document.getElementById('calcFlatSize');
  const resultSavings = document.getElementById('calcSavingsAmount');
  const marketCostSpan = document.getElementById('calcMarketPrice');
  const landShareCostSpan = document.getElementById('calcLandSharePrice');

  if (!sizeInput || !resultSavings) return;

  const sqft = parseFloat(sizeInput.value) || 1350;
  // Dhaka market standard:
  // Standard developer rate: approx Tk 5,800 - 6,500/sq.ft
  // Land share cost-to-cost rate: approx Tk 3,600 - 4,000/sq.ft
  const devRate = 6000;
  const landShareRate = 3800;

  const totalDevPrice = (sqft * devRate);
  const totalLandSharePrice = (sqft * landShareRate);
  const totalSavings = totalDevPrice - totalLandSharePrice;

  const toLacFormat = (val) => {
    const lac = (val / 100000).toFixed(1);
    return `Tk ${lac} Lac (${val.toLocaleString('en-IN')}/-)`;
  };

  if (marketCostSpan) marketCostSpan.textContent = toLacFormat(totalDevPrice);
  if (landShareCostSpan) landShareCostSpan.textContent = toLacFormat(totalLandSharePrice);
  resultSavings.textContent = `Save ~${toLacFormat(totalSavings)}`;
}

// Quick Lead Form Submit directly to WhatsApp
function handleLeadFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('leadName')?.value || '';
  const phone = document.getElementById('leadPhone')?.value || '';
  const project = document.getElementById('leadProject')?.value || 'General Inquiry';
  const notes = document.getElementById('leadNotes')?.value || '';

  const message = `Assalamu Alaikum Alhaj Abdul Hannan,
My Name: ${name}
Phone: ${phone}
Interested In: ${project}
Requirements/Message: ${notes}

I am contacting you from your official website. Please get in touch with me.`;

  const waUrl = `https://wa.me/8801915075522?text=${encodeURIComponent(message)}`;
  
  // Show confirmation alert
  const alertBox = document.getElementById('formSuccessMessage');
  if (alertBox) {
    alertBox.classList.remove('hidden');
    setTimeout(() => {
      alertBox.classList.add('hidden');
    }, 6000);
  }

  // Open WhatsApp in new window
  window.open(waUrl, '_blank');
}

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initProperties();

  // Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-tab').forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white', 'shadow');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
      });
      btn.classList.add('bg-slate-900', 'text-white', 'shadow');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderProperties();
    });
  });

  // Search Input
  const searchInput = document.getElementById('propertySearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderProperties();
    });
  }

  // Modal Backdrop Click
  const modal = document.getElementById('propertyModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closePropertyModal();
      }
    });
  }

  // Land Share Calc Slider
  const calcSlider = document.getElementById('calcFlatSize');
  if (calcSlider) {
    calcSlider.addEventListener('input', () => {
      const valLabel = document.getElementById('calcFlatSizeLabel');
      if (valLabel) valLabel.textContent = `${calcSlider.value} sq.ft`;
      calculateLandShareSavings();
    });
    calculateLandShareSavings();
  }

  // Lead Form
  const leadForm = document.getElementById('inquiryForm');
  if (leadForm) {
    leadForm.addEventListener('submit', handleLeadFormSubmit);
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});
