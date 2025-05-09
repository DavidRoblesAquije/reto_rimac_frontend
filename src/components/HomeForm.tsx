import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { isValidDocNumber, isValidPhone } from "../utils/validation";
import type { FormData } from "../types/form";
import { HomeContext } from "../context/context/HomeContext";
import { getUserData } from "../services/userApi";
import { initialHomeFormState } from "../constants/form";

export const HomeForm = () => {

  const navigate = useNavigate();
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("Homecontext debe usarse dentro de un Provider");
  }
  const { setFormData } = context;

  const [homeData, setHomeData] = useState<FormData>(initialHomeFormState)

  const handleDocTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDocType = e.target.value as "DNI" | "Pasaporte";
    setHomeData({ ...homeData, docType: newDocType, docNumber: "" })
  };

  const handleDocNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isValidDocNumber(homeData.docType, value)) {
      setHomeData({ ...homeData, docNumber: value });
    }
  };

  const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isValidPhone(value)) {
      setHomeData({ ...homeData, celular: value });
    }
  };

  const handlePrivacyPolicyChange = () => setHomeData({ ...homeData, politicaPrivacidad: !homeData.politicaPrivacidad });

  const handleCommercialPolicyChange = () => setHomeData({ ...homeData, politicaComunica: !homeData.politicaComunica });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !homeData.docNumber ||
      !homeData.celular ||
      !homeData.politicaPrivacidad ||
      !homeData.politicaComunica
    ) {
      alert("Completa todos los campos requeridos.");
      return;
    }

    try {
      const data = await getUserData();
      const username = data.name;
      const userlastname = data.lastName;
      const userBirthDay = data.birthDay;

      const formCompleted: FormData = {
        ...homeData,
        username,
        userlastname,
        userBirthDay
      }

      setFormData(formCompleted)
      navigate("/planes");
    } catch (error) {
      console.log("Error al intentar obtener datos del usuario: ", error)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__content">
          <div className="form__dni form-group">
            <select
              id="docType"
              className="form-control"
              value={homeData.docType}
              onChange={handleDocTypeChange}
            >
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>

          <div className="form__doc form-group">
            <input
              type="text"
              id="docNumber"
              className="form-control"
              value={homeData.docNumber}
              onChange={handleDocNumberChange}
              placeholder="Nro de documento"
            />
          </div>
        </div>

        <div className="form__celular form-group">
          <input
            type="text"
            id="celular"
            className="form-control"
            value={homeData.celular}
            onChange={handleCelularChange}
            placeholder="Celular"
          />
        </div>

        <div className="row">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="privacyPolicy"
              checked={homeData.politicaPrivacidad}
              onChange={handlePrivacyPolicyChange}
            />
            <label className="form-check-label" htmlFor="privacyPolicy">
              Acepto la Política de Privacidad
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="commercialPolicy"
              checked={homeData.politicaComunica}
              onChange={handleCommercialPolicyChange}
            />
            <label className="form-check-label" htmlFor="commercialPolicy">
              Acepto la Política Comunicaciones Comerciales
            </label>
          </div>
        </div>

        <p className="terms">
          <a href="#">Aplican Términos y Condiciones.</a>
        </p>

        <button
          type="submit"
          disabled={
            !(
              homeData.politicaPrivacidad &&
              homeData.politicaComunica &&
              homeData.celular.length == 9 &&
              homeData.docNumber.length >= 8
            )
          }
        >
          Cotiza aquí
        </button>
      </form>
    </>
  )
}
