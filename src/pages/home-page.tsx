import { ModeToggle } from "@/components/mode-toggle"
import Stepper from "@/components/Stepper"


export const HomePage = () => {
  return (
    <div className="relative ">
      <div className="absolute right-3 top-5 z-20 hidden lg:flex" ><ModeToggle/></div>
      <Stepper />
    </div>
  )
}
