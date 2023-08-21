import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/index.page";

const router = createBrowserRouter([
    {
        path: "/",
        Component: () => <Home />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}
