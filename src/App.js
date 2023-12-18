import Home from "./pages/home/Home";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Home />;
    </Provider>
  );
}

export default App;
