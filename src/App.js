import Routes from "./routes";
import { AppProvider } from "./context";
import Theme from "./themes";

function App() {
  return (
    <AppProvider>
      <Theme />
      <div className="App">
        <Routes />
      </div>
    </AppProvider>
  );
}

export default App;
