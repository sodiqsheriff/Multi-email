import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css'
const router= createBrowserRouter([
  {path: "/", element: <Login />},
  {path: "dashboard", element: <Dashboard />}
])
function App() {
  return <RouterProvider router={router} />
}
export default App
