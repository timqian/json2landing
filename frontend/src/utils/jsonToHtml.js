import sections from '../sections/index';

const htmlTemplate = ({ head, body }) => `<!DOCTYPE html>
<html>
  ${head}
  ${body}
</html>
`;

const headTemplate = ({ title, description, faviconUrl }) => `
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    ${description ? `<meta name="description" content="${description}"/>` : ''}
    ${faviconUrl ? `<link rel="icon" href="${faviconUrl}" />` : ''}
    ${title ? `<title>${title}</title>` : ''}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
    />
  </head>
`;

const bodyTemplate = ({ componentArr }) => `
  <body>
    ${componentArr.join('')}
  <body>
`;

const jsonToHtml = (pageJson) => {
  const head = headTemplate(pageJson.head || {});

  const componentArr = pageJson.sections.map((section) => {
    if (sections[section.type]) {
      return sections[section.type](section.info);
    }
    return null;
  });

  const body = bodyTemplate({ componentArr });

  return htmlTemplate({ head, body });
};

export default jsonToHtml;
