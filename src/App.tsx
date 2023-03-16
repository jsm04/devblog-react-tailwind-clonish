import {} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { BlogWrite } from './pages/BlogWrite';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />
	},
	{
		path: '/blog/:id',
		element: <Blog />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/blog/write',
		element: <BlogWrite />
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
