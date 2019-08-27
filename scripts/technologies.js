class Technologies {
  constructor(attr) {
    this.members = attr.members.map(
      member =>
        new Technology({
          name: member.name,
          img: member.img,
        })
    );
  }
}

class Technology {
  constructor(attr) {
    this.name = attr.name;
    this.img = attr.img;
  }

  async render() {
    let element = document.createElement('div');
    element.innerHTML = `
      <div class="card-header"></div>
      <div class="avatar">
        <img src="${this.img}" alt="${this.name}" />
      </div>
      <div class="card-body center">
        <h3>${this.name}</h3>
      </div>`;
    element.className = 'card avatar';
    await element.querySelector('img').decode();
    return element;
  }
}

export { Technologies, Technology };
