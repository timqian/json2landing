const sec = ({
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

sec.sampleJson = {
  type: 'hero1',
  info: {
    title: 'wewe',
    description: 'Open group chat to the world',
    img: {
      src: 'https://raw.githubusercontent.com/timqian/images/master/20190723115805.png',
      alt: 'wewe',
      imgLinkTo: 'https://wewe.t9t.io',
    },
    buttonLeftText: 'View groups',
    buttonLeftLink: 'https://wewe.t9t.io/groups',
    buttonRightText: 'Join wewe',
    buttonRightLink: 'https://wewe.t9t.io/join',
  },
};

sec.sampleHeight = '440px';

sec.type = 'Heros';

export default sec;
