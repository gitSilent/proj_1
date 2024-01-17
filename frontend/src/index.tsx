import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import MainPage from './pages/MainPage';
import AboutUsPage from './pages/AboutUsPage';
import TutorsPage from './pages/TutorsPage';
import ErrorPage from './pages/ErrorPage';
import ContactsPage from './pages/ContactsPage';
import PolicyPrivacyPage from './pages/PolicyPrivacyPage';
import OfferDocumentsPage from './pages/OfferDocumentspage';
import { QueryClient, QueryClientProvider } from 'react-query';
import TermsOfService from './pages/TermsOfService';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <AboutUsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/tutors",
    element: <TutorsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/policy_privacy",
    element: <PolicyPrivacyPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/offer_documents",
    element: <OfferDocumentsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/terms_of_service",
    element: <TermsOfService />,
    errorElement: <ErrorPage />
  },
]);

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);


