const sec = ({
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

sec.sampleJson = {
  type: 'buttons1',
  info: {
    buttonLeftText: 'View groups',
    buttonLeftLink: 'https://wewe.t9t.io/groups',
    buttonRightText: 'Join wewe',
    buttonRightLink: 'https://wewe.t9t.io/join',
  },
};

sec.sampleHeight = '150px';

sec.type = 'Buttons';

export default sec;

