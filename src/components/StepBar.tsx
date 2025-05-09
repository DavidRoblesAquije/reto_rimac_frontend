import { IoIosArrowDropleftCircle } from "react-icons/io"

interface step {
    currentStep: number
}

export const StepBar = ({ currentStep }: step) => {
    return (
        <>
            <div className="setpbar setpbar__desktop">
                <div className={`step ${currentStep === 1 ? "active" : ""}`}>
                    <span className="step-number">1</span>
                    <span className="step-label">Planes y coberturas</span>
                </div>

                <div className="separator">·····</div>

                <div className={`step ${currentStep === 2 ? "active" : ""}`}>
                    <span className="step-number">2</span>
                    <span className="step-label">Resumen</span>
                </div>
            </div>

            <div className="setpbar stepbar__responsive">
                <IoIosArrowDropleftCircle />
                <span className="step-info">PASO {currentStep} DE 2</span>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: currentStep === 1 ? "50%" : "100%" }}
                    ></div>
                </div>
            </div>
        </>
    )
}
