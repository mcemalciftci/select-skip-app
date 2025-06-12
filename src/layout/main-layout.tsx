import { MainProvider } from "@/context/MainContext";
import type { ReactNode } from "react";
import { Outlet } from "react-router";

type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (<MainProvider>

    <div className="min-h-screen  flex flex-col  items-center">
      {/* <header className=" text-white py-4 px-6 shadow-md">
            <AppHeader />
      </header> */}

      <main className="w-full ">
        {children ?? <Outlet />}
      </main>

     
    </div>
  </MainProvider>
  );
};
