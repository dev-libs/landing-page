import { Organization } from './git.js';

const render = async () => {
  const organization = new Organization({ name: 'dev-libs' });
  await organization.fetchTeams();

  organization.teams.forEach(team => {
    document.querySelector('.teams').appendChild(team.render());
  });
};

render();
