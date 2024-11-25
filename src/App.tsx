import Widget from "./components/main/widget/Widget";

interface AppProps {
  isWebflow?: boolean;
}

const App = ({ isWebflow = false }: AppProps) => {
  console.log("isWebflow", isWebflow);

  return <Widget isWebflow={isWebflow} />;
};

export default App;
