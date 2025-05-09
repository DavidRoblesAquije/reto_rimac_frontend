import { useEffect, useState } from "react"
import { Footer, Header, OptionCard, PlanLista, StepBar } from "../components"
import { useNavigate } from "react-router";
import { iconadduser, iconprotection } from "../assets";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import type { Plan } from "../types/plan";
import { calculateAge } from "../utils/validation";
import { getPlansData } from "../services/plansApi";
import type { OptionType } from "../constants/planOptions";
import { useHomeContext } from "../hooks/useHomeContext";


function PlanesPage() {
  //Optencion de context datos usuario
  const { formData } = useHomeContext();

  //Definir regreso a Home al hacer click en volver
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };

  //En caso se vaya via URL directo a resume sin datos de usuario se redirige al Home
  useEffect(() => {
    if (!formData.docNumber || !formData.celular) {
      navigate("/")
    }
  }, [formData, navigate])

  //Determinar seleccion de tipo de plan
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const handleOptionSelect = (option: OptionType) => {
    setSelectedOption(option);
  };

  const [plans, setPlans] = useState<Plan[]>([]);
  const [loadingPlans, setLoadingPlans] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanesData = async () => {
      try {
        setLoadingPlans(true);
        const data = await getPlansData();
        const userAge = formData.userBirthDay ? calculateAge(formData.userBirthDay) : 0;
        const filteredPlans = data.list.filter((plan: Plan) => plan.age >= userAge)
        setPlans(filteredPlans);
      } catch (error) {
        setError("Error al obtener los planes");
      } finally {
        setLoadingPlans(false);
      }
    }

    fetchPlanesData();
  }, [formData.userBirthDay]);

  if (loadingPlans) return <p>Cargando planes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="planes__section">
      <Header />
      <StepBar currentStep={1} />
      <main className="planes__container">
        <button onClick={handleReturn} className="planes__btn">
          <IoIosArrowDropleftCircle /> Volver
        </button>

        <div className="planes__title">
          <h2>{formData.username}, ¿Para quién deseas cotizar?</h2>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>

        <div className="planes__option_cards">
          <OptionCard
            icon={iconprotection}
            title={"Para mí"}
            description={
              "Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            }
            selected={selectedOption === "me"}
            onSelected={() => handleOptionSelect("me")}
          />

          <OptionCard
            icon={iconadduser}
            title={"Para alguien más"}
            description={
              "Realiza una cotización para uno de tus familiares o cualquier persona."
            }
            selected={selectedOption === "other"}
            onSelected={() => {
              handleOptionSelect("other");
            }}
          />
        </div>

        {selectedOption && (
          <PlanLista plans={plans} selectedOption={selectedOption} />
        )}
      </main>
      <Footer />
    </section>
  )
}

export default PlanesPage