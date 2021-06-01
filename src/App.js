import Routes from "./routes";
import { AppProvider } from "./context";
import Theme from "./themes";

function App() {
  return (
    <AppProvider>
      <Theme />
        <Routes />
    </AppProvider>
  );
}

export default App;
