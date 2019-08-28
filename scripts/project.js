import { Organization } from './git.js';
import { Technologies } from './technologies.js';

const usedTechnogies = [
  {
    name: 'React',
    img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    link: 'https://reactjs.org/',
  },
  {
    name: 'Redux',
    img: 'https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*dlapmYAhWBkrFuHm020qlg.png',
    link: 'https://redux.js.org/',
  },
  {
    name: 'Node',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnBzc0u56soGdxJcIJW2PEQPBSpGeaNO8_n2_hrFCf4Zzm0xe0',
    link: 'https://nodejs.org/en/',
  },
  {
    name: 'Express',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2gpZZbfgcuh7EbH_jXuctOevNcK_yzy8n6HNhNeH2qxuoiZqK',
    link: 'https://expressjs.com/',
  },
  {
    name: 'BCrypt',
    img: 'https://cybersensor.files.wordpress.com/2018/08/bcrypt-logo.jpg?w=605',
    link: 'https://www.npmjs.com/package/bcrypt',
  },
  {
    name: 'Knex',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeGu1O-9t5-9Lk71Vh3oJpJCg1sSUnhPhF9bZwKYR1edY-klb3',
    link: 'http://knexjs.org/',
  },
  {
    name: 'Cors',
    img: 'https://www.joshmorony.com/media/2018/08/cors.png',
    link: 'https://www.npmjs.com/package/cors',
  },
  {
    name: 'Helmet',
    img: 'https://helmetjs.github.io/resources/logo.svg',
    link: 'https://helmetjs.github.io/',
  },
  {
    name: 'Core Data',
    img: 'https://miro.medium.com/max/300/1*nm4j_6GfwWpqhuSPlbO-sg.png',
    link: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html',
  },
  {
    name: 'Jest',
    img: 'https://jestjs.io/img/jest.png',
    link: 'https://jestjs.io/',
  },
  {
    name: 'SQLite3',
    img:
      'https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/257c98ce-cf7f-4bad-9bec-854570c6172a/e4ad8c9e-d9cf-4500-9c8e-16184f9f4ef9/images/screenshot.png',
    link: 'https://www.sqlite.org/index.html',
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
