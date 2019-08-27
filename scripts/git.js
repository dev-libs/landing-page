class Organization {
  constructor(attr) {
    this.name = attr.name;
  }

  async fetchTeams() {
    let cache = localStorage.getItem('organization');
    const result = cache
      ? JSON.parse(cache)
      : await fetch(`https://api.github.com/orgs/${this.name}/public_members`).then(res => res.json());

    localStorage.setItem('organization', JSON.stringify(result));

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

export { Organization, TeamMember };
