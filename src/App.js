import { useEffect, useState, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import logo from './logo.svg';
import './App.css';
// Styles
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [count, setCount] = useState();
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

  useLayoutEffect(() => {
    const date = new Date();
    const hours =
      date.getHours().toString().padStart(2, '0') +
      ':' +
      date.getMinutes().toString().padStart(2, '0') +
      ':' +
      date.getSeconds().toString().padStart(2, '0');
    setCount(hours);
  }, []);

  const onSubmit = data =>
    setHomeWork(v => {
      const a = [...v];
      a.push(data['add-home-work']);
      return a;
    });

  return (
    <>
      {console.log(errors)}
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
                  <label className="pb-5" />
                  <button type="submit" className="form-control btn btn-primary">
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row m-2">
          {homeWork.map(home => (
            <div className="col-6 col-md-3 mb-2">
              <div className="card ">
                <div style={{ minHeight: 70 }}>
                  <span className="d-flex justify-content-end" style={{ padding: '1rem 1rem 0 ' }}>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-file-minus-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        setHomeWork(v => v.filter(f => f !== home));
                      }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"
                      />
                    </svg>
                  </span>
                  <span className="d-flex justify-content-center">{home}</span>
                </div>
              </div>
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
