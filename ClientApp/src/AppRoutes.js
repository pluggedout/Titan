import ApiAuthoriztionRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ChatData } from './components/ChatData';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
//import { TwoPaneTextEditor } from './components/TwoPaneTextEditor';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/chat-data',
    requireAuth: true,
    element: <ChatData />
  }, 
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  ...ApiAuthoriztionRoutes
];

export default AppRoutes;
