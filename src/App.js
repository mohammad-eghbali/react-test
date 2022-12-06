import { Greeting } from "./Integration/Integration";
import Header from "./unit/Header";
import FollowersList from "./unit/list";

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <FollowersList />
    </div>
  );
}

export default App;
