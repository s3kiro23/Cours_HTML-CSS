class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
      <p>Copyright</p>
      <a href="#retour-haut"
        ><img class="arrowBack" src="/images/arrows.png" alt="retour-haut"
      /></a>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
