import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import { useQuiz } from "../context/QuizContext";

const SECS_PER_QUESTION = 30;
const initialState = {
  questions: [],
  // 'loading', 'error, 'ready', 'active', 'finished'
  status: "loading",
  index: 0, // to keep track of our questions
  answer: null, //To keep track of answers user choose from the question
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

export default function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <footer>
              <Timer />
              <NextButton />
            </footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
