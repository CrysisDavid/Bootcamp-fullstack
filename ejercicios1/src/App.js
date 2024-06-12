





import logo from './logo.svg';
import './App.css';


function Text1(properties) {
  return <p ><strong>parte:</strong > <m style={{ color: 'grey' }}>{properties.part}</m>    <p /> <strong >numero de ejercicios:</strong> <strong style={{ color: 'grey' }}>{properties.exercise}</strong> </p>
}

const Curso = (props) => {
  return (
    <h1 style={{ color: props.color }} align='center'>{props.curso}  </h1>
  )
}

const Total = (props) => {
  return (<p>
    <strong>total ejercicios: </strong>
    <strong style={{ color: 'grey' }}>{props.ejercicio1 + props.ejercicio2 + props.ejercicio3}</strong>
  </p>)
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Curso color='#7CD7F2' curso={course} />
      <br />
      <Text1 part={part1} exercise={exercises1} />
      <Text1 part={part2} exercise={exercises2} />
      <Text1 part={part3} exercise={exercises3} />


      <Total ejercicio1={exercises1} ejercicio2={exercises2} ejercicio3={exercises3} />
      <p ><img src={logo} className="App-logo" alt="logo" /></p>
    </div>
  )
}

export default App