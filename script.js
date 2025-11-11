/**
 * Portfolio Website JavaScript
 * Handles scroll behavior, mobile navigation, animations, and dynamic content
 */

// ============================================================================
// SCROLL TO TOP FUNCTIONALITY
// ============================================================================

/**
 * Scroll to top when page is about to unload (refresh/navigation)
 * Ensures consistent starting position when user returns to the page
 */
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

/**
 * Scroll to top when page finishes loading
 * Prevents browser from restoring previous scroll position
 */
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// ============================================================================
// MOBILE NAVIGATION TOGGLE
// ============================================================================

/**
 * Mobile navigation menu toggle functionality
 * Handles hamburger menu button click and navigation link clicks
 */
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  /**
   * Toggle navigation menu open/closed when hamburger button is clicked
   * Updates aria-expanded attribute for accessibility
   */
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  /**
   * Close navigation menu when a navigation link is clicked
   * Improves UX on mobile devices by auto-closing menu after navigation
   */
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================================
// REVEAL ANIMATIONS (SCROLL-TRIGGERED)
// ============================================================================

/**
 * Intersection Observer for scroll-triggered reveal animations
 * Elements with class 'reveal' fade in and slide up when they enter viewport
 */
const revealEls = document.querySelectorAll('.reveal');

// Create Intersection Observer with 12% visibility threshold
// This means animation triggers when 12% of the element is visible
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // When element enters viewport, add 'is-visible' class to trigger animation
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Stop observing this element after animation triggers (performance optimization)
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Start observing all elements with 'reveal' class
revealEls.forEach((el) => io.observe(el));

// ============================================================================
// DYNAMIC FOOTER YEAR
// ============================================================================

/**
 * Update footer copyright year dynamically
 * Automatically displays current year without manual updates
 */
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}


