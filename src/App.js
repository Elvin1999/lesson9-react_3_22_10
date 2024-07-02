import logo from "./logo.svg";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import Form from "./Form";
import axios from "axios";

// export const ThemeContext = createContext(null);
// function App() {
//   const [theme, setTheme] = useState("light");

//   function handleClick(e) {
//     if(theme==="light"){
//       setTheme("dark");
//     }
//     else{
//       setTheme("light");
//     }
//   }
//   return (
//     <div className="App">
//       <ThemeContext.Provider value={theme}>
//         <h1>Context Api</h1>
//         <Form handleClick={handleClick}></Form>
//         <label>
//           Use dark mode
//           <input
//             type="checkbox"
//             checked={theme === "dark"}
//             onChange={handleClick}
//           ></input>
//         </label>
//       </ThemeContext.Provider>
//     </div>
//   );
// }

export const ThemeContext = createContext(null);
function App() {
  //const url = "https://reqres.in/api/users";
  const url = "http://localhost:27001/movies";
  const [data, setData] = useState(null);

  useEffect(() => {
    //GetUsers();
    //GetUsersByAxios();
    //sendObjectPost();
    sendObjectByAxios();
    //deleteItem();
  }, []);

  function GetUsersByAxios() {
    axios.get(url).then((data) => {
      console.log(data);
      setData(data.data);
    });
  }
  function GetUsers() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function sendObjectPost() {
    const obj = {
      name: "Elvin",
      job: "programmer",
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function sendObjectByAxios() {
    // const obj = {
    //   name: "Elvin",
    //   job: "programmer",
    // };
    const obj={
      title: "New Film",
      views: 100
    }
    axios.post(url, obj).then((data) => console.log(data));

    // const obj = {
    //   name: "Elvin",
    //   job: "programmer",
    // };
    // axios.put(url + "/2", obj).then((data) => console.log(data));
  }

  function deleteItem() {
    // fetch(url + "/2", { method: "DELETE" }).then(() =>
    //   alert("Deleted successfully")
    // );
    axios.delete(url + "/2").then(() => alert("Deleted successfully"));
  }

  return (
    <div className="App">
      {data && (
        <ul>
          {data.data.map((user) => (
            <li key={user.id}>
              <h2>{user.email}</h2>
              <img src={user.avatar} alt={user.first_name}></img>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
