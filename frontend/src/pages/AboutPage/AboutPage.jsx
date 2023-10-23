import style from './AboutPage.css'
import nuestrahistoria from './../../assets/nuestrahistoria.png'
import banner from './../../assets/imprenta.jpg'
import banner2 from './../../assets/imprenta2.jpg'
import fondocard1 from './../../assets/fondocard1.jpg'
import fondocard2 from './../../assets/fondocard2.jpg'
import fondocard3 from './../../assets/fondocard3.jpg'
import fondocard4 from './../../assets/fondocard4.jpg'
// Pagina con informacion sobre el local
const AboutPage = () => {
    return (
        <div id='bodyabout'> 
        <div>
      
            <div className="containercards"> 

               
                    <img className="nuestrahistoria" src={nuestrahistoria} alt="" />
                    <br />
                    <p className='descripciongrafica'>Gráfica Ángel es mucho más que un simple emprendimiento familiar; es una pasión que hemos cultivado a lo largo de los años. Nos especializamos en la impresión en distintos sustratos, incluyendo madera, aluminio y textiles, y nuestro compromiso con la excelencia en impresión y diseño es innegable. Aunque oficialmente fundamos nuestra empresa en el año 2021, nuestra historia en el mundo de la impresión se remonta a más de una década de experiencia. Durante todo ese tiempo, hemos dedicado horas incontables perfeccionando nuestras técnicas, explorando las últimas tendencias en diseño y manteniéndonos al día con las últimas tecnologías. Este compromiso inquebrantable nos ha convertido en auténticos expertos en la creación de productos sublimados de alta calidad, siempre superando las expectativas de nuestros clientes. Estamos emocionados de seguir creciendo y evolucionando, ofreciendo soluciones de impresión innovadoras y personalizadas para satisfacer las necesidades de todos aquellos que confían en nosotros.</p>
  
                        <div class="containercardanimation">
  <img src={fondocard1} alt="Avatar" class="fondocard"/>
  <div class="overlay">
    <div class="text"><h2 className='titulo'>Nuestra pasión</h2><br></br>En Gráfica Ángel, nuestra mayor pasión es la impresión en sustratos diversos. Trabajamos con una variedad de materiales, lo que nos permite ofrecer una amplia gama de opciones para merchandising, eventos y regalos personalizados. Cada producto que creamos refleja nuestro compromiso y pasión por la impresión de calidad en estos sustratos únicos.</div>
  </div>
</div>
<div class="containercardanimation">
  <img src={fondocard4} alt="Avatar" class="fondocard"/>
  <div class="overlay">
    <div class="text"><h2 className='titulo'>Nuestros objetivos</h2><br></br>En Gráfica Ángel, nos enorgullece suplir la necesidad de merchandising, eventos y regalos personalizados. Creemos que cada producto que sale de nuestras instalaciones es una oportunidad para crear algo único y significativo. Ya sea para un evento especial o para promocionar tu negocio, estamos aquí para dar vida a tus ideas en impresiones excepcionales.</div>
  </div>
</div>
<div class="containercardanimation">
  <img src={fondocard3} alt="Avatar" class="fondocard"/>
  <div class="overlay">
    <div class="text"><h2 className='titulo'>Nuestra ubicación</h2><br></br>Nos encontramos en Lomas de Tafí, específicamente en el Sector 17, Manzana 34, Casa 12. Esta ubicación es más que una dirección; es el corazón de Gráfica Ángel, donde cada idea toma forma y se convierte en un producto sublimado único.</div>
  </div>
</div>
<div class="containercardanimation">
  <img src={fondocard2} alt="Avatar" class="fondocard"/>
  <div class="overlay">
    <div class="text"><h2 className='titulo'>Nuestro compromiso</h2><br></br>Nuestro compromiso con la calidad, la creatividad y la satisfacción del cliente es inquebrantable. En Gráfica Ángel, creemos que la impresión es un arte, y cada producto que entregamos es una obra maestra. Nos esforzamos por superar las expectativas en cada impresión, en cada detalle.
                    Agradecemos por ser parte de nuestra historia y por confiar en nosotros para todas tus necesidades de impresión. Juntos, hacemos magia en cada impresión.</div>
  </div>
</div>
              
        </div> 
    </div></div>
    )
}

export default AboutPage 