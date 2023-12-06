import {createRoot} from "react-dom/client";
import App from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About, Shop} from "./components/pages";
import {Suspense} from "react";

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root);
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={<div>loading</div>}><About /> </Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={<div>loading</div>}><Shop /> </Suspense>
            },
        ]
    },
]);
container.render(<RouterProvider router={router}/>)
