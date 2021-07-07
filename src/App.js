import "./App.css";
import MainPage from "./components/MainPage";
import { Store } from "./components/UserReducer";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <ChakraProvider>
          <MainPage />
        </ChakraProvider>
      </Provider>
      ,
    </div>
  );
}

export default App;
