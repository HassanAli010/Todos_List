// import React, { useState, useEffect } from "react";
// import Header from "./MyComponents/Header";
// import Todos from "./MyComponents/Todos";
// import Footer from "./MyComponents/Footer";
// import AddTodo from "./MyComponents/AddTodo";
// import About from './MyComponents/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// const App = () => {
//   let initTodo;
//   if (localStorage.getItem("todos") === 0) {
//     initTodo = [];
//   } else {
//     initTodo = JSON.parse(localStorage.getItem("todos"));
//   }
//   const [todos, setTodos] = useState([initTodo]);
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   // ----------------------------------
//   const onDelete = (todo) => {
//     console.log("I am onDelete", todo);
//     // setTodos(
//     //   todos.filter((e) => {
//     //     return e !== todo;
//     //   })
//     // );
//     setTodos(todos.filter((e) => e !== todo));

//     localStorage.setItem("todos", JSON.stringify(todos));
//   };

//   // -------------------------
//   const addTodo = (title, desc) => {
//     console.log("I am adding this todo", title, desc);
//     let sno;
//     if (todos.length === 0) {
//       sno = 0;
//     } else {
//       sno = todos[todos.length - 1].sno + 1;
//     }
//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     };
//     setTodos([...todos, myTodo]);
//     console.log(myTodo);
//   };
//   //  ------------------
//   return (
//     <>
//       <Router>
//       <Header title="My Todos List" searchBar={false} />
//       <Switch>
//         <Route path ="/" render={()=>{
//           return (
//             <>
//             <AddTodo addTodo={addTodo} />
//             <Todos todos={todos} onDelete={onDelete} />
//             </>
//           )
//         }}>
//         </Route>
//         <Route path ="/about">
//           <About/>
//         </Route>
//       </Switch>

//       <Footer />
//       </Router>
//     </>
//   );
// };

// export default App;

// ------------------------------

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./MyComponents/Header";
// import Todos from "./MyComponents/Todos";
// import Footer from "./MyComponents/Footer";
// import AddTodo from "./MyComponents/AddTodo";
// import About from './MyComponents/About';

// const App = () => {
//   let initTodo;
//   if (localStorage.getItem("todos") === 0) {
//     initTodo = [];
//   } else {
//     initTodo = JSON.parse(localStorage.getItem("todos"));
//   }
//   const [todos, setTodos] = useState([initTodo]);
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const onDelete = (todo) => {
//     console.log("I am onDelete", todo);
//     setTodos(todos.filter((e) => e !== todo));
//     localStorage.setItem("todos", JSON.stringify(todos));
//   };

//   const addTodo = (title, desc) => {
//     console.log("I am adding this todo", title, desc);
//     let sno;
//     if (todos.length === 0) {
//       sno = 0;
//     } else {
//       sno = todos[todos.length - 1].sno + 1;
//     }
//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     };
//     setTodos([...todos, myTodo]);
//     console.log(myTodo);
//   };

//   return (
//     <>
//       <Router>
//         <Header title="My Todos List" searchBar={false} />
//         <Routes>
//           <Route exact path="/" element={<Home addTodo={addTodo} todos={todos} onDelete={onDelete} />} />
//           <Route exact path="/about" element={<About />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// };

// const Home = ({ addTodo, todos, onDelete }) => (
//   <>
//     <AddTodo addTodo={addTodo} />
//     <Todos todos={todos} onDelete={onDelete} />
//   </>
// );

// export default App;

// ----------------------------------------
// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";

const App = () => {
  // Check if todos exist in localStorage
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(storedTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home addTodo={addTodo} todos={todos} onDelete={onDelete} />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

const Home = ({ addTodo, todos, onDelete }) => (
  <>
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} />
  </>
);

export default App;
