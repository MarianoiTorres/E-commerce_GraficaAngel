import style from "./Contact.css";
import NavBar from "./../../components/NavBar/NavBar";
import Footer from "./../../components/Footer/Footer";
import trabajemos from "./../../assets/trabajemos.png"
const Contact = () => {
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
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
            <input type="text" placeholder="micorreo@gmail.com" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Hola Ángel, quisiera hacerte una consulta sobre..."
            ></textarea>
            <button className="botonenviar">Enviar</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
