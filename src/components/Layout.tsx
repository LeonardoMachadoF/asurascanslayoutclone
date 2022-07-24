import React from "react"
import { Aside } from "./Aside";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <div className="xl:w-[1200px] m-auto flex flex-col xl:flex-row w-[100%]">
                {children}
                <Aside />
            </div>
            <Footer />
        </div>
    )
}