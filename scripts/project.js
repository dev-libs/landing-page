import { Organization } from './git.js';
import { Technologies } from './technologies.js';

const usedTechnogies = [
  {
    name: 'React',
    img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    link: 'https://reactjs.org/',
    info: 'A JavaScript library for building user interfaces',
  },
  {
    name: 'Redux',
    img: 'https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*dlapmYAhWBkrFuHm020qlg.png',
    link: 'https://redux.js.org/',
    info: 'A predictable state container for JavaScript apps',
  },
  {
    name: 'Node',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnBzc0u56soGdxJcIJW2PEQPBSpGeaNO8_n2_hrFCf4Zzm0xe0',
    link: 'https://nodejs.org/en/',
    info: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    name: 'Express',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2gpZZbfgcuh7EbH_jXuctOevNcK_yzy8n6HNhNeH2qxuoiZqK',
    link: 'https://expressjs.com/',
    info: 'Fast, unopinionated, minimalist web framework for Node.js',
  },
  {
    name: 'BCrypt',
    img: 'https://cybersensor.files.wordpress.com/2018/08/bcrypt-logo.jpg?w=605',
    link: 'https://www.npmjs.com/package/bcrypt',
    info: 'A library to help you hash passwords',
  },
  {
    name: 'Knex',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeGu1O-9t5-9Lk71Vh3oJpJCg1sSUnhPhF9bZwKYR1edY-klb3',
    link: 'http://knexjs.org/',
    info: 'A SQL Query Builder for Javascript',
  },
  {
    name: 'CORS',
    img: 'https://www.joshmorony.com/media/2018/08/cors.png',
    link: 'https://www.npmjs.com/package/cors',
    info:
      'A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options',
  },
  {
    name: 'Helmet',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEGEpKfWXds5O8lYhjrSlbfjjWbsK_l6S1hpARl34rJxKqZn7eYEd6g',
    link: 'https://helmetjs.github.io/',
    info: 'HTTP Header security for Express',
  },
  {
    name: 'Core Data',
    img: 'https://miro.medium.com/max/300/1*nm4j_6GfwWpqhuSPlbO-sg.png',
    link: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html',
    info: 'A framework that you use to manage the model layer objects in your application',
  },
  {
    name: 'Jest',
    img: 'https://jestjs.io/img/jest.png',
    link: 'https://jestjs.io/',
    info: 'A delightful JavaScript Testing Framework with a focus on simplicity.',
  },
  {
    name: 'SQLite',
    img:
      'https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/257c98ce-cf7f-4bad-9bec-854570c6172a/e4ad8c9e-d9cf-4500-9c8e-16184f9f4ef9/images/screenshot.png',
    link: 'https://www.sqlite.org/index.html',
    info:
      'A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.',
  },
];

const render = async () => {
  const organization = new Organization({ name: 'dev-libs' });
  await organization.fetchTeams();

  organization.members.forEach(async member => {
    document.querySelector('#members').appendChild(await member.render());
  });

  const technologies = new Technologies({
    members: usedTechnogies,
  });

  technologies.members.forEach(async member => {
    document.querySelector('#technologies').appendChild(await member.render());
  });

  document.querySelector('#loading').className = 'hide';
  document
    .querySelectorAll('.project-section')
    .forEach(section => (section.className = 'project-section animated fadeIn'));
};

render();
