/**
 * Felicia Collections - Mobile 2-Column Auto-Carousel & Interactive Filter System
 * Provides 2-item swipeable carousels on mobile & comprehensive category/color/price filtering
 */

(function() {
  'use strict';

  // Product Metadata Dictionary (mapping ID -> color, price, category slug)
  const productMeta = {
    // --- Handbags (1-21) ---
    1: { id: 1, price: 6500, color: 'black', cat: 'shoulder', page: 'handbags' },
    2: { id: 2, price: 5800, color: 'cream', cat: 'crossbody', page: 'handbags' },
    3: { id: 3, price: 7200, color: 'tan', cat: 'satchels', page: 'handbags' },
    4: { id: 4, price: 4500, color: 'black', cat: 'clutches', page: 'handbags' },
    5: { id: 5, price: 6200, color: 'burgundy', cat: 'crossbody', page: 'handbags' },
    6: { id: 6, price: 8500, color: 'black', cat: 'totes', page: 'handbags' },
    7: { id: 7, price: 7800, color: 'tan', cat: 'satchels', page: 'handbags' },
    8: { id: 8, price: 6900, color: 'tan', cat: 'shoulder', page: 'handbags' },
    9: { id: 9, price: 5500, color: 'pink', cat: 'crossbody', page: 'handbags' },
    10: { id: 10, price: 8900, color: 'black', cat: 'totes', page: 'handbags' },
    11: { id: 11, price: 6800, color: 'gold', cat: 'shoulder', page: 'handbags' },
    12: { id: 12, price: 5200, color: 'white', cat: 'crossbody', page: 'handbags' },
    13: { id: 13, price: 7500, color: 'burgundy', cat: 'satchels', page: 'handbags' },
    14: { id: 14, price: 8200, color: 'tan', cat: 'totes', page: 'handbags' },
    15: { id: 15, price: 6400, color: 'cream', cat: 'shoulder', page: 'handbags' },
    16: { id: 16, price: 7900, color: 'black', cat: 'satchels', page: 'handbags' },
    17: { id: 17, price: 4800, color: 'gold', cat: 'clutches', page: 'handbags' },
    18: { id: 18, price: 6100, color: 'pink', cat: 'crossbody', page: 'handbags' },
    19: { id: 19, price: 9500, color: 'tan', cat: 'totes', page: 'handbags' },
    20: { id: 20, price: 5600, color: 'gold', cat: 'clutches', page: 'handbags' },
    21: { id: 21, price: 4950, color: 'white', cat: 'crossbody', page: 'handbags' },

    // --- Women Wear (101-110) ---
    101: { id: 101, price: 8500, color: 'black', cat: 'cocktail', page: 'women-wear' },
    102: { id: 102, price: 9200, color: 'pink', cat: 'cocktail', page: 'women-wear' },
    103: { id: 103, price: 10800, color: 'burgundy', cat: 'midi', page: 'women-wear' },
    104: { id: 104, price: 16500, color: 'pink', cat: 'gala', page: 'women-wear' },
    105: { id: 105, price: 18500, color: 'gold', cat: 'evening', page: 'women-wear' },
    106: { id: 106, price: 17800, color: 'burgundy', cat: 'evening', page: 'women-wear' },
    107: { id: 107, price: 13500, color: 'burgundy', cat: 'gala', page: 'women-wear' },
    108: { id: 108, price: 19800, color: 'black', cat: 'gala', page: 'women-wear' },
    109: { id: 109, price: 11800, color: 'cream', cat: 'midi', page: 'women-wear' },
    110: { id: 110, price: 11200, color: 'tan', cat: 'midi', page: 'women-wear' },

    // --- Beddings (201-210) ---
    201: { id: 201, price: 11800, color: 'white', cat: 'duvet', page: 'beddings' },
    202: { id: 202, price: 12500, color: 'black', cat: 'duvet', page: 'beddings' },
    203: { id: 203, price: 14800, color: 'tan', cat: 'comforter', page: 'beddings' },
    204: { id: 204, price: 13900, color: 'cream', cat: 'duvet', page: 'beddings' },
    205: { id: 205, price: 11500, color: 'tan', cat: 'duvet', page: 'beddings' },
    206: { id: 206, price: 19800, color: 'gold', cat: 'comforter', page: 'beddings' },
    207: { id: 207, price: 8500, color: 'white', cat: 'sheets', page: 'beddings' },
    208: { id: 208, price: 7800, color: 'white', cat: 'pillows', page: 'beddings' },
    209: { id: 209, price: 9500, color: 'cream', cat: 'sheets', page: 'beddings' },
    210: { id: 210, price: 13500, color: 'black', cat: 'duvet', page: 'beddings' },
    211: { id: 211, price: 2200, color: 'cream', cat: 'pillows', page: 'beddings' },
    212: { id: 212, price: 2500, color: 'black', cat: 'pillows', page: 'beddings' },
    213: { id: 213, price: 3400, color: 'tan', cat: 'duvet', page: 'beddings' },
    214: { id: 214, price: 2200, color: 'cream', cat: 'sheets', page: 'beddings' },
    215: { id: 215, price: 4000, color: 'pink', cat: 'pillows', page: 'beddings' },
    216: { id: 216, price: 2000, color: 'white', cat: 'sheets', page: 'beddings' },
    217: { id: 217, price: 1200, color: 'white', cat: 'pillows', page: 'beddings' },
    218: { id: 218, price: 4800, color: 'tan', cat: 'duvet', page: 'beddings' },
    219: { id: 219, price: 1500, color: 'tan', cat: 'comforter', page: 'beddings' },
    220: { id: 220, price: 1300, color: 'cream', cat: 'comforter', page: 'beddings' },
    221: { id: 221, price: 1200, color: 'white', cat: 'pillows', page: 'beddings' },
    222: { id: 222, price: 2200, color: 'tan', cat: 'comforter', page: 'beddings' },
    223: { id: 223, price: 4200, color: 'cream', cat: 'duvet', page: 'beddings' },
    224: { id: 224, price: 3900, color: 'burgundy', cat: 'duvet', page: 'beddings' },
    225: { id: 225, price: 450, color: 'cream', cat: 'pillows', page: 'beddings' },
    226: { id: 226, price: 2400, color: 'black', cat: 'pillows', page: 'beddings' },
    227: { id: 227, price: 3500, color: 'cream', cat: 'duvet', page: 'beddings' },
    228: { id: 228, price: 3700, color: 'pink', cat: 'duvet', page: 'beddings' },
    229: { id: 229, price: 3300, color: 'white', cat: 'duvet', page: 'beddings' },
    230: { id: 230, price: 3500, color: 'gold', cat: 'duvet', page: 'beddings' },
    231: { id: 231, price: 2900, color: 'white', cat: 'duvet', page: 'beddings' },
    232: { id: 232, price: 2600, color: 'tan', cat: 'duvet', page: 'beddings' },
    233: { id: 233, price: 2400, color: 'cream', cat: 'comforter', page: 'beddings' },
    234: { id: 234, price: 2700, color: 'white', cat: 'sheets', page: 'beddings' },
    235: { id: 235, price: 3400, color: 'blue', cat: 'duvet', page: 'beddings' },
    236: { id: 236, price: 4300, color: 'tan', cat: 'duvet', page: 'beddings' },

    // --- Kitchen Items (301-310) ---
    301: { id: 301, price: 18500, color: 'gold', cat: 'cookware', page: 'kitchen' },
    302: { id: 302, price: 16800, color: 'cream', cat: 'cookware', page: 'kitchen' },
    303: { id: 303, price: 14500, color: 'black', cat: 'appliances', page: 'kitchen' },
    304: { id: 304, price: 15200, color: 'black', cat: 'appliances', page: 'kitchen' },
    305: { id: 305, price: 9800, color: 'black', cat: 'appliances', page: 'kitchen' },
    306: { id: 306, price: 10500, color: 'white', cat: 'appliances', page: 'kitchen' },
    307: { id: 307, price: 7200, color: 'white', cat: 'appliances', page: 'kitchen' },
    308: { id: 308, price: 5800, color: 'burgundy', cat: 'dinnerware', page: 'kitchen' },
    309: { id: 309, price: 8900, color: 'burgundy', cat: 'dinnerware', page: 'kitchen' },
    310: { id: 310, price: 28500, color: 'gold', cat: 'dinnerware', page: 'kitchen' }
  };

  /**
   * 1. Enrich all product cards with metadata attributes
   */
  function enrichCards() {
    const cards = document.querySelectorAll('.felicia-product-card');
    cards.forEach((card, index) => {
      // Find modal ID
      const onclickAttr = card.querySelector('[onclick*="openProductModal"], [onclick*="addToCart"]');
      let id = null;
      if (onclickAttr) {
        const match = onclickAttr.getAttribute('onclick').match(/\((\d+)\)/);
        if (match) id = parseInt(match[1], 10);
      }

      if (id && productMeta[id]) {
        const meta = productMeta[id];
        card.setAttribute('data-id', id);
        if (!card.getAttribute('data-price')) card.setAttribute('data-price', meta.price);
        if (!card.getAttribute('data-color')) card.setAttribute('data-color', meta.color);
        // On bestsellers, category is 'handbags', 'women-wear', etc.
        const parentGrid = card.closest('#bestsellers-grid');
        if (!parentGrid && !card.getAttribute('data-category')) {
          card.setAttribute('data-category', meta.cat);
        }
      } else {
        // Fallback: parse price from text if available
        const priceEl = card.querySelector('.felicia-card-price');
        if (priceEl && !card.getAttribute('data-price')) {
          const num = parseInt(priceEl.textContent.replace(/[^0-9]/g, ''), 10);
          if (!isNaN(num)) card.setAttribute('data-price', num);
        }
        if (!card.getAttribute('data-color')) {
          card.setAttribute('data-color', 'cream');
        }
      }
      card.setAttribute('data-original-order', index);
    });
  }

  /**
   * 2. Initialize Mobile 2-Column Auto-Carousel
   */
  function initMobileCarousels() {
    const carouselTargets = [
      '.felicia-category-grid',
      '#bestsellers-grid',
      '#handbag-grid',
      '#apparel-grid',
      '#beddings-grid',
      '#kitchen-grid'
    ];

    carouselTargets.forEach(selector => {
      const el = document.querySelector(selector);
      if (!el) return;

      // Ensure wrapped in a .felicia-carousel-wrapper
      let wrapper = el.closest('.felicia-carousel-wrapper');
      if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.className = 'felicia-carousel-wrapper';
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
      }

      // Add circular arrow buttons if missing
      let prevBtn = wrapper.querySelector('.felicia-carousel-prev');
      let nextBtn = wrapper.querySelector('.felicia-carousel-next');

      if (!prevBtn) {
        prevBtn = document.createElement('button');
        prevBtn.type = 'button';
        prevBtn.className = 'felicia-carousel-arrow felicia-carousel-prev';
        prevBtn.setAttribute('aria-label', 'Previous Products');
        prevBtn.innerHTML = '&#10094;';
        wrapper.appendChild(prevBtn);
      }

      if (!nextBtn) {
        nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'felicia-carousel-arrow felicia-carousel-next';
        nextBtn.setAttribute('aria-label', 'Next Products');
        nextBtn.innerHTML = '&#10095;';
        wrapper.appendChild(nextBtn);
      }

      // Calculate step for scrolling 2 cards at a time
      function getScrollStep() {
        const cards = el.querySelectorAll('.felicia-product-card');
        if (cards.length >= 2) {
          const card1 = cards[0].getBoundingClientRect();
          const card2 = cards[1].getBoundingClientRect();
          const cardWidth = card1.width;
          const gap = card2.left - card1.right;
          return (cardWidth * 2) + (gap * 2);
        }
        return el.clientWidth * 0.9;
      }

      prevBtn.onclick = function(e) {
        e.preventDefault();
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft <= 15) {
          el.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          const target = Math.max(el.scrollLeft - getScrollStep(), 0);
          el.scrollTo({ left: target, behavior: 'smooth' });
        }
        pauseAutoSlide();
      };

      nextBtn.onclick = function(e) {
        e.preventDefault();
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 15) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const target = Math.min(el.scrollLeft + getScrollStep(), maxScroll);
          el.scrollTo({ left: target, behavior: 'smooth' });
        }
        pauseAutoSlide();
      };

      // Auto-slide state with smooth looping
      let autoInterval = null;
      let isPaused = false;
      let pauseTimeout = null;

      function pauseAutoSlide() {
        isPaused = true;
        clearTimeout(pauseTimeout);
        pauseTimeout = setTimeout(() => {
          isPaused = false;
        }, 4000);
      }

      function startAutoSlide() {
        if (autoInterval) clearInterval(autoInterval);
        autoInterval = setInterval(() => {
          // Only auto-slide on mobile viewports <= 767px
          if (window.innerWidth > 767 || isPaused) return;

          // Check if carousel element is visible in viewport
          const rect = el.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;

          const maxScroll = el.scrollWidth - el.clientWidth;
          if (maxScroll <= 10) return;

          // Smooth loop back to first slide when reaching end
          if (el.scrollLeft >= maxScroll - 20) {
            el.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            const nextPos = Math.min(el.scrollLeft + getScrollStep(), maxScroll);
            el.scrollTo({ left: nextPos, behavior: 'smooth' });
          }
        }, 3500);
      }

      el.addEventListener('touchstart', pauseAutoSlide, { passive: true });
      el.addEventListener('touchmove', pauseAutoSlide, { passive: true });
      el.addEventListener('touchend', () => {
        clearTimeout(pauseTimeout);
        pauseTimeout = setTimeout(() => { isPaused = false; }, 3500);
      }, { passive: true });
      el.addEventListener('mouseenter', pauseAutoSlide);
      el.addEventListener('mouseleave', () => { isPaused = false; });

      startAutoSlide();
    });
  }

  /**
   * 3. Interactive Filter & Sort Engine
   */
  function initFilterEngine() {
    const toolbars = document.querySelectorAll('.felicia-filter-toolbar');
    if (!toolbars.length) return;

    toolbars.forEach(toolbar => {
      const targetGridId = toolbar.getAttribute('data-target-grid');
      const grid = document.getElementById(targetGridId);
      if (!grid) return;

      const state = {
        category: 'all',
        color: 'all',
        priceBracket: 'all',
        maxPrice: 35000,
        sort: 'featured'
      };

      const drawer = toolbar.querySelector('.felicia-filter-drawer');
      const toggleBtn = toolbar.querySelector('.felicia-filter-toggle-btn');
      const badge = toolbar.querySelector('.felicia-filter-badge');
      const countEl = toolbar.querySelector('.felicia-items-count strong');
      const categoryChips = toolbar.querySelectorAll('.felicia-chip');
      const colorSwatches = toolbar.querySelectorAll('.felicia-color-swatch');
      const pricePills = toolbar.querySelectorAll('.felicia-price-pill');
      const priceSlider = toolbar.querySelector('.felicia-price-slider');
      const sliderValText = toolbar.querySelector('.felicia-slider-val-num');
      const sortSelect = toolbar.querySelector('.felicia-sort-select');
      const resetBtn = toolbar.querySelector('.felicia-btn-reset-filters');
      const applyBtn = toolbar.querySelector('.felicia-btn-apply-filters');

      // Drawer Toggle
      if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', () => {
          drawer.classList.toggle('open');
          toggleBtn.classList.toggle('active', drawer.classList.contains('open'));
        });
      }
      if (applyBtn && drawer) {
        applyBtn.addEventListener('click', () => {
          drawer.classList.remove('open');
          if (toggleBtn) toggleBtn.classList.remove('active');
        });
      }

      // Category Chips
      categoryChips.forEach(chip => {
        chip.addEventListener('click', () => {
          categoryChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          state.category = chip.getAttribute('data-category') || 'all';
          applyFilters();
        });
      });

      // Color Swatches
      colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
          colorSwatches.forEach(s => s.classList.remove('active'));
          swatch.classList.add('active');
          state.color = swatch.getAttribute('data-color') || 'all';
          applyFilters();
        });
      });

      // Price Brackets
      pricePills.forEach(pill => {
        pill.addEventListener('click', () => {
          pricePills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          state.priceBracket = pill.getAttribute('data-price-bracket') || 'all';
          applyFilters();
        });
      });

      // Price Range Slider
      if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value, 10);
          state.maxPrice = val;
          if (sliderValText) sliderValText.textContent = `KSh ${val.toLocaleString()}`;
          applyFilters();
        });
      }

      // Sort Select
      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
          state.sort = e.target.value;
          applyFilters();
        });
      }

      // Reset Button
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAll);
      }

      function resetAll() {
        state.category = 'all';
        state.color = 'all';
        state.priceBracket = 'all';
        state.maxPrice = 35000;
        state.sort = 'featured';

        categoryChips.forEach(c => c.classList.toggle('active', c.getAttribute('data-category') === 'all'));
        colorSwatches.forEach(s => s.classList.toggle('active', s.getAttribute('data-color') === 'all'));
        pricePills.forEach(p => p.classList.toggle('active', p.getAttribute('data-price-bracket') === 'all'));

        if (priceSlider) {
          priceSlider.value = 35000;
          if (sliderValText) sliderValText.textContent = 'KSh 35,000';
        }
        if (sortSelect) sortSelect.value = 'featured';

        applyFilters();
      }

      window[`resetFilters_${targetGridId}`] = resetAll;

      function applyFilters() {
        const cards = Array.from(grid.querySelectorAll('.felicia-product-card'));
        let visibleCount = 0;
        let activeFilterCount = 0;

        if (state.category !== 'all') activeFilterCount++;
        if (state.color !== 'all') activeFilterCount++;
        if (state.priceBracket !== 'all' || state.maxPrice < 35000) activeFilterCount++;

        if (badge) {
          badge.textContent = activeFilterCount;
          badge.style.display = activeFilterCount > 0 ? 'inline-block' : 'none';
        }

        cards.forEach(card => {
          const cat = card.getAttribute('data-category') || '';
          const col = card.getAttribute('data-color') || '';
          const price = parseInt(card.getAttribute('data-price') || '0', 10);

          // Category match
          const catMatch = (state.category === 'all' || cat === state.category);

          // Color match
          const colMatch = (state.color === 'all' || col === state.color);

          // Price Bracket match
          let bracketMatch = true;
          if (state.priceBracket === 'under-3000') bracketMatch = (price < 3000);
          else if (state.priceBracket === '3000-6000') bracketMatch = (price >= 3000 && price <= 6000);
          else if (state.priceBracket === '6000-12000') bracketMatch = (price > 6000 && price <= 12000);
          else if (state.priceBracket === 'above-12000') bracketMatch = (price > 12000);

          // Slider match
          const sliderMatch = (price <= state.maxPrice);

          const isVisible = catMatch && colMatch && bracketMatch && sliderMatch;

          if (isVisible) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Sorting
        const visibleCards = cards.filter(c => c.style.display !== 'none');
        if (state.sort === 'price-asc') {
          visibleCards.sort((a, b) => parseInt(a.getAttribute('data-price'), 10) - parseInt(b.getAttribute('data-price'), 10));
          visibleCards.forEach(c => grid.appendChild(c));
        } else if (state.sort === 'price-desc') {
          visibleCards.sort((a, b) => parseInt(b.getAttribute('data-price'), 10) - parseInt(a.getAttribute('data-price'), 10));
          visibleCards.forEach(c => grid.appendChild(c));
        } else if (state.sort === 'newest') {
          visibleCards.sort((a, b) => parseInt(b.getAttribute('data-id') || 0, 10) - parseInt(a.getAttribute('data-id') || 0, 10));
          visibleCards.forEach(c => grid.appendChild(c));
        } else {
          // 'featured' / default order
          visibleCards.sort((a, b) => parseInt(a.getAttribute('data-original-order') || 0, 10) - parseInt(b.getAttribute('data-original-order') || 0, 10));
          visibleCards.forEach(c => grid.appendChild(c));
        }

        // Live Item Counter
        if (countEl) countEl.textContent = visibleCount;

        // No Results Notice
        let noResults = grid.querySelector('.felicia-no-results');
        if (visibleCount === 0) {
          if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'felicia-no-results';
            noResults.innerHTML = `
              <h3>No matching products found</h3>
              <p>Try adjusting your category, color, or price range filters.</p>
              <button type="button" onclick="window.resetFilters_${targetGridId}()">Reset All Filters</button>
            `;
            grid.appendChild(noResults);
          }
          noResults.style.display = 'block';
        } else if (noResults) {
          noResults.style.display = 'none';
        }

        // Reset scroll position on filter change
        grid.scrollTo({ left: 0, behavior: 'smooth' });
      }

      // Initial filter pass
      applyFilters();
    });
  }

  /**
   * 4. Multi-Image Slideshow Rotators on Product Cards
   * Ultra-slow, imperceptible dual-layer cinematic crossfade dissolve
   */
  function initCardMultiImageRotators() {
    const cards = document.querySelectorAll('.felicia-product-card');
    cards.forEach(card => {
      let images = [];
      const dataImgs = card.getAttribute('data-images');
      if (dataImgs) {
        try { images = JSON.parse(dataImgs); } catch(e) {}
      } else {
        const idAttr = card.getAttribute('data-id');
        if (idAttr && window.feliciaGetProduct) {
          const p = window.feliciaGetProduct(idAttr);
          if (p && p.images && p.images.length > 1) images = p.images;
        }
      }

      if (!images || images.length <= 1) return;

      const imgWrapper = card.querySelector('.felicia-card-img-wrapper');
      const imgEl = imgWrapper ? imgWrapper.querySelector('img:not(.felicia-card-img-crossfade)') : null;
      if (!imgEl) return;

      // Remove dots container if present to keep product photo pristine & unobstructed
      const existingDots = imgWrapper.querySelector('.felicia-card-dots');
      if (existingDots) existingDots.remove();

      // Preload all variant images in memory for zero-lag smooth dissolve
      images.forEach(src => {
        const cacheImg = new Image();
        cacheImg.src = src;
      });

      let currentIdx = 0;
      let timer = null;
      let isPaused = false;
      let transitionTimer = null;

      // Create dual-layer crossfade overlay element
      let crossfadeImg = imgWrapper.querySelector('.felicia-card-img-crossfade');
      if (!crossfadeImg) {
        crossfadeImg = document.createElement('img');
        crossfadeImg.className = 'felicia-card-img-crossfade';
        crossfadeImg.alt = imgEl.alt || '';
        crossfadeImg.setAttribute('aria-hidden', 'true');
        crossfadeImg.loading = 'eager';
        imgWrapper.appendChild(crossfadeImg);
      }

      function showCardImage(idx, immediate = false) {
        const targetIdx = (idx + images.length) % images.length;
        if (targetIdx === currentIdx && !immediate) return;
        currentIdx = targetIdx;

        const targetSrc = images[currentIdx];

        if (immediate) {
          if (transitionTimer) clearTimeout(transitionTimer);
          crossfadeImg.style.transition = 'none';
          crossfadeImg.style.opacity = '0';
          imgEl.src = targetSrc;
          return;
        }

        const preloader = new Image();
        preloader.onload = () => {
          if (transitionTimer) clearTimeout(transitionTimer);

          crossfadeImg.src = targetSrc;
          crossfadeImg.alt = imgEl.alt || '';
          crossfadeImg.style.transition = 'none';
          crossfadeImg.style.opacity = '0';

          // Force reflow
          void crossfadeImg.offsetWidth;

          // Ultra-slow, dreamy imperceptible crossfade over 2.5 seconds
          crossfadeImg.style.transition = 'opacity 2.5s cubic-bezier(0.42, 0, 0.58, 1)';
          crossfadeImg.style.opacity = '1';

          transitionTimer = setTimeout(() => {
            imgEl.src = targetSrc;
            crossfadeImg.style.transition = 'none';
            crossfadeImg.style.opacity = '0';
            transitionTimer = null;
          }, 2550);
        };
        preloader.src = targetSrc;
      }

      function startTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(() => {
          if (!isPaused) {
            showCardImage(currentIdx + 1);
          }
        }, 6500);
      }

      card.addEventListener('mouseenter', () => { isPaused = true; });
      card.addEventListener('mouseleave', () => { isPaused = false; });
      card.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
      card.addEventListener('touchend', () => {
        setTimeout(() => { isPaused = false; }, 4000);
      }, { passive: true });

      startTimer();
    });
  }

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      enrichCards();
      initMobileCarousels();
      initFilterEngine();
      initCardMultiImageRotators();
    });
  } else {
    enrichCards();
    initMobileCarousels();
    initFilterEngine();
    initCardMultiImageRotators();
  }
})();
