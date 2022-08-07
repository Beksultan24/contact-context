import Navbar from "./components/Navbar";
import ContactContextProvider from "./ContactContext";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <ContactContextProvider>
      <Navbar />
      <MainRoutes />
    </ContactContextProvider>
  );
}

export default App;
