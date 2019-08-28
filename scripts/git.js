class Organization {
  constructor(attr) {
    this.name = attr.name;
  }

  async fetchTeams() {
    let cache = this.checkCache();
    let result = cache
      ? cache
      : await fetch(`https://api.github.com/orgs/${this.name}/public_members`).then(res => res.json());

    if (!cache) {
      await this.getInfo(result);
      this.setCache(result, 1);
    }

    this.members = result.map(member => {
      return new TeamMember({
        name: member.name,
        login: member.login,
        avatar: member.avatar_url,
        url: member.html_url,
        bio: member.bio,
      });
    });
  }

  async getInfo(users) {
    for (const user of users) {
      const info = await fetch(user.url).then(res => res.json());
      user.name = info.name;
      user.bio = info.bio;
    }
  }

  checkCache() {
    let cache = localStorage.getItem('organization');
    cache = cache ? JSON.parse(cache) : null;
    return cache && cache.expire > Date.now() ? cache.data : null;
  }

  setCache(data, hours) {
    const expire = new Date();
    expire.setHours(expire.getHours() + hours);
    localStorage.setItem('organization', JSON.stringify({ expire: expire.getTime(), data: data }));
  }

  error(message) {
    localStorage.removeItem('organization');
    throw new Error(`${message}`);
  }
}

class TeamMember {
  constructor(attr) {
    this.name = attr.name;
    this.login = attr.login;
    this.avatar = attr.avatar;
    this.url = attr.url;
    this.bio = attr.bio;
  }

  async render() {
    let element = document.createElement('div');
    element.innerHTML = `
      <div class="card-header"></div>
      <a href="${this.url}" class="member-link">
        <div class="avatar">
          <img src="${this.avatar}" alt="${this.name || this.login}"/>
        </div>
        <div class="card-body center">
          <h3>${this.name || this.login}</h3>
          <span>${this.bio || ''}</span>
        </div>
      </a>`;
    element.className = 'card avatar';
    await element.querySelector('img').decode();
    return element;
  }
}

export { Organization, TeamMember };
