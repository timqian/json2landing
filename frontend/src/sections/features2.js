const sec = ({
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
            <p class="title is-6" style="color: ${background}; -webkit-filter: invert(100%); filter: invert(100%);"> ${title} </p>
            <p class="sub-title is-6 " style="color: ${background}; -webkit-filter: invert(100%); filter: invert(100%);"> ${description} </p>
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

sec.sampleJson = {
  type: 'features2',
  info: {
    background: 'black',
    content: {
      title: 'Save chat history',
      description: 'never lose chat messages',
    },
    img: {
      src: 'https://raw.githubusercontent.com/timqian/images/master/20190723123506.png',
      alt: 'groups',
      imgLinkTo: 'https://wewe.t9t.io/groups',
    },
  },
};

sec.sampleHeight = '400px';

sec.type = 'Features';

export default sec;
