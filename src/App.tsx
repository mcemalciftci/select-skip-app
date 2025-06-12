import { ThemeProvider } from "@/components/theme-provider"
import { Route, Routes } from "react-router"
import { MainLayout } from "./layout/main-layout"
import { HomePage } from "./pages/home-page"


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App