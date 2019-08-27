import { Organization } from './git.js';
import { Technologies } from './technologies.js';

const technologies = [
  { name: 'react', img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
];

const render = async () => {
  const organization = new Organization({ name: 'dev-libs' });
  await organization.fetchTeams();

  organization.members.forEach(async member => {
    document.querySelector('#members').appendChild(await member.render());
  });

  const technologies = new Technologies({
    members: technologies,
  });

  console.log(technologies);

  technologies.members.forEach(async member => {
    document.querySelector('#technologies').appendChild(await member.render());
  });
};

render();
