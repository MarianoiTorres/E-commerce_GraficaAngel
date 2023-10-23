import "./Contact.css";
import trabajemos from "./../../assets/trabajemos.png"
import { useState } from "react";
import axios from 'axios'


const Contact = () => {

  const [message, setMessage] = useState({
    name: '',
    lastname: '',
    email: '',
    asunto: ''
  })

  const onChangeHandle = (event) => {
    setMessage({
      ...message,
      [event.target.name]: event.target.value
    })
  }

  const sendMessage = async() => {
    const response = await axios.post(`http://localhost:3001/grafica/contact`, {data: message})
    
    setMessage({
      name: '',
      lastname: '',
      email: '',
      asunto: ''
    })
  }

  return (
    <div>

      <div className="contactcontainer">
        <div className="contact">
          <img className="trabajamosjuntos" src={trabajemos}></img>
          <div className="agradecimientocontactocontenedor">
            <p className="agradecimientocontacto">
              Estamos encantados de saber que tienes una consulta para nosotros.
              Valoramos tu tiempo y tu interés en nuestros servicios. Por favor,
              ten en cuenta que responderemos a tu consulta dentro de las
              próximas 24 horas hábiles. ¡Gracias por confiar en nosotros y por elegir nuestros
              servicios!
            </p>

          </div>
          <div className="input">
            <input type="text" placeholder="Nombre" name="name" onChange={onChangeHandle} value={message.name}/>
            <input type="text" placeholder="Apellido" name="lastname" onChange={onChangeHandle} value={message.lastname}/>
            <input type="text" placeholder="micorreo@gmail.com" name="email" onChange={onChangeHandle} value={message.email}/>
            <textarea
              name="asunto"
              id=""
              cols="30"
              rows="10"
              placeholder="Hola Ángel, quisiera hacerte una consulta sobre..."
              onChange={onChangeHandle} 
              value={message.asunto}
              ></textarea>
            <button className="botonenviar" onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
