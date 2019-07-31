const sec = ({
  iconUrl, iconHref, leftLinks, rightLinks,
}) => {
  const icon = iconUrl ? `
    <a class="navbar-item" href="${iconHref}">
      <img src="${iconUrl}" alt="favicon" height="28" />
    </a>` : '';

  const leftItems = leftLinks ? leftLinks.map(link => `
    <a class="navbar-item" href="${link.href}">
      <strong>${link.text}</strong>
    </a>
  `).join('') : '';

  const rightItems = rightLinks ? rightLinks.map(link => `
    <a class="navbar-item" href="${link.href}">
      <strong>${link.text}</strong>
    </a>
  `).join('') : '';

  return `
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          ${icon}
          ${leftItems}
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="nav-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" id="nav-menu">
          <div class="navbar-end"> 
            ${rightItems}
          </div>
        </div>
      </div>
    </nav>
    <script>
      document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
      
      });
    </script>`;
};

sec.sampleJson = {
  type: 'nav1',
  info: {
    iconUrl: 'https://t9t.io/favicon.ico',
    iconHref: 'https://wewe.t9t.io/',
    leftLinks: [
      {
        text: 'Groups',
        href: 'https://wewe.t9t.io/groups',
      },
      {
        text: 'Join wewe',
        href: 'https://wewe.t9t.io/join',
      },
    ],
    rightLinks: [
      {
        text: 'About',
        href: 'https://wewe.t9t.io/about',
      },
      {
        text: 'GitHub',
        href: 'https://github.com/t9tio/wewe',
      },
    ],
  },
};

sec.sampleHeight = '100px';

sec.type = 'Navbars';

export default sec;
