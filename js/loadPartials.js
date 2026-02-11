async function loadPartial(selector, url, init) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  if (!res.ok) return;

  const html = await res.text();
  let fragment;
  if (window.dsrSanitizeFragment) {
    fragment = window.dsrSanitizeFragment(html);
  } else {
    const template = document.createElement("template");
    template.innerHTML = html;
    fragment = template.content.cloneNode(true);
  }

  el.appendChild(fragment);

  init?.(el);
}

/* Set active state based on current page */
function setActiveSidebarLink() {
  const currentPage = window.location.pathname;
  const links = document.querySelectorAll('.nav-menu a');
  
  links.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    
    if (href && href !== '#') {
      // Check if current page matches the link
      if (currentPage.includes('jobs') && href.includes('jobs')) {
        link.classList.add('active');
      } else if (currentPage.includes('downloads') && href.includes('downloads')) {
        link.classList.add('active');
      } else if ((currentPage.endsWith('/') || currentPage.includes('index')) && href.includes('index')) {
        link.classList.add('active');
      } else if (currentPage.includes(href.replace('/', '').replace('.html', ''))) {
        link.classList.add('active');
      }
    }
  });
  
  // Default to Dashboard if no match and on root
  if (!document.querySelector('.nav-menu a.active')) {
    const dashboardLink = document.querySelector('.nav-menu a[href*="index"]');
    if (dashboardLink && (currentPage === '/' || currentPage.endsWith('/'))) {
      dashboardLink.classList.add('active');
    }
  }
}

/* load components */
async function loadAllPartials() {
  await loadPartial("#sidebar", "/partials/sidebar.html");
  
  // Set active sidebar link based on current page
  setActiveSidebarLink();

  // Dispatch event to notify that all partials are loaded
  document.dispatchEvent(new Event('partial:loaded'));
}

loadAllPartials();


