/* eslint-disable arrow-body-style */
import snarkdown from 'snarkdown';

const nav1 = ({
  iconUrl, iconHref, leftLinks, rightLinks,
}) => {
  const icon = iconUrl ? `
    <a class="navbar-item" href="${iconHref}">
      <img src="${iconUrl}" alt="favicon" height="28" />
    </a>` : '';

  const leftItems = leftLinks.map(link => `
    <a class="navbar-item" href="${link.href}">
      <strong>${link.text}</strong>
    </a>
  `).join('');

  const rightItems = rightLinks.map(link => `
    <a class="navbar-item" href="${link.href}">
      <strong>${link.text}</strong>
    </a>
  `).join('');

  return `
    <nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
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

const hero1 = ({
  title, description, img, buttonLeftText, buttonLeftLink, buttonRightText, buttonRightLink,
}) => {
  return `
    <section class="hero is-black">
      <div class="hero-body">
        <div class="container"  style="max-width:900px">
          <h1 class="title is-1 has-text-centered">
            ${title}
          </h1>
          <h2 class="subtitle is-4 has-text-centered">
            ${description}
          </h2>
          <div class="has-text-centered">
            <a href="${img.imgLinkTo}"><img src="${img.src}" alt="${img.alt}" style="max-height:10rem"></a>
          </div>
          <br />
          <div class="has-text-centered">
            <a class="button is-white is-rounded is-outlined" href="${buttonLeftLink}">${buttonLeftText}</a>
            <a class="button is-white is-rounded" href="${buttonRightLink}">${buttonRightText}</a>
          </div>
        </div>
      </div>
    </section>`;
};

const features1 = ({ title, items }) => {
  const itemDivs = items.map(item => `
    <div class="column is-4 is-flex">
        <div class="has-text-centered box" style="width:100%">
          ${item.title}
        </div>
    </div>
  `).join('');

  return `
  <div class="section">
    <div class="container" style="max-width:900px">
      <p class="title is-4  has-text-centered">
        ${title}
      </p>
      <div class="columns">
        ${itemDivs}
      </div>
    </div>
  </div>
`;
};

const leftRight1 = ({
  background,
  content: { title, description },
  img: { src, alt, imgLinkTo },
}) => {
  return `
  <div class="hero is-medium" style="background-color:${background};">
    <div class="hero-body">
      <div class="container has-text-centered" style="max-width:900px">
        <div class="columns is-vcentered">
          <div class="column is-5" >
            <p class="title is-6 has-text-centered" style="color: ${background}; -webkit-filter: invert(100%); filter: invert(100%);"> ${title} </p>
          </div>
          <div class="column">
            <a href="${imgLinkTo}">
              <img src="${src}" alt="${alt}" style="max-height:20rem; border-radius: 5px; box-shadow: 0px 0px 10px rgba(10,10,10,.1); "/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
};

const buttons1 = ({
  buttonLeftText, buttonLeftLink, buttonRightText, buttonRightLink,
}) => {
  return `
  <div class="section">
    <div class="container" style="max-width:900px">
      <div class="has-text-centered">
        <a class="button is-dark is-rounded is-outlined" href="${buttonLeftLink}">${buttonLeftText}</a>
        <a class="button is-dark is-rounded" href="${buttonRightLink}">${buttonRightText}</a>
      </div>
    </div>
  </div>`;
};

const footer1 = ({
  slogan, githubLink, twitterLink, slackLink, wechatLink, emailLink,
}) => {
  return `
    <footer class="footer" style="color:lemonchiffon; background-color:black">
      <div class="container"  style="max-width:900px">
        <div class="content has-text-centered">
            <a href="${githubLink}">
              <i class="fab fa-github-alt fa-2x" style="color:lemonchiffon; margin:5px;" ></i>
            </a>
            <a href="${twitterLink}">
              <i class="fab fa-twitter fa-2x" style="color:lemonchiffon; margin:5px;"></i>
            </a>
            <a href="${slackLink}">
              <i class="fab fa-slack fa-2x" style="color:lemonchiffon; margin:5px;"></i>
            </a>
            <a href="${wechatLink}">
              <i class="fab fa-weixin fa-2x" style="color:lemonchiffon; margin:5px;"></i>
            </a>
            <a href="${emailLink}">
              <i class="fas fa-envelope fa-2x" style="color:lemonchiffon; margin:5px;"></i>
            </a>
          <p>
            ${snarkdown(slogan)}
            <br />
          </p>
        </div>
      </div>
    </footer>`;
};


export default {
  nav1,
  hero1,
  features1,
  leftRight1,
  buttons1,
  footer1,
};
