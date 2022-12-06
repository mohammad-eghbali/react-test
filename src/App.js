import { Greeting } from "./Integration/Integration";
import Header from "./unit/Header";
import FollowersList from "./unit/list";
// import Todo from "./Todo/Todo";
function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <FollowersList />
      {/* <Todo /> */}
    </div>
  );
}

export default App;
