class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `    <header id="retour-haut"  class="heading">
      <div class="logo">
        <a href="index.html"><img src="/images/home-page.png" alt=""></a>
      </div>
      <nav class="navBar">
        <dl>
          <li class="navBar"><a href="mangas.html">MANGAS</a></li>
          <li class="navBar"><a href="jeux.html">JEUX</a></li>
          <li class="navBar"><a href="musique.html">MUSIQUE</a></li>
        </dl>
      </nav>  
    </header>
`;
  }
}
customElements.define("header-component", Header);
