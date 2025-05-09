import { useNavigate } from "react-router";
import { PlanContext } from "../context/context/PlanContext";
import { useContext } from "react";
import type { Plan } from "../types/plan";
import type { OptionType } from "../constants/planOptions";
import { getPlanIcon } from "../utils/planIcons";

interface planCardProps {
    plan: Plan,
    selectedOption: OptionType
}

export const PlanCard = ({ plan, selectedOption }: planCardProps) => {
    const navigate = useNavigate();
    const context = useContext(PlanContext);
    if (!context) {
        throw new Error("Homecontext debe usarse dentro de un Provider");
    }
    const { setPlanData } = context;

    const icon = getPlanIcon(plan.name);
    const price = selectedOption === "me" ? plan.price : Number((plan.price * 0.95).toFixed(2));

    const handlePlan = () => {
        const planInfo: Plan = {
            name: plan.name,
            price: price,
            description: plan.description,
            age: plan.age
        }

        setPlanData(planInfo);
        navigate("/resumen");
    };

    return (
        <div className="card-body card__plan">
            <div className="card__header">
                <div className="card__type">
                    <h3>{plan.name}</h3>
                    <p>COSTO DEL PLAN</p>
                    <strong>${price} al mes</strong>
                </div>
                <div className="card__icon">
                    <img src={icon} alt="icon" />
                </div>
            </div>
            <hr />
            <ul>
                {plan.description.map((info: string, index: number) => (
                    <li key={index}>{info}</li>
                ))}
            </ul>
            <button
                className="btn btn-primary card__plan__button"
                onClick={handlePlan}
            >
                Seleccionar Plan
            </button>
        </div>
    )
}
