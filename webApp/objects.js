class ClosetInner extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.id = this.getAttribute("id") || "default-id";
    const images = JSON.parse(this.getAttribute("images") || "[]");

    let piecesHTML = "";
    images.forEach((src) => {
      piecesHTML += `
        <div class="piece">
          <img class="pieceImg" src="${src}" />
        </div>`;
    });

    this.innerHTML = `
      <div class="closetInnerBottom"></div>
      <div class="closetInnerSide"></div>
      <div class="pieces">
        ${piecesHTML}
      </div>`;
  }
}

customElements.define("closet-inner", ClosetInner);

class Closet extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const innerCount = parseInt(this.getAttribute("inner-count")) || 0;

    const images = JSON.parse(this.getAttribute("images") || "[]");

    let closetInnerHTML = "";
    for (let i = 0; i < innerCount; i++) {
      const id = `inner${i + 1}`;

      const imageAttr = images[i]
        ? `images='${JSON.stringify(images[i])}'`
        : "";

      closetInnerHTML += `<closet-inner id="${id}" ${imageAttr}></closet-inner>`;
    }

    this.innerHTML = `
        <div class="closetside"></div>
        <div class="closetTop"></div>
        <div class="closetTopSide"></div>
        <div class="closetTopTop"></div>
        <div class="closetBase">
          ${closetInnerHTML}
        </div>`;
  }
}

customElements.define("closet-element", Closet);
