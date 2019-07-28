const sec = ({ title, items }) => {
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

sec.sampleJson = {
  type: 'features1',
  info: {
    title: 'Why open group chat',
    items: [
      {
        title: 'Bring valuable disscussions to the open internet',
      },
      {
        title: 'Grow influence of your group chat',
      },
      {
        title: 'Backup chat history',
      },
    ],
  },
};

sec.sampleHeight = '400px';

sec.type = 'Features';

export default sec;
