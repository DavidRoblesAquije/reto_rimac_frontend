import { createBrowserRouter, RouterProvider } from "react-router"
import { HomePage, PlanesPage, ResumenPage } from "./pages"
import { HomeProvider } from "./context/provider/HomeProvider"
import { PlanProvider } from "./context/provider/PlanProvider"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/planes",
      element: <PlanesPage />
    },
    {
      path: "/resumen",
      element: <ResumenPage />,
    }
  ])

  return (
    <HomeProvider>
      <PlanProvider>
        <RouterProvider router={router} />
      </PlanProvider>
    </HomeProvider>
  )
}

export default App
