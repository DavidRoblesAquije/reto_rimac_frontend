# Reto Técnico Frontend - RIMAC (Indra)

Este proyecto es una solución para el reto técnico de Frontend propuesto por Indra para la empresa RIMAC.  
Consiste en un flujo de cotización de planes de salud, donde el usuario puede ingresar sus datos, seleccionar para quién desea cotizar y visualizar los planes disponibles según su edad.

Tecnologias utilizadas:
- React con TypeScript
- Vite
- Sass (SCSS)
- React Router DOM
- React Context API
- Swiper.js para carrusel de planes

## Decisiones técnicas

- Se utilizó **TypeScript** para asegurar un tipado estricto y mejor mantenibilidad.
- Se aplicó **Context API** para compartir datos del formulario y el plan seleccionado entre páginas.
- Se empleó **Swiper** para mostrar los planes en carrusel, asegurando un diseño responsive.
- La validación de formulario y filtrado de planes se resolvió con lógica propia en archivos utilitarios.
- La estructura del proyecto está separada por componentes, contextos, servicios, tipos y utilidades para escalabilidad.

## Vistas implementadas

- [x] Formulario de inicio con validación
- [x] Selección de usuario (Para mí / Para alguien más)
- [x] Visualización de planes disponibles filtrados por edad
- [x] Selección de plan y vista de resumen de plan elegido

## 🧪 Pruebas unitarias

Este proyecto incluye pruebas unitarias utilizando **Vitest** junto con **React Testing Library**, enfocadas en validar la interacción y lógica de los componentes clave.

### ✅ Componentes testeados:

| Componente   | Pruebas realizadas                                                 |
|--------------|---------------------------------------------------------------------|
| `OptionCard` | Verifica renderizado de texto y ejecución del callback al hacer clic |
| `PlanCard`   | Renderiza correctamente datos del plan y ejecuta acción con descuento |
| `FormHome`   | Valida campos numéricos, comportamiento del botón según el estado del formulario |

## 🚀 Cómo ejecutar el proyecto

Clona el repositorio y ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

Para correr las pruebas:
```
npm run test
```

## Proyecto desplegado:

https://curious-fox-77b120.netlify.app/