/* eslint-disable arrow-body-style */
import snarkdown from 'snarkdown';

const sec = ({
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

sec.sampleJson = {
  type: 'footer1',
  info: {
    slogan: 'A [t9t](https://t9t.io) project build by [timqian](https://twitter.com/tim_qian).',
    githubLink: 'https://github.com/timqian',
    twitterLink: 'https://twitter.com/tim_qian',
    slackLink: 'https://join.slack.com/t/t9tio/shared_invite/enQtNjgzMzkwMDM0NTE3LTE5ZTUzYjU4Y2I0YzRiZjNkYTkzMzE1ZmM0NDdmYzRlZmMxNGY1MzZlN2EwYjYyNWVlMWY0Nzk2MDBhNWZlY2I',
    wechatLink: 'https://raw.githubusercontent.com/timqian/images/master/3811553342733_.pic.jpg',
    emailLink: 'mailto:timqian92@qq.com',
  },
};

sec.sampleHeight = '200px';

sec.type = 'Footers';


export default sec;
