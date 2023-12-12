
import './App.css';
import react from "react";
import "@mui/material";
import "react-icons";
import "react-icons/bi";
import "react-icons/md";
import "react-icons/bs";

import "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import theme from "./theme";

import PostView from "./components/pages/PostView";
import CreatePostView from "./components/pages/CreatePostView";
import ProfileView from "./components/pages/ProfileView";
import LoginView from "./components/pages/LoginView";
import SignupView from "./components/pages/SignupView";
import ExploreView from "./components/pages/ExploreView";
import PrivateRoute from "./components/PrivateRoute";
import SearchView from "./components/pages/SearchView";
import { initiateSocketConnection, socket } from "./helpers/socketHelper";

function App() {
  initiateSocketConnection();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<ExploreView />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route
            path="/posts/create"
            element={
              <PrivateRoute>
                <CreatePostView />
              </PrivateRoute>
            }
          />

          <Route path="/search" element={<SearchView />} />
          <Route path="/users/:id" element={<ProfileView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
