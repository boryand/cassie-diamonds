const Navbar = () => {
  return (
  
    <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#">Home</a></li>
      <li><a class="menu__item" href="#">Rings</a></li>
      <li><a class="menu__item" href="#">Spéciale</a></li>
      <li><a class="menu__item" href="#">About us</a></li>
      <li><a class="menu__item" href="#">Contact</a></li>
    </ul>
  </div>
  );
};

export default Navbar;
