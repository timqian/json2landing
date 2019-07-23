const htmlTemplate = ({ head, body }) => `<!DOCTYPE html>
<html>
  ${head}
  ${body}
</html>
`;

const headTemplate = ({ title, description, favicoinUrl }) => `
  <head>
    <meta charset="UTF-8" />
    ${description ? `<meta name="description" content="${description}"/>` : ''}
    ${favicoinUrl ? `<link rel="icon" href="${favicoinUrl}" />` : ''}
    ${title ? `<title>${title}</title>` : ''}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
  </head>
`;

const bodyTemplate = ({ componentArr }) => `
  <body>
    ${componentArr.join()}
  <body>
`;

const head = headTemplate({
  title: 'hi tim',
});

const body = bodyTemplate({ componentArr: [] });

const result = htmlTemplate({ head, body });


console.log(result);
