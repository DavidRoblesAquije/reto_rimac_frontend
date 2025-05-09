interface OptionCardProps {
    icon: string,
    title: string,
    description: string,
    selected: boolean,
    onSelected: () => void,
}

import { FaCheck } from "react-icons/fa";


export const OptionCard = ({
    icon,
    title,
    description,
    selected,
    onSelected,
}: OptionCardProps) => {
    return (
        <div
            className={`card card__option ${selected ? "selected" : ""}`}
            onClick={onSelected}
        >
            <div className="card-body">
                <div className="card__check">
                    <FaCheck style={{color: "#fff", width: "50%"}} />
                </div>
                <div className="card__icon__title">
                    <img src={icon} alt="icon" />
                    <h3>{title}</h3>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}
