import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import TableUser from './components/Table';
import Input from './components/Input';
import { Table } from 'react-bootstrap';

const URLuser = 'https://jsonplaceholder.typicode.com/users'




function App() {


  const [users, setUsers] = useState([])


  // GET USER ALL
  const getAllUser = async () => {
    return await axios.get(URLuser).then(res => res.data).then((data) => setUsers(data))
  }


  //CREATE USER 
  const CreateUser = async (name, email, username, phone, website) => {
    await fetch(URLuser, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        username: username,
        phone: phone,
        website: website
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((res) => {
      if (res.status !== 201) {
        return
      } else {
        return res.json();
      }
    }).then((data) => {
      console.log(data)
      setUsers((users) => [...users, data]);
    })
      .catch((err) => {
        console.log(err);
      })
  }

  // DELETE 
  const onDelete = async (id) => {
    await fetch(`${URLuser}/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.status !== 200) {
          return
        } else {
          setUsers(users.filter((users) => {
            return users.id !== id;
          }))
        }
      })
      .catch((err) => {
        console.log(err)
      })

  }


  useEffect(() => {
    getAllUser()
  }, [])

  return (

    <div className="App">

      <Input CreateUser={CreateUser} />

    
      <div>
       
          
          {users?.map((user) => (
            <TableUser id={user.id} key={user.id} name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website} onDelete={onDelete} />
          ))}
          <tbody></tbody>

        
      </div>
    </div>
  );
}

export default App;
// id={item.id} key={item.id} name={item.name} username={item.username} email={item.email} phone={item.phone} website={item.website}>