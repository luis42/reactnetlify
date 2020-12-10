/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import logo from './logo.svg';
import './App.css';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
// import { Button, ButtonGroup, Card } from 'react-bootstrap';
// import ToggleButton from 'react-bootstrap/ToggleButton';

function App() {
  // const { register, handleSubmit, errors } = useForm();
  // const [count, setCount] = useState();
  // const [homeWork, setHomeWork] = useState([]);
  const [groupSwitch, setGroupSwitch] = useState({ good: true, cheap: true, fast: false });
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

  // const onSubmit = data =>
  //   setHomeWork(v => {
  //     const a = [...v];
  //     a.push(data['add-home-work']);
  //     return a;
  //   });

  const changeInFunctionSelect = e =>
    setGroupSwitch(event => {
      const temp = { ...event, [e.target.name]: e.target.checked };
      switch (e.target.name) {
        case 'good':
          if (temp.fast && temp.cheap) temp.fast = false;
          break;
        case 'cheap':
          if (temp.good && temp.fast) temp.good = false;
          break;
        case 'fast':
          if (temp.good && temp.cheap) temp.cheap = false;
          break;
        default:
          break;
      }

      return temp;
    });

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="container-fluid">
      <div className="card m-4">
        <h1 className="p-3 mb-3 bg-primary text-white" style={{ textAlign: 'center' }}>
          Ejercicio - Money vs Time vs Energy
        </h1>

        <div className="custom-control custom-switch " style={{ marginLeft: 'inherit', fontSize: 30 }}>
          <input
            className="custom-control-input"
            type="checkbox"
            id="switchGood"
            checked={groupSwitch.good}
            name="good"
            onChange={changeInFunctionSelect}
          />
          <label
            className="custom-control-label"
            htmlFor="switchGood"
            style={{
              paddingLeft: '1.2rem',
              fontWeight: groupSwitch.good ? 'lighter' : 'bold',
              textDecoration: groupSwitch.good ? '' : 'line-through',
              fontSize: 18,
            }}
          >
            Money
          </label>
        </div>

        <div className="custom-control custom-switch" style={{ marginLeft: 'inherit', fontSize: 30 }}>
          <input
            type="checkbox"
            className="custom-control-input"
            id="switchCheap"
            checked={groupSwitch.cheap}
            name="cheap"
            onChange={changeInFunctionSelect}
          />
          <label
            className="custom-control-label"
            htmlFor="switchCheap"
            style={{
              paddingLeft: '1.2rem',
              fontSize: 18,
              fontWeight: groupSwitch.cheap ? 'lighter' : 'bold',
              textDecoration: groupSwitch.cheap ? '' : 'line-through',
            }}
          >
            Time
          </label>
        </div>

        <div className="custom-control custom-switch" style={{ marginLeft: 'inherit', fontSize: 30 }}>
          <input
            type="checkbox"
            className="custom-control-input"
            id="switchFast"
            checked={groupSwitch.fast}
            name="fast"
            onChange={changeInFunctionSelect}
          />
          <label
            className="custom-control-label"
            htmlFor="switchFast"
            style={{
              paddingLeft: '1.2rem',
              fontSize: 18,
              fontWeight: groupSwitch.fast ? 'lighter' : 'bold',
              textDecoration: groupSwitch.fast ? '' : 'line-through',
            }}
          >
            Energy
          </label>
        </div>
      </div>
    </div>
  );

  // return (
  //   <>
  //     <div className="container-fluid">
  //       <div className="card m-4">
  //         <div className="d-flex flex-column bd-highlight m-3 ">
  //           <form onSubmit={handleSubmit(onSubmit)}>
  //             <div className="row">
  //               <div className="form-group col-12 col-md-10">
  //                 <label htmlFor="exampleInputEmail1">Agregar tarea</label>
  //                 <input
  //                   type="text"
  //                   className="form-control"
  //                   id="home-work"
  //                   name="add-home-work"
  //                   ref={register({ required: { message: 'Agregue una tarea.', value: true } })}
  //                 />
  //                 {errors['add-home-work'] && <span className="text-danger m-2">{errors['add-home-work'].message}</span>}
  //               </div>
  //               <div className="form-group col-12 col-md-2">
  //                 <label htmlFor="q" className="pb-5" />
  //                 <Button type="submit" variant="primary" className="form-control">
  //                   Agregar
  //                 </Button>
  //               </div>
  //             </div>
  //           </form>
  //         </div>
  //       </div>

  //       <div className="row m-2">
  //         {homeWork.map(home => (
  //           <div className="col-6 col-md-3 mb-2">
  //             <Card border="success" key={home} text="black" style={{ width: '18rem' }} className="text-center">
  //               <Card.Header>Card</Card.Header>
  //               <Card.Body>
  //                 <Card.Title>Tarea </Card.Title>
  //                 <Card.Text>{home}</Card.Text>
  //                 <Card.Link
  //                   href="#"
  //                   onClick={e => {
  //                     setHomeWork(v => v.filter(f => f !== home));
  //                     e.preventDefault();
  //                   }}
  //                 >
  //                   Eliminar
  //                 </Card.Link>
  //                 <Card.Link href="#">Editar</Card.Link>
  //                 <ButtonGroup aria-label="Basic example">
  //                   <Button variant="secondary">Left</Button>
  //                   <Button variant="secondary">Middle</Button>
  //                   <Button variant="secondary">Right</Button>
  //                 </ButtonGroup>
  //               </Card.Body>
  //             </Card>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //     {/* <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  //           Learn React
  //         </a>
  //         <h1>Hola Sandy próximamente tendré una página web </h1>
  //         <h3>{`La hora es ${count ?? 'Esperando'}`}</h3>
  //       </header>
  //       <div className="input-direction back-fond">
  //         <input className="input-property" placeholder="Ingresa tu tarea" />
  //         <button onClick={() => alert('Agregar')}> Agregar</button>
  //       </div>
  //       <h1>Proximamente</h1>
  //     </div> */}
  //   </>
  // );
}

export default App;
