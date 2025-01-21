import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

function Content({ exercises1, exercises2, exercises3 }) {
  const part1 = "Fundamentals of React";

  const part2 = "Using props to pass data";

  const part3 = "State of a component";

  return (
    <div>
      <Part1 part1={part1} exercises1={exercises1} />
      <Part2 part2={part2} exercises2={exercises2} />
      <Part3 part3={part3} exercises3={exercises3} />
    </div>
  );
}

export default Content;
