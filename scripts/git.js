class Organization {
  constructor(attr) {
    this.name = attr.name;
  }

  async fetchTeams() {
    const query = `{
      organization(login: "${this.name}") {
        teams(first: 6) {
          nodes {
            name
            members {
              nodes {
                name
                login
                avatarUrl
              }
            }
          }
        }
      }
    }`;

    let cache = localStorage.getItem('teams');
    const result = cache
      ? JSON.parse(cache)
      : await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'bearer 8b147c4c78d8524cb8c27abbc555245e021ceb14',
          },
          body: JSON.stringify({ query: query }),
        }).then(res => res.json());

    localStorage.setItem('teams', JSON.stringify(result));

    this.teams = result.data.organization.teams.nodes.map(team => {
      return new Team({ name: team.name, members: team.members.nodes });
    });
  }
}

class Team {
  constructor(attr) {
    this.name = attr.name;
    this.members = attr.members.map(
      member =>
        new TeamMember({
          name: member.name,
          login: member.login,
          avatar: member.avatarUrl,
          team: attr.name,
        })
    );
  }

  render() {
    let element = document.createElement('div');
    element.innerHTML = `<h1 class="grid-header">${this.name}</h1>`;

    let grid = document.createElement('div');
    grid.className = 'grid';

    this.members.forEach(member => grid.appendChild(member.render()));
    element.appendChild(grid);

    return element;
  }
}

class TeamMember {
  constructor(attr) {
    this.name = attr.name;
    this.login = attr.login;
    this.avatar = attr.avatar;
    this.team = attr.team;
  }

  render() {
    let element = document.createElement('div');
    element.innerHTML = `
      <div class="card-header"></div>
      <div class="avatar">
        <img
          src="${this.avatar}"
          class="rounded-circle"
        />
      </div>
      <div class="card-body">
        <h1>${this.login}</h1>
      </div>`;
    element.className = 'card avatar';
    return element;
  }
}

export { Organization, Team, TeamMember };
