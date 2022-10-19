import './App.css';
function PortfolioPage(props){
  return(
    <>
      <h1>
        {props.title}
      </h1>
    </>
  )
}
function Title(){
  return(
    <>
    <Title title="Дастан красавчик"/>  
    </>
  )
}
function App() {
  return (
    <div className="App">
      <PortfolioPage/>
      <Title/>
    </div>
  );
}
export default App;
