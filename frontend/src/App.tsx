// import { useContext } from "react";
// import { AuthContext } from "./contexts/AuthProvider";
import { Role, ProtectedRoute } from "./components/ProtectedRoute";
import { useRoutes } from "react-router-dom";
import useDarkMode from "./hooks/useDarkMode";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// pages
import LandingPage from "./pages/visitor/LandingPage";
import Login from "./pages/visitor/LoginPage";
import AboutUs from "./pages/visitor/AboutUsPage";
import Contact from "./pages/visitor/ContactPage";
import SignUp from "./pages/visitor/SignUpPage";
import ForgotPassword from "./pages/visitor/ForgotPasswordPage";
import NotFound404 from "./pages/Common/NotFound404";
import Exhibition from "./pages/visitor/ExhibitionPage";
import Gallery from "./pages/visitor/Gallery";
import ExhibitionDetails from "./pages/visitor/ExhibitionDetails.tsx";
import Profile from "./pages/visitor/Profile.tsx";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  if (darkMode) setDarkMode(false);

  const AppRoutes = useRoutes([
    {
      path: `${__BASE_URL__}/`,
      element: <ProtectedRoute role={Role.ALL} />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "about", element: <AboutUs /> },
        { path: "gallery", element: <Gallery /> },
        { path: "exhibitions", element: <Exhibition /> },
        { path: "exhibitions/:id", element: <ExhibitionDetails /> },
        { path: "contact", element: <Contact /> },
        { path: "forgot_password", element: <ForgotPassword /> },
      ],
    },
    {
      path: `${__BASE_URL__}/`,
      element: <ProtectedRoute role={Role.NOAUTH} />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    {
      path: `${__BASE_URL__}/`,
      element: <ProtectedRoute role={Role.USER} />,
      children: [{ path: "profile", element: <Profile /> }],
    },
    // {
    //   path: `${__BASE_URL__}/user`,
    //   element: (
    //     <ProtectedRoute role={Role.USER}>{/* <HomePage /> */}</ProtectedRoute>
    //   ),
    //   children: [
    // { index: true, element: <UserDashboard /> },
    // { path: "dashboard", element: <UserDashboardPage /> },
    // { path: "search", element: <UserSearchPage /> },
    // { path: "profile", element: <UserProfilePage /> },
    // { path: "exhibitions", element: <UserExhibition /> },
    // { path: "settings", element: <UserSettingsPage /> },
    //     {
    //       path: `${__BASE_URL__}/admin`,
    //       element: (
    //         <ProtectedRoute role={Role.ADMIN}>
    //           {/* <HomePage /> */}
    //         </ProtectedRoute>
    //       ),
    //       children: [
    // { index: true, element: <AdminDashboardPage /> },
    // { path: "dashboard", element: <AdminDashboardPage /> },
    // { path: "users", element: <AdminUsersPage /> },
    // { path: "verify", element: <AdminVerifyPage /> },
    // { path: "reports", element: <AdminReportsPage /> },
    // { path: "exhibitions", element: <AdminExhibitionControl /> },
    // { path: "settings", element: <AdminSettingsPage /> },
    //       ],
    //     },
    //   ],
    // },
    { path: "*", element: <NotFound404 /> },
  ]);
  return (
    <div className="bg-base-100">
      <NavBar />
      {AppRoutes}
      <Footer />
    </div>
  );
}

export default App;
