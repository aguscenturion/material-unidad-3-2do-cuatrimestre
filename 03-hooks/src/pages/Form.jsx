import { useState } from "react"

export const Form = () => {

    const [formulario, setFormulario] = useState({
        usuario: '', lastname: '', password: ''
    })

    const handleChange = (event) => {

        const { name, value } = event.target
        
        setFormulario({
            //voy a dejar tal cual el formulario exeptuando lo que modifique luego.
            ...formulario,
            //puede venir usuario o password, independientemente de que input se ejecute
            [name]: value
        })
    }

  return (
    <div>
        <input type="text" name="usuario" value={formulario.usuario} onChange={handleChange}/>
        <input type="text" name="lastname" value={formulario.lastname} onChange={handleChange}/>
        <input type="text" name="password" value={formulario.password} onChange={handleChange}/>

        <button onClick={()=>setFormulario({...formulario, usuario: 'boton'})}>Ver datos</button>
    </div>
  )
}
