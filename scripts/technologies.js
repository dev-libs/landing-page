class Technologies {
  constructor(attr) {
    this.members = attr.members.map(
      member =>
        new Technology({
          name: member.name,
          img: member.img,
          link: member.link,
          info: member.info,
        })
    );
  }
}

class Technology {
  constructor(attr) {
    this.name = attr.name;
    this.img = attr.img;
    this.link = attr.link;
    this.info = attr.info;
  }

  async render() {
    let element = document.createElement('div');
    element.innerHTML = `
      <div class="card-header yellow"></div>
      <a href="${this.link}" class="member-link">
        <div class="avatar">
          <img src="${this.img}" alt="${this.name}" />
        </div>
        <div class="card-body center-text">
          <h3>${this.name}</h3>
          <span>${this.info || ''}</span>
        </div>
      </a>`;
    element.className = 'card avatar';

    try {
      await element.querySelector('img').decode();
    } finally {
      return element;
    }
  }
}

export { Technologies, Technology };
