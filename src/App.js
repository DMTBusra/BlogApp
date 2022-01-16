import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import BlogContextProvider from "./contexts/BlogContext";

import "./App.css";

function App() {
  return (
    <BlogContextProvider>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </BlogContextProvider>
  );
}

export default App;
