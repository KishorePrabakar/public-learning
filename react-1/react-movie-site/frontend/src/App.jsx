import './App.css'

function App() {
  return (
    <>
      <Text number={12} multiple={2} />
    </>
  )
}

function Text({ number, multiple }) {
  return (
    <div>
      <p>the product of {number} and {multiple} is {number * multiple}</p>
    </div>
  );
}

export default App;
