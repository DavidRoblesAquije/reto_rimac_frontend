import { rimaclogowhite } from "../assets"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div>
                    <div className="footer__container__logo">
                        <img src={rimaclogowhite} alt="rimac logo" />
                    </div>
                </div>
                <div>
                    <div className="footer__container__info">
                        <p>@2025 RIMAC Seguros y Reaseguros.</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}
