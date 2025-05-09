import { Footer, Header, StepBar } from "../components"
import { useNavigate } from "react-router";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { iconuser } from "../assets";
import { useHomeContext } from "../hooks/useHomeContext";
import { usePlanContext } from "../hooks/usePlanContext";
import { useEffect } from "react";

function ResumenPage() {
  //Optencion de context datos usuario y planes
  const { formData } = useHomeContext();
  const { planData } = usePlanContext();

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/planes");
  };

  //En caso se vaya via URL directo a resume sin datos de usuario se redirige al Home
  useEffect(() => {
    if (!formData.docNumber || !formData.celular || !formData.username) {
      navigate("/")
    }
  }, [formData, navigate])

  return (
    <section className="resumen__section">
      <Header />
      <StepBar currentStep={2} />
      <main className="resumen__container">
        <button onClick={handleReturn} className="btn resumepage__button">
          <IoIosArrowDropleftCircle /> Volver
        </button>

        <h2 className="resumepage__title">Resumen del seguro</h2>

        <div className="resumepage__card card">
          <div className="resumepage__card__user">
            <p>PRECIOS CALCULADOS PARA:</p>
            <div>
              <img src={iconuser} alt="icon user" />
              <p>{formData.username} {formData.userlastname}</p>
            </div>
          </div>

          <hr />

          <div className="resumepage__card__responsable">
            <p>Responsable de pago</p>
            <p>{formData.docNumber.length > 8 ? "Pasaporte" : "DNI"}: {formData.docNumber}</p>
            <p>Celular: {formData.celular}</p>
          </div>

          <div className="resumepage__card__planelegido">
            <p>Plan elegido</p>
            <p>{planData.name}</p>
            <p>Costo del plan: ${planData.price} al mes</p>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  )
}

export default ResumenPage