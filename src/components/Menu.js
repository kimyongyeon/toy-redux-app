import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // 스타일/클래스 지정할 수 있다. 

const Menu = () => {

   const activeStyle = {
      color: 'green',
      fontSize: '2rem'
   };

   return (
      <div>
         <ul>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/callback">callback</Link></li>
            <li><Link to="/memo">memo</Link></li>
            <li><Link to="/posts">posts</Link></li>
            <li><Link to="/useRefContainer">ref</Link></li> */}

            <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
            <li><NavLink exact to="/callback" activeStyle={activeStyle}>callback</NavLink></li>
            <li><NavLink exact to="/memo" activeStyle={activeStyle}>memo</NavLink></li>
            <li><NavLink exact to="/posts" activeStyle={activeStyle}>posts</NavLink></li>
            <li><NavLink to="/useRefContainer" activeStyle={activeStyle}>ref</NavLink></li>

         </ul>
         <hr />
      </div>
   );
};

export default Menu;