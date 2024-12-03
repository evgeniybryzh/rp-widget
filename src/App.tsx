import Widget from "./components/widget/Widget";

interface AppProps {
  isWebflow?: boolean;
}

const App = ({ isWebflow = false }: AppProps) => {
  return <Widget isWebflow={isWebflow} />;
};

export default App;
