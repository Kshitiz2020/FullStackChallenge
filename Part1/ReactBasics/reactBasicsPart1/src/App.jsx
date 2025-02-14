import Header from "./Components/Header";
import Content from "./Components/Content";
import Total from "./Components/Total";

function App() {
  const course = "Half Stack application development";

  const exercises1 = 10;

  const exercises2 = 7;

  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
