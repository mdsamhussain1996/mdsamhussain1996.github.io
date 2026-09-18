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

    this.innerHTML = `
      <nav>
        <a href="index.html" class="nav-logo">M. S. H. Ansari</a>
        <ul class="nav-links">
          <li><a href="index.html" class="${page === 'index.html' ? 'active' : ''}">About</a></li>
          <li><a href="cv.html" class="${page === 'cv.html' ? 'active' : ''}">CV</a></li>
          <li><a href="research.html" class="${page === 'research.html' ? 'active' : ''}">Research</a></li>
          <li><a href="teaching.html" class="${page === 'teaching.html' ? 'active' : ''}">Teaching</a></li>
          <li><a href="projects.html" class="${page === 'projects.html' ? 'active' : ''}">Projects</a></li>
          <li><a href="talks.html" class="${page === 'talks.html' ? 'active' : ''}">Talks</a></li>
          <li><a href="photos.html" class="${page === 'photos.html' ? 'active' : ''}">Photos</a></li>
          <li><a href="contact.html" class="${page === 'contact.html' ? 'active' : ''}">Contact</a></li>
        </ul>
        <button class="theme-toggle" type="button" aria-label="Toggle dark and light mode">
          <span class="icon-moon">🌙 Dark</span>
          <span class="icon-sun">☀️ Light</span>
        </button>
        <button class="mobile-menu-btn">☰</button>
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
    const btn = this.querySelector('.mobile-menu-btn');
    const links = this.querySelector('.nav-links');
    if (btn && links) {
      btn.addEventListener('click', () => {
        links.classList.toggle('show');
      });
    }
  }
}

class PortfolioFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer>
        <p>© ${year} Dr. Md Samshad Hussain Ansari.</p>
        <p>Newton School of Technology, Pune, India</p>
      </footer>
    `;
  }
}

customElements.define('portfolio-navbar', PortfolioNavbar);
customElements.define('portfolio-footer', PortfolioFooter);
