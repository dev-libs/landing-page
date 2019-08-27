import { Organization } from './git.js';

const render = async () => {
  const organization = new Organization({ name: 'dev-libs' });
  await organization.fetchTeams();

  organization.members.forEach(async member => {
    document.querySelector('#members').appendChild(await member.render());
  });
};

render();
