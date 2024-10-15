import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IPost} from "./components/model/IPost";
import Posts from "./components/Posts/Posts";
import {getPost} from "./components/services/api.servise";



// https://dummyjson.com/docs/users
//     отримати та вивести інфу по всіх юзерах. Для запитів використовуємо axios та розносимо логіку в сервіси
// Структура компонентів : App - Users- User
// в компоненті User зробити кнопку при натсиканні на яку відбувається стейт ліфтінг ід користувача в батьківську компоненту. В батьківській компоненті вивести всі пости обраного юзера (https://dummyjson.com/docs/posts  Get all posts by user id)






const App:FC =() =>{

  const [posts, setPosts] = useState<IPost[]>([])

  const lift =  (id:number) => {
          getPost(id).then(value => setPosts(value))

   }


  return (
    <div >
      <hr/>
     <Posts posts={posts}/>

      <hr/>
      <Users lift={lift}/>

    </div>
  );
}

export default App;
