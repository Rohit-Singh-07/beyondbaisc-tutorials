import SampleForm from "./components/SampleForm";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <SampleForm />
    </UserContextProvider>
  );
};

export default App;
