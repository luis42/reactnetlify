/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import logo from './logo.svg';
import './App.css';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

function App() {
  const { register, handleSubmit, errors } = useForm();
  // const [count, setCount] = useState();
  const [homeWork, setHomeWork] = useState([]);
  // useEffect(() => {
  //   setInterval(() => {
  //     const date = new Date();
  //     const hours =
  //       date.getHours().toString().padStart(2, '0') +
  //       ':' +
  //       date.getMinutes().toString().padStart(2, '0') +
  //       ':' +
  //       date.getSeconds().toString().padStart(2, '0');
  //     setCount(hours);
  //   }, 1000);
  // }, []);

  // useLayoutEffect(() => {
  //   const date = new Date();
  //   const hours =
  //     date.getHours().toString().padStart(2, '0') +
  //     ':' +
  //     date.getMinutes().toString().padStart(2, '0') +
  //     ':' +
  //     date.getSeconds().toString().padStart(2, '0');
  //   setCount(hours);
  // }, []);

  const onSubmit = data =>
    setHomeWork(v => {
      const a = [...v];
      a.push(data['add-home-work']);
      return a;
    });

  return (
    <>
      <div className="container-fluid">
        <div className="card m-4">
          <div className="d-flex flex-column bd-highlight m-3 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="form-group col-12 col-md-10">
                  <label htmlFor="exampleInputEmail1">Agregar tarea</label>
                  <input
                    type="text"
                    className="form-control"
                    id="home-work"
                    name="add-home-work"
                    ref={register({ required: { message: 'Agregue una tarea.', value: true } })}
                  />
                  {errors['add-home-work'] && <span className="text-danger m-2">{errors['add-home-work'].message}</span>}
                </div>
                <div className="form-group col-12 col-md-2">
                  <label htmlFor="q" className="pb-5" />
                  <Button type="submit" variant="primary" className="form-control">
                    Agregar
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row m-2">
          {homeWork.map(home => (
            <div className="col-6 col-md-3 mb-2">
              <Card border="success" key={home} text="black" style={{ width: '18rem' }} className="text-center">
                <Card.Header>Card</Card.Header>
                <Card.Body>
                  <Card.Title>Tarea </Card.Title>
                  <Card.Text>{home}</Card.Text>
                  <Card.Link
                    href="#"
                    onClick={e => {
                      setHomeWork(v => v.filter(f => f !== home));
                      e.preventDefault();
                    }}
                  >
                    Eliminar
                  </Card.Link>
                  <Card.Link href="#">Editar</Card.Link>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <h1>Hola Sandy próximamente tendré una página web </h1>
          <h3>{`La hora es ${count ?? 'Esperando'}`}</h3>
        </header>
        <div className="input-direction back-fond">
          <input className="input-property" placeholder="Ingresa tu tarea" />
          <button onClick={() => alert('Agregar')}> Agregar</button>
        </div>
        <h1>Proximamente</h1>
      </div> */}
    </>
  );
}

export default App;
