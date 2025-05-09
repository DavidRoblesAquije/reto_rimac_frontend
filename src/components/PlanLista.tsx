import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { PlanCard } from "./PlanCard";
import type { Plan } from "../types/plan";
import type { OptionType } from "../constants/planOptions";

interface PlanListaProps {
  plans: Plan[],
  selectedOption: OptionType
}

export const PlanLista = ({ plans, selectedOption }: PlanListaProps) => {
  return (
    <Swiper
      className="card__planswipper"
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        500: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {plans.map((plan) => (
        <SwiperSlide key={plan.name}>
          <div className="card card__planslist">
            <PlanCard plan={plan} selectedOption={selectedOption} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
