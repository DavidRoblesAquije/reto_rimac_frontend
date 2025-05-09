import { iconphone, rimaclogored } from "../assets/index";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container__logo">
          <img src={rimaclogored} alt="rimac logo" />
        </div>
        <div className="header__container__contact">
          <p>¡Compra por este medio!</p>

          <div>
            <img src={iconphone} alt="phone" />
            <a href="tel:+5114116001">(01) 411 6001</a>
          </div>
        </div>
      </div>
    </header>  )
}
