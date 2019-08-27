import { Organization } from './git.js';

const render = async () => {
  const organization = new Organization({ name: 'dev-libs', apiKey: '8b147c4c78d8524cb8c27abbc555245e021ceb14' });
  await organization.fetchTeams();

  organization.members.forEach(member => {
    document.querySelector('#members').appendChild(member.render());
  });
};

render();
