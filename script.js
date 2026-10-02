/**
 * LUMINA — Visual Gallery
 * Premium Interactive Engine: Masonry Gallery, Lightbox, Real-time Filters,
 * Search, LocalStorage Favorites, Dynamic Theme Engine, and Viewport Reveals.
 */

// --------------------------------------------------------------------------
// 1. Gallery Dataset (18 Curated High-Fidelity Works)
// --------------------------------------------------------------------------
const GALLERY_DATA = [
  {
    id: "lumina-01",
    title: "Sierra Reflections",
    category: "Nature",
    caption: "First dawn illuminating granite peaks and crystalline mirror water in the alpine wilderness.",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "16/10",
    photographer: "Elena Vance",
    location: "Yosemite Valley, USA",
    year: "2024",
    featured: true
  },
  {
    id: "lumina-02",
    title: "Monolithic Rhythm",
    category: "Architecture",
    caption: "Sharp geometric silhouettes and cast shadows dancing across raw brutalist architectural surfaces.",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "4/5",
    photographer: "Marcus Theron",
    location: "Kyoto, Japan",
    year: "2024",
    featured: true
  },
  {
    id: "lumina-03",
    title: "Golden Hour in Kyoto",
    category: "Travel",
    caption: "Centuries-old stone alleys illuminated by the warm amber amber glow of traditional paper lanterns.",
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "16/10",
    photographer: "Kenji Sato",
    location: "Gion District, Japan",
    year: "2023",
    featured: true
  },
  {
    id: "lumina-04",
    title: "The Sculptor's Gaze",
    category: "People",
    caption: "An intimate study of quiet intensity and concentration in natural northern window illumination.",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "4/5",
    photographer: "Claire Laurent",
    location: "Paris, France",
    year: "2024",
    featured: false
  },
  {
    id: "lumina-05",
    title: "Chromatic Fluidity",
    category: "Abstract",
    caption: "Mineral pigments and oceanic currents colliding in organic, marble-like macro swirls.",
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "1/1",
    photographer: "Astrid Lindholm",
    location: "Reykjavík, Iceland",
    year: "2023",
    featured: false
  },
  {
    id: "lumina-06",
    title: "Morning Solitude",
    category: "Lifestyle",
    caption: "A quiet meditation on warm linen, fresh roasted espresso, and early sunlight cascading across oak.",
    url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "16/11",
    photographer: "Niko Berg",
    location: "Stockholm, Sweden",
    year: "2024",
    featured: false
  },
  {
    id: "lumina-07",
    title: "Emerald Primeval",
    category: "Nature",
    caption: "Centuries-old moss-draped hemlocks breathing moisture into a temperate Pacific rainforest.",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "16/9",
    photographer: "Liam Campbell",
    location: "Olympic Peninsula, USA",
    year: "2023",
    featured: true
  },
  {
    id: "lumina-08",
    title: "Spiral Ascension",
    category: "Architecture",
    caption: "An impossible concrete vortex suspended in gravity, photographed with central one-point perspective.",
    url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "4/5",
    photographer: "Zaha Sterling",
    location: "Basel, Switzerland",
    year: "2024",
    featured: false
  },
  {
    id: "lumina-09",
    title: "Sands of the Erg",
    category: "Travel",
    caption: "Sculpted windward ridges casting razor-sharp cobalt shadows across endless terracotta dunes.",
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "16/10",
    photographer: "Amine Belkacem",
    location: "Merzouga, Morocco",
    year: "2023",
    featured: true
  },
  {
    id: "lumina-10",
    title: "The Portrait of Form",
    category: "People",
    caption: "Sculptural lighting highlighting facial geometry and reflective emotion in an open studio.",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "1/1",
    photographer: "David K.",
    location: "London, UK",
    year: "2024",
    featured: false
  },
  {
    id: "lumina-11",
    title: "Prism & Refraction",
    category: "Abstract",
    caption: "Architectural dichroic surfaces splintering daylight into radiant spectrum bands.",
    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "16/9",
    photographer: "Siddharth Rao",
    location: "Singapore",
    year: "2024",
    featured: false
  },
  {
    id: "lumina-12",
    title: "Sanctuary by the Fjord",
    category: "Lifestyle",
    caption: "Minimalist timber architecture harmonizing with the stillness of Norwegian coastal waterways.",
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "4/5",
    photographer: "Henrik Olsen",
    location: "Lofoten, Norway",
    year: "2023",
    featured: true
  },
  {
    id: "lumina-13",
    title: "Glacial Vault",
    category: "Nature",
    caption: "Subterranean chamber within millennia-old blue glacial ice, glistening in filtered cold daylight.",
    url: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "3/4",
    photographer: "Katrin Sigurdardóttir",
    location: "Vatnajökull, Iceland",
    year: "2024",
    featured: false
  },
  {
    id: "lumina-14",
    title: "Tectonic Glass",
    category: "Architecture",
    caption: "Soaring glass curtain walls reflecting the shifting sky in a symphony of vertical line.",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "16/9",
    photographer: "Oliver Chen",
    location: "Berlin, Germany",
    year: "2024",
    featured: false
  },
  {
    id: "lumina-15",
    title: "Azure Shoreline",
    category: "Travel",
    caption: "Crystalline sea breaking softly against pure white sand during the serene calm of midday.",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "16/10",
    photographer: "Mateo Rossi",
    location: "Sardinia, Italy",
    year: "2023",
    featured: false
  },
  {
    id: "lumina-16",
    title: "Contemplation",
    category: "People",
    caption: "A candid moment of stillness captured on 35mm film in the quiet backstreets of Montmartre.",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "4/5",
    photographer: "Sophie Moreau",
    location: "Paris, France",
    year: "2023",
    featured: false
  },
  {
    id: "lumina-17",
    title: "Aerial Estuary",
    category: "Abstract",
    caption: "High-altitude view of glacial meltwater carving dendritic branches across volcanic black earth.",
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "3/4",
    photographer: "Magnus Thor",
    location: "Highlands, Iceland",
    year: "2024",
    featured: false
  },
  {
    id: "lumina-18",
    title: "Botanical Solitude",
    category: "Lifestyle",
    caption: "Tropical foliage and soft conservatory shadows forming a living gallery of organic sculpture.",
    url: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1200&q=90",
    aspectRatio: "16/10",
    photographer: "Hannah Vane",
    location: "Kew Gardens, London",
    year: "2024",
    featured: false
  }
];

// --------------------------------------------------------------------------
// 2. Application State & Storage
// --------------------------------------------------------------------------
class LuminaApp {
  constructor() {
    this.items = GALLERY_DATA;
    this.currentFilter = "all";
    this.searchQuery = "";
    this.favorites = this.loadFavorites();
    this.currentFilteredItems = [...this.items];
    this.currentLightboxIndex = 0;

    // DOM Elements Cache
    this.dom = {
      navbar: document.getElementById("navbar"),
      navLinks: document.querySelectorAll(".nav-link"),
      themeToggle: document.getElementById("themeToggle"),
      themeIcon: document.getElementById("themeIcon"),
      hamburger: document.getElementById("hamburger"),
      mobileNav: document.getElementById("mobileNav"),
      mobileNavLinks: document.querySelectorAll(".mobile-nav-link"),
      galleryGrid: document.getElementById("galleryGrid"),
      galleryEmpty: document.getElementById("galleryEmpty"),
      filterButtons: document.querySelectorAll(".filter-btn"),
      searchInput: document.getElementById("searchInput"),
      searchClearBtn: document.getElementById("searchClearBtn"),
      galleryCountDisplay: document.getElementById("galleryCountDisplay"),
      favFilterCount: document.getElementById("favFilterCount"),
      quickSearchBtn: document.getElementById("quickSearchBtn"),
      backToTopBtn: document.getElementById("backToTopBtn"),
      viewGridBtn: document.getElementById("viewGridBtn"),
      viewMasonryBtn: document.getElementById("viewMasonryBtn"),
      // Lightbox Elements
      lightboxModal: document.getElementById("lightboxModal"),
      lightboxImage: document.getElementById("lightboxImage"),
      lightboxTitle: document.getElementById("lightboxTitle"),
      lightboxCategory: document.getElementById("lightboxCategory"),
      lightboxCaption: document.getElementById("lightboxCaption"),
      lightboxDetails: document.getElementById("lightboxDetails"),
      lightboxCounter: document.getElementById("lightboxCounter"),
      lightboxCloseBtn: document.getElementById("lightboxCloseBtn"),
      lightboxPrevBtn: document.getElementById("lightboxPrevBtn"),
      lightboxNextBtn: document.getElementById("lightboxNextBtn"),
      lightboxFavBtn: document.getElementById("lightboxFavBtn"),
      // Contact Form
      contactForm: document.getElementById("contactForm"),
      toastContainer: document.getElementById("toastContainer")
    };

    this.layoutMode = localStorage.getItem("lumina_layout") || "grid";
    this.init();
  }

  init() {
    this.initTheme();
    this.initLayoutMode();
    this.bindEvents();
    this.updateFavoritesCountBadge();
    this.renderGallery();
    this.initIntersectionObserver();
  }

  initLayoutMode() {
    this.setLayoutMode(this.layoutMode, false);
  }

  setLayoutMode(mode, showNotice = true) {
    this.layoutMode = mode;
    localStorage.setItem("lumina_layout", mode);

    if (this.dom.galleryGrid) {
      if (mode === "masonry") {
        this.dom.galleryGrid.classList.add("masonry-view");
      } else {
        this.dom.galleryGrid.classList.remove("masonry-view");
      }
    }

    if (this.dom.viewGridBtn && this.dom.viewMasonryBtn) {
      if (mode === "masonry") {
        this.dom.viewGridBtn.classList.remove("active");
        this.dom.viewMasonryBtn.classList.add("active");
      } else {
        this.dom.viewGridBtn.classList.add("active");
        this.dom.viewMasonryBtn.classList.remove("active");
      }
    }

    if (showNotice) {
      this.showToast(mode === "masonry" ? "Switched to Masonry View" : "Switched to Aligned Grid View");
      this.renderGallery();
    }
  }

  // ------------------------------------------------------------------------
  // Favorites Persistence
  // ------------------------------------------------------------------------
  loadFavorites() {
    try {
      const stored = localStorage.getItem("lumina_favorites");
      if (stored) {
        const arr = JSON.parse(stored);
        return new Set(Array.isArray(arr) ? arr : []);
      }
    } catch (e) {
      console.warn("Could not read favorites from localStorage", e);
    }
    // Default seed with 2 favorite items for great first impression
    return new Set(["lumina-01", "lumina-03"]);
  }

  saveFavorites() {
    try {
      localStorage.setItem("lumina_favorites", JSON.stringify([...this.favorites]));
    } catch (e) {
      console.warn("Could not save favorites to localStorage", e);
    }
  }

  toggleFavorite(id, triggerElement = null) {
    const isFav = this.favorites.has(id);
    const item = this.items.find((i) => i.id === id);

    if (isFav) {
      this.favorites.delete(id);
      this.showToast(`Removed "${item ? item.title : 'Image'}" from Favorites`);
    } else {
      this.favorites.add(id);
      this.showToast(`Saved "${item ? item.title : 'Image'}" to Favorites`, "heart");
    }

    this.saveFavorites();
    this.updateFavoritesCountBadge();

    // If currently filtered by favorites and un-favorited, re-filter smoothly
    if (this.currentFilter === "favorites") {
      this.applyFilterAndSearch();
    } else {
      // Update matching card heart button in gallery
      const cardFavBtn = document.querySelector(`.fav-btn[data-id="${id}"]`);
      if (cardFavBtn) {
        if (!isFav) {
          cardFavBtn.classList.add("favorited");
          cardFavBtn.setAttribute("aria-label", "Remove from favorites");
        } else {
          cardFavBtn.classList.remove("favorited");
          cardFavBtn.setAttribute("aria-label", "Add to favorites");
        }
      }
    }

    // Update lightbox favorite button if active
    if (this.dom.lightboxModal && this.dom.lightboxModal.classList.contains("open")) {
      const currentItem = this.currentFilteredItems[this.currentLightboxIndex];
      if (currentItem && currentItem.id === id) {
        this.updateLightboxFavState(!isFav);
      }
    }
  }

  updateFavoritesCountBadge() {
    if (this.dom.favFilterCount) {
      this.dom.favFilterCount.textContent = this.favorites.size;
    }
  }

  // ------------------------------------------------------------------------
  // Theme Engine (Dark / Light Mode)
  // ------------------------------------------------------------------------
  initTheme() {
    const savedTheme = localStorage.getItem("lumina_theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme ? savedTheme : prefersDark ? "dark" : "light";
    this.setTheme(initialTheme);
  }

  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("lumina_theme", theme);
    this.updateThemeIcon(theme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    this.setTheme(next);
    this.showToast(`Switched to ${next.toUpperCase()} mode`);
  }

  updateThemeIcon(theme) {
    if (!this.dom.themeIcon) return;
    if (theme === "dark") {
      // Moon -> Sun
      this.dom.themeIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      `;
      this.dom.themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
      // Sun -> Moon
      this.dom.themeIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      `;
      this.dom.themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  // ------------------------------------------------------------------------
  // Gallery Rendering & Filtering
  // ------------------------------------------------------------------------
  applyFilterAndSearch() {
    const q = this.searchQuery.trim().toLowerCase();

    this.currentFilteredItems = this.items.filter((item) => {
      // 1. Category / Favorites filter
      let matchesFilter = true;
      if (this.currentFilter === "favorites") {
        matchesFilter = this.favorites.has(item.id);
      } else if (this.currentFilter !== "all") {
        matchesFilter = item.category.toLowerCase() === this.currentFilter.toLowerCase();
      }

      if (!matchesFilter) return false;

      // 2. Search query filter
      if (!q) return true;

      const titleMatch = item.title.toLowerCase().includes(q);
      const catMatch = item.category.toLowerCase().includes(q);
      const captionMatch = item.caption.toLowerCase().includes(q);
      const locationMatch = (item.location || "").toLowerCase().includes(q);
      const photographerMatch = (item.photographer || "").toLowerCase().includes(q);

      return titleMatch || catMatch || captionMatch || locationMatch || photographerMatch;
    });

    this.renderGallery();
  }

  renderGallery() {
    const grid = this.dom.galleryGrid;
    const emptyState = this.dom.galleryEmpty;
    if (!grid) return;

    // Update count display
    if (this.dom.galleryCountDisplay) {
      const total = this.currentFilteredItems.length;
      this.dom.galleryCountDisplay.innerHTML = `Showing <strong>${total}</strong> ${total === 1 ? 'story' : 'stories'}`;
    }

    if (this.currentFilteredItems.length === 0) {
      grid.innerHTML = "";
      if (emptyState) {
        emptyState.classList.add("visible");
        const emptyTitle = emptyState.querySelector(".empty-title");
        const emptyText = emptyState.querySelector(".empty-text");
        if (this.currentFilter === "favorites") {
          emptyTitle.textContent = "No Favorites Saved";
          emptyText.textContent = "Explore our gallery and heart the moments that inspire you to curate your personal archive.";
        } else {
          emptyTitle.textContent = "No stories found";
          emptyText.textContent = "We couldn't find any captures matching your criteria. Try adjusting your search query or filter.";
        }
      }
      return;
    }

    if (emptyState) emptyState.classList.remove("visible");

    // Build Cards HTML
    const cardsHtml = this.currentFilteredItems.map((item, index) => {
      const isFav = this.favorites.has(item.id);
      const isMasonry = this.layoutMode === "masonry";
      return `
        <article class="gallery-card reveal" data-id="${item.id}" data-index="${index}" tabindex="0" role="button" aria-label="View ${item.title}">
          <div class="card-media aspect-${item.aspectRatio.replace('/', '-')}" ${isMasonry ? `style="aspect-ratio: ${item.aspectRatio};"` : ''}>
            <img 
              src="${item.url}" 
              alt="${item.title} - ${item.caption}"
              class="card-img"
              loading="lazy"
              onload="this.classList.add('loaded')"
              onerror="this.classList.add('loaded')"
            />
            <div class="card-overlay">
              <div class="overlay-top">
                <span class="card-category-tag">${item.category}</span>
                <button 
                  type="button" 
                  class="fav-btn ${isFav ? 'favorited' : ''}" 
                  data-id="${item.id}"
                  aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
                  title="Favorite"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </button>
              </div>

              <div class="overlay-center">
                <div class="view-indicator" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
              </div>

              <div class="overlay-bottom">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-caption">${item.caption}</p>
              </div>
            </div>
          </div>
          <div class="card-info">
            <span class="card-static-title">${item.title}</span>
            <span class="card-static-meta">${item.location} · ${item.year}</span>
          </div>
        </article>
      `;
    }).join("");

    grid.innerHTML = cardsHtml;

    // Attach card listeners
    grid.querySelectorAll(".gallery-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        // Prevent lightbox if clicked directly on favorite button
        if (e.target.closest(".fav-btn")) {
          const btn = e.target.closest(".fav-btn");
          const id = btn.getAttribute("data-id");
          this.toggleFavorite(id, btn);
          return;
        }

        const index = parseInt(card.getAttribute("data-index"), 10);
        this.openLightbox(index);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const index = parseInt(card.getAttribute("data-index"), 10);
          this.openLightbox(index);
        }
      });
    });

    // Re-bind intersection observer for new items
    this.refreshObserver();
  }

  // ------------------------------------------------------------------------
  // Lightbox Modal
  // ------------------------------------------------------------------------
  openLightbox(index) {
    if (index < 0 || index >= this.currentFilteredItems.length) return;
    this.currentLightboxIndex = index;
    const item = this.currentFilteredItems[index];

    // Populate contents
    this.dom.lightboxImage.src = item.url;
    this.dom.lightboxImage.alt = item.title;
    this.dom.lightboxTitle.textContent = item.title;
    this.dom.lightboxCategory.textContent = item.category;
    this.dom.lightboxCaption.textContent = item.caption;
    this.dom.lightboxDetails.textContent = `${item.location} · Shot by ${item.photographer} · ${item.year}`;
    this.dom.lightboxCounter.textContent = `${index + 1} / ${this.currentFilteredItems.length}`;

    // Update favorite state
    this.updateLightboxFavState(this.favorites.has(item.id));

    // Open with smooth class
    this.dom.lightboxModal.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent body scroll
    this.dom.lightboxCloseBtn.focus();
  }

  closeLightbox() {
    this.dom.lightboxModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  updateLightboxFavState(isFav) {
    if (!this.dom.lightboxFavBtn) return;
    if (isFav) {
      this.dom.lightboxFavBtn.classList.add("favorited");
      this.dom.lightboxFavBtn.setAttribute("aria-label", "Remove from favorites");
    } else {
      this.dom.lightboxFavBtn.classList.remove("favorited");
      this.dom.lightboxFavBtn.setAttribute("aria-label", "Save to favorites");
    }
  }

  nextLightboxItem() {
    if (this.currentFilteredItems.length <= 1) return;
    let nextIndex = this.currentLightboxIndex + 1;
    if (nextIndex >= this.currentFilteredItems.length) nextIndex = 0;
    this.openLightbox(nextIndex);
  }

  prevLightboxItem() {
    if (this.currentFilteredItems.length <= 1) return;
    let prevIndex = this.currentLightboxIndex - 1;
    if (prevIndex < 0) prevIndex = this.currentFilteredItems.length - 1;
    this.openLightbox(prevIndex);
  }

  // ------------------------------------------------------------------------
  // Toast Notification System
  // ------------------------------------------------------------------------
  showToast(message, type = "info") {
    if (!this.dom.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    
    let iconSvg = `
      <svg class="toast-icon ${type === 'heart' ? 'heart' : ''}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${type === 'heart' 
          ? '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'
          : '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'}
      </svg>
    `;

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    this.dom.toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, 3200);
  }

  // ------------------------------------------------------------------------
  // Intersection Observer for Smooth Scroll Reveals
  // ------------------------------------------------------------------------
  initIntersectionObserver() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
      return;
    }

    this.observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.08
    });

    document.querySelectorAll(".reveal").forEach((el) => {
      this.observer.observe(el);
    });
  }

  refreshObserver() {
    if (!this.observer) return;
    document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => {
      this.observer.observe(el);
    });
  }

  // ------------------------------------------------------------------------
  // Event Bindings
  // ------------------------------------------------------------------------
  bindEvents() {
    // 1. Theme Toggle
    if (this.dom.themeToggle) {
      this.dom.themeToggle.addEventListener("click", () => this.toggleTheme());
    }

    // 2. Sticky Navbar Blur on Scroll
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.dom.navbar) {
        if (scrollY > 30) {
          this.dom.navbar.classList.add("scrolled");
        } else {
          this.dom.navbar.classList.remove("scrolled");
        }
      }

      // Back to top visibility
      if (this.dom.backToTopBtn) {
        if (scrollY > 600) {
          this.dom.backToTopBtn.style.opacity = "1";
          this.dom.backToTopBtn.style.pointerEvents = "auto";
        } else {
          this.dom.backToTopBtn.style.opacity = "0.7";
        }
      }
    }, { passive: true });

    // 3. Mobile Hamburger
    if (this.dom.hamburger && this.dom.mobileNav) {
      this.dom.hamburger.addEventListener("click", () => {
        const isOpen = this.dom.mobileNav.classList.toggle("open");
        this.dom.hamburger.classList.toggle("open");
        this.dom.hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      this.dom.mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
          this.dom.mobileNav.classList.remove("open");
          this.dom.hamburger.classList.remove("open");
          this.dom.hamburger.setAttribute("aria-expanded", "false");
        });
      });
    }

    // 4. Quick Search Button (in navbar)
    if (this.dom.quickSearchBtn && this.dom.searchInput) {
      this.dom.quickSearchBtn.addEventListener("click", () => {
        const gallerySection = document.getElementById("gallery");
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            this.dom.searchInput.focus();
          }, 600);
        }
      });
    }

    // 5. Filter Buttons
    this.dom.filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.dom.filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentFilter = btn.getAttribute("data-filter") || "all";
        this.applyFilterAndSearch();
      });
    });

    // 6. Search Input & Clear
    if (this.dom.searchInput) {
      this.dom.searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        if (this.dom.searchClearBtn) {
          if (this.searchQuery.length > 0) {
            this.dom.searchClearBtn.classList.add("visible");
          } else {
            this.dom.searchClearBtn.classList.remove("visible");
          }
        }
        this.applyFilterAndSearch();
      });
    }

    if (this.dom.searchClearBtn && this.dom.searchInput) {
      this.dom.searchClearBtn.addEventListener("click", () => {
        this.dom.searchInput.value = "";
        this.searchQuery = "";
        this.dom.searchClearBtn.classList.remove("visible");
        this.applyFilterAndSearch();
        this.dom.searchInput.focus();
      });
    }

    // 7. Lightbox Controls
    if (this.dom.lightboxCloseBtn) {
      this.dom.lightboxCloseBtn.addEventListener("click", () => this.closeLightbox());
    }

    if (this.dom.lightboxPrevBtn) {
      this.dom.lightboxPrevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.prevLightboxItem();
      });
    }

    if (this.dom.lightboxNextBtn) {
      this.dom.lightboxNextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.nextLightboxItem();
      });
    }

    if (this.dom.lightboxFavBtn) {
      this.dom.lightboxFavBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const currentItem = this.currentFilteredItems[this.currentLightboxIndex];
        if (currentItem) {
          this.toggleFavorite(currentItem.id);
        }
      });
    }

    // 8. Gallery Layout Switcher (Grid vs Masonry)
    if (this.dom.viewGridBtn) {
      this.dom.viewGridBtn.addEventListener("click", () => {
        this.setLayoutMode("grid");
      });
    }

    if (this.dom.viewMasonryBtn) {
      this.dom.viewMasonryBtn.addEventListener("click", () => {
        this.setLayoutMode("masonry");
      });
    }

    // Click backdrop to close
    if (this.dom.lightboxModal) {
      this.dom.lightboxModal.addEventListener("click", (e) => {
        if (e.target === this.dom.lightboxModal || e.target.classList.contains("lightbox-container") || e.target.classList.contains("lightbox-body")) {
          this.closeLightbox();
        }
      });
    }

    // Keyboard Navigation for Lightbox
    window.addEventListener("keydown", (e) => {
      if (!this.dom.lightboxModal.classList.contains("open")) return;

      if (e.key === "Escape") {
        this.closeLightbox();
      } else if (e.key === "ArrowRight") {
        this.nextLightboxItem();
      } else if (e.key === "ArrowLeft") {
        this.prevLightboxItem();
      }
    });

    // 8. Featured Collections Buttons
    document.querySelectorAll(".explore-collection-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const cat = btn.getAttribute("data-category");
        if (cat) {
          const matchingFilterBtn = document.querySelector(`.filter-btn[data-filter="${cat.toLowerCase()}"]`);
          if (matchingFilterBtn) {
            this.dom.filterButtons.forEach((b) => b.classList.remove("active"));
            matchingFilterBtn.classList.add("active");
            this.currentFilter = cat.toLowerCase();
            this.applyFilterAndSearch();
          }
          const gallery = document.getElementById("gallery");
          if (gallery) {
            gallery.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    // 9. Back to Top Button
    if (this.dom.backToTopBtn) {
      this.dom.backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // 10. Contact Form Submission
    if (this.dom.contactForm) {
      this.dom.contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("contactName");
        const emailInput = document.getElementById("contactEmail");
        const messageInput = document.getElementById("contactMessage");

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
          this.showToast("Please fill out all fields.");
          return;
        }

        const submitBtn = this.dom.contactForm.querySelector("button[type='submit']");
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Transmitting Inquiry...";
        }

        setTimeout(() => {
          this.showToast("Inquiry received. A curator will respond within 24 hours.");
          this.dom.contactForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
              Send Inquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            `;
          }
        }, 800);
      });
    }

    // 11. Empty state reset button
    const emptyResetBtn = document.getElementById("emptyResetBtn");
    if (emptyResetBtn) {
      emptyResetBtn.addEventListener("click", () => {
        if (this.dom.searchInput) this.dom.searchInput.value = "";
        this.searchQuery = "";
        if (this.dom.searchClearBtn) this.dom.searchClearBtn.classList.remove("visible");
        
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) {
          this.dom.filterButtons.forEach((b) => b.classList.remove("active"));
          allBtn.classList.add("active");
          this.currentFilter = "all";
        }
        this.applyFilterAndSearch();
      });
    }
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.luminaApp = new LuminaApp();
});
