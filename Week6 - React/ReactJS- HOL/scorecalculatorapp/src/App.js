import CalculateScore from './Component/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
         Name="Steeve"
        School="DAV Public School"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;