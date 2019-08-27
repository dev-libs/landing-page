class Organization {
  constructor(attr) {
    this.name = attr.name;
  }

  async fetchTeams() {
    let cache = localStorage.getItem('organization');
    cache = cache ? JSON.parse(cache) : null;

    const result =
      cache && cache.expire > Date.now()
        ? cache.data
        : await fetch(`https://api.github.com/orgs/${this.name}/public_members`).then(res => res.json());

    if (result.message) {
      localStorage.removeItem('organization');
      throw new Error(`Failed to fetch from Github - ${result.message}`);
    }

    const expire = new Date();
    expire.setHours(expire.getHours() + 2);
    localStorage.setItem('organization', JSON.stringify({ expire: expire.getTime(), data: result }));

    this.members = result.map(member => {
      return new TeamMember({
        login: member.login,
        avatar: member.avatar_url,
      });
    });
  }
}

class TeamMember {
  constructor(attr) {
    this.login = attr.login;
    this.avatar = attr.avatar;
  }

  async render() {
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
    await element.querySelector('img').decode();
    return element;
  }
}

export { Organization, TeamMember };
