async function loadSidebar() {
  const res = await fetch('sidebar.html');
  const html = await res.text();

  const desktop = document.getElementById('sidebar-desktop');
  const mobile = document.getElementById('sidebar-mobile');

  // Desktop
  const desktopFragment = document.createElement('div');
  desktopFragment.innerHTML = html;
  desktop.appendChild(desktopFragment);

  // Mobile (clone)
  const mobileFragment = document.createElement('div');
  mobileFragment.innerHTML = html;

  // Corrige IDs duplicados (Bootstrap collapse)
  mobileFragment.querySelectorAll('[id]').forEach(el => {
    el.id = el.id + '-mobile';
  });

  mobileFragment.querySelectorAll('[href^="#"]').forEach(el => {
    el.setAttribute(
      'href',
      el.getAttribute('href') + '-mobile'
    );
  });

  mobile.appendChild(mobileFragment);
}

loadSidebar();
