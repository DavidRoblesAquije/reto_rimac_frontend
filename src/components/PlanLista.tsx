import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PlanCard } from "./PlanCard";
import type { Plan } from "../types/plan";
import type { OptionType } from "../constants/planOptions";
import { Navigation, Pagination } from "swiper/modules";

interface PlanListaProps {
  plans: Plan[],
  selectedOption: OptionType
}

export const PlanLista = ({ plans, selectedOption }: PlanListaProps) => {
  return (
    <Swiper
      className="card__planswipper"
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{
        type: 'fraction',
      }}
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
