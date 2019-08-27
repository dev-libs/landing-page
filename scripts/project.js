import { Organization } from './git.js';
import { Technologies } from './technologies.js';

const usedTechnogies = [
  {
    name: 'React',
    img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
  },
  {
    name: 'Redux',
    img: 'https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*dlapmYAhWBkrFuHm020qlg.png',
  },
  {
    name: 'Node',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnBzc0u56soGdxJcIJW2PEQPBSpGeaNO8_n2_hrFCf4Zzm0xe0',
  },
  {
    name: 'Express',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2gpZZbfgcuh7EbH_jXuctOevNcK_yzy8n6HNhNeH2qxuoiZqK',
  },
  {
    name: 'BCrypt',
    img: 'https://cybersensor.files.wordpress.com/2018/08/bcrypt-logo.jpg?w=605',
  },
  {
    name: 'Knex',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeGu1O-9t5-9Lk71Vh3oJpJCg1sSUnhPhF9bZwKYR1edY-klb3',
  },
  {
    name: 'Cors',
    img: 'https://www.joshmorony.com/media/2018/08/cors.png',
  },
  {
    name: 'Helmet',
    img: 'https://helmetjs.github.io/resources/logo.svg',
  },
  {
    name: 'Core Data',
    img: 'https://miro.medium.com/max/300/1*nm4j_6GfwWpqhuSPlbO-sg.png',
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
};

render();
