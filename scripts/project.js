import { Organization } from './git.js';
import { Technologies } from './technologies.js';

const usedTechnogies = [
  { name: 'React', img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
  {
    name: 'Redux',
    img: 'https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*dlapmYAhWBkrFuHm020qlg.png',
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
