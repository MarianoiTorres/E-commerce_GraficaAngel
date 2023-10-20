import style from './AboutPage.css'

// Pagina con informacion sobre el local
const AboutPage = () => {
    return (
        <body> 
        <div>
            <h1 className="titulo">Sobre Nosotros</h1>
            <div className="container">
                <div className="card">
                    <img src="img/logosinfondo.jpg"></img> 
                    <h4>-Acerca de grafica angel-</h4> 
                    <h5>Nuesta historia</h5> 
                    <p>Gráfica Ángel es un emprendimiento familiar dedicado a la impresión en distintos sustratos, incluyendo madera, aluminio y textiles. Fundamos nuestra empresa en el año 2021, aunque nuestra experiencia en el mundo de la impresión se extiende por más de 20 años. 
                        Durante todo ese tiempo, hemos estado comprometidos con la excelencia en la impresión y el diseño, lo que nos ha convertido en expertos en la creación de productos sublimados de alta calidad.</p>
                </div>
                <div className="card">
                    <img src="assets/img/remera.jpg"></img> 
                    <h4>¡Nuestra pasión!</h4>calidad
                    <p>En Gráfica Ángel, nuestra mayor pasión es la impresión en sustratos diversos. Trabajamos con una variedad de materiales, lo que nos permite ofrecer una amplia gama de opciones para merchandising, eventos y regalos personalizados. Cada producto que creamos refleja nuestro compromiso y pasión por la impresión de calidad en estos sustratos únicos.</p>
                </div>

                <div className="card">
                    <img src="img/taza.jpg"></img>
                    <h4>Nuestros objetivos</h4>
                    <p>En Gráfica Ángel, nos enorgullece suplir la necesidad de merchandising, eventos y regalos personalizados. Creemos que cada producto que sale de nuestras instalaciones es una oportunidad para crear algo único y significativo. Ya sea para un evento especial o para promocionar tu negocio, estamos aquí para dar vida a tus ideas en impresiones excepcionales.</p>
                </div>
                <div className="card">
                    <img src="img/taza.jpg"></img>
                    <h4>Nuestra ubicación</h4>
                    <p>Nos encontramos en Lomas de Tafí, específicamente en el Sector 17, Manzana 34, Casa 12. Esta ubicación es más que una dirección; es el corazón de Gráfica Ángel, donde cada idea toma forma y se convierte en un producto sublimado único.</p>
                </div> 
                <div className="card">
                    <img src="img/taza.jpg"></img>
                    <h4>Nuestro compromiso</h4>           
                    <p>Nuestro compromiso con la calidad, la creatividad y la satisfacción del cliente es inquebrantable. En Gráfica Ángel, creemos que la impresión es un arte, y cada producto que entregamos es una obra maestra. Nos esforzamos por superar las expectativas en cada impresión, en cada detalle.
                    Agradecemos por ser parte de nuestra historia y por confiar en nosotros para todas tus necesidades de impresión. Juntos, hacemos magia en cada impresión.</p>
                </div>
            </div> 
        </div> 
        </body> 
    )
}

export default AboutPage 