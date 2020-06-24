// import React, { forwardRef, useRef, createRef, useState } from 'react'
import React, { useRef, forwardRef } from 'react'

// 커스텀 hook 
// const useReference = () => {
//    const [reference, setReference] = useState(() => createRef())

//    return reference
// }

const LabelInput = forwardRef(({ text, type }, ref) => (
   <label>
      {text}
      <input type={type} ref={ref} />
   </label>
))

function UseRefContainer() {

   const idReference = useRef()
   const passwordReference = useRef()

   // const [idReference, setIdReference] = useState(() => createRef())
   // const [passwordReference, setPasswordReference] = useState(() => createRef())

   // const idReference = useReference()
   // const passwordReference = useReference()

   const requestToLogin = event => {
      event.preventDefault();

      const id = idReference.current.value
      const password = passwordReference.current.value

      // const idReference = document.getElementById('id');
      // const passwordReference = document.getElementById('password');

      // value를 못찾는다 왜?
      // const id = idReference.target.value;
      // const password = passwordReference.target.value;

      console.log(id, password);
   }

   return (
      <form onSubmit={requestToLogin}>
         <label>
            id: <input ref={idReference} type='text' />
         </label>
         <label>
            password: <input ref={passwordReference} type='password' />
         </label>
         <button type='submit'>로그인!</button>

         <LabelInput text='id:' type='text' ref={idReference} />
         <LabelInput text='password:' type='password' ref={passwordReference} />

      </form>
   )
}



export default UseRefContainer
