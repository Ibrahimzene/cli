import ReactDOM from "react-dom";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageInfo } from "./pages/PageInfo.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { PageReports } from './pages/PageReports.tsx';

// MARKER::END_IMPORT_BLOCK

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "info",
				element: <PageInfo />,
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "reports",
				element: <PageReports />,
			},
			{ // MARKER::END_PAGE_ROUTES
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

ReactDOM.render(
	<RouterProvider router={router} />,
	document.getElementById("root")
  );


  // Das ist der originale Code, der durch den Generator ersetzt wird
  /*
  import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageInfo } from "./pages/PageInfo.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { PageReports } from './pages/PageReports.tsx';
// MARKER::END_IMPORT_BLOCK

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "info",
				element: <PageInfo />,
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "reports",
				element: <PageReports />,
			},
			{ // MARKER::END_PAGE_ROUTES
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
 */