// js/components.js

// Apply saved (or system) theme as early as possible
(function () {
  let theme = null;
  try { theme = localStorage.getItem('theme'); } catch (e) {}
  if (!theme) {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
})();

class PortfolioNavbar extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname;
    const page = currentPath.split('/').pop() || 'index.html';

    const links = [
      { href: 'index.html',        label: 'Home' },
      { href: 'research.html',     label: 'Research' },
      { href: 'publications.html', label: 'Publications' },
      { href: 'teaching.html',     label: 'Teaching' },
      { href: 'projects.html',     label: 'Projects' },
      { href: 'cv.html',           label: 'CV' },
      { href: 'contact.html',      label: 'Contact' },
    ];

    const navItems = links.map(l => `
      <li><a href="${l.href}" class="${page === l.href ? 'active' : ''}" aria-current="${page === l.href ? 'page' : 'false'}">${l.label}</a></li>
    `).join('');

    this.innerHTML = `
      <nav role="navigation" aria-label="Main navigation">
        <a href="index.html" class="nav-logo" aria-label="Dr. M. S. H. Ansari — Home">M. S. H. Ansari</a>
        <ul class="nav-links" id="main-nav-links" role="list">
          ${navItems}
        </ul>
        <div class="nav-controls">
          <button class="theme-toggle" type="button" aria-label="Toggle dark and light mode">
            <span class="icon-moon" aria-hidden="true">🌙</span>
            <span class="icon-sun"  aria-hidden="true">☀️</span>
          </button>
          <button class="mobile-menu-btn" type="button" aria-expanded="false" aria-controls="main-nav-links" aria-label="Open navigation menu">
            <span class="hamburger-icon">☰</span>
            <span class="close-icon" style="display:none">✕</span>
          </button>
        </div>
      </nav>
    `;

    // Theme toggle
    const themeBtn = this.querySelector('.theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
      });
    }

    // Mobile menu toggle
    const menuBtn = this.querySelector('.mobile-menu-btn');
    const navLinks = this.querySelector('.nav-links');
    const hamburgerIcon = this.querySelector('.hamburger-icon');
    const closeIcon = this.querySelector('.close-icon');

    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('show');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
        hamburgerIcon.style.display = isOpen ? 'none' : 'inline';
        closeIcon.style.display = isOpen ? 'inline' : 'none';
      });

      document.addEventListener('click', (e) => {
        if (!this.contains(e.target) && navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
          menuBtn.setAttribute('aria-expanded', 'false');
          hamburgerIcon.style.display = 'inline';
          closeIcon.style.display = 'none';
        }
      });
    }
  }
}

class PortfolioFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer role="contentinfo">
        <div class="footer-inner">
          <div class="footer-name">Dr. Md Samshad Hussain Ansari</div>
          <div class="footer-title">Assistant Professor &middot; Newton School of Technology, ADYPU, Pune</div>
          <nav class="footer-links" aria-label="Social and contact links">
            <a href="mailto:mdsamhussain1996@gmail.com" aria-label="Email">&#128231; Email</a>
            <a href="https://scholar.google.com/citations?user=3b2jd4EAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">&#127891; Scholar</a>
            <a href="https://www.researchgate.net/profile/Md-Samshad-Ansari?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" aria-label="ResearchGate">&#128202; ResearchGate</a>
            <a href="https://orcid.org/0000-0002-7757-3216" target="_blank" rel="noopener noreferrer" aria-label="ORCID">&#128279; ORCID</a>
            <a href="https://github.com/mdsamhussain1996" target="_blank" rel="noopener noreferrer" aria-label="GitHub">&#128187; GitHub</a>
          </nav>
          <div class="footer-copy">&copy; ${year} Dr. Md Samshad Hussain Ansari. All rights reserved.</div>
        </div>
      </footer>
    `;
  }
}

customElements.define('portfolio-navbar', PortfolioNavbar);
customElements.define('portfolio-footer', PortfolioFooter);
