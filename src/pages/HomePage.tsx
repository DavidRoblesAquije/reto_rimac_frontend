import { image } from "../assets"
import { Footer, Header, HomeForm } from "../components"

function HomePage() {
  return (
    <section className="home__section">
      <Header />
      <div className="home__container">
        <div className="home__image noresponsive">
          <img src={image} alt="familia" />
        </div>

        <div className="home__form">
          <div className="home__title">
            <div>
              <span>Seguro Salud Flexible</span>
              <h2>Creado para ti y tu familia</h2>
            </div>
            <div className="home__image responsive">
              <img src={image} alt="familia" />
            </div>
          </div>
          <p>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
            nuestra asesoría. 100% online
          </p>

          <HomeForm />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default HomePage