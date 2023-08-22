import { Outlet } from "react-router-dom";
import Header from "./components/header/header";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <div className="h-screen"></div>
            </main>
        </>
    );
}
