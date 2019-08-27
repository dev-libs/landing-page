class Organization {
  constructor(attr) {
    this.name = attr.name;
  }

  async fetchTeams() {
    const result = await fetch(`https://api.github.com/orgs/${this.name}/public_members`).then(res => res.json());

    this.members = result.map(member => {
      return new Member({
        login: member.login,
        avatar: member.avatar_url,
      });
    });
  }
}

class Member {
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

export { Organization, Member };
