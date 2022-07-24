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
            <div className="w-[1200px] m-auto flex">
                {children}
                <Aside />
            </div>
            <Footer />
        </div>
    )
}