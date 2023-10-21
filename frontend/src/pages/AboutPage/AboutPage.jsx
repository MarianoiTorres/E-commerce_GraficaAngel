import style from './AboutPage.css'


// Pagina con informacion sobre el local
const AboutPage = () => {
    return (
        <body id='bodyabout'> 
        <div>
            <h1 className="titulo">Sobre Nosotros</h1>
            <div className="container"> 
                <div className="card" id='card1'> 
               
                    <h4><b>-Acerca de grafica angel-</b></h4> 
                    <h5>Nuesta historia:</h5> 
                    <p><b>Gráfica Ángel es un emprendimiento familiar dedicado a la impresión en distintos sustratos, incluyendo madera, aluminio y textiles. Fundamos nuestra empresa en el año 2021, aunque nuestra experiencia en el mundo de la impresión se extiende por más de 20 años. 
                        Durante todo ese tiempo, hemos estado comprometidos con la excelencia en la impresión y el diseño, lo que nos ha convertido en expertos en la creación de productos sublimados de alta calidad.</b></p>
                </div>
                <div className="card"> 
                   
                    <h4><b>¡Nuestra pasión!</b></h4>
                    <p><b>En Gráfica Ángel, nuestra mayor pasión es la impresión en sustratos diversos. Trabajamos con una variedad de materiales, lo que nos permite ofrecer una amplia gama de opciones para merchandising, eventos y regalos personalizados. Cada producto que creamos refleja nuestro compromiso y pasión por la impresión de calidad en estos sustratos únicos.</b></p>
                </div>

                <div className="card">
                    
                    <h4><b>¡Nuestros objetivos!</b></h4>
                    <p><b>En Gráfica Ángel, nos enorgullece suplir la necesidad de merchandising, eventos y regalos personalizados. Creemos que cada producto que sale de nuestras instalaciones es una oportunidad para crear algo único y significativo. Ya sea para un evento especial o para promocionar tu negocio, estamos aquí para dar vida a tus ideas en impresiones excepcionales.</b></p>
                </div>
                <div className="card">
                   
                    <h4><b>Nuestra ubicación</b></h4>
                    <p><b>Nos encontramos en Lomas de Tafí, específicamente en el Sector 17, Manzana 34, Casa 12. Esta ubicación es más que una dirección; es el corazón de Gráfica Ángel, donde cada idea toma forma y se convierte en un producto sublimado único.</b></p>
                </div> 
                <div className="card">
                    
                    <h4><b>Nuestro compromiso..</b></h4>           
                    <p><b>Nuestro compromiso con la calidad, la creatividad y la satisfacción del cliente es inquebrantable. En Gráfica Ángel, creemos que la impresión es un arte, y cada producto que entregamos es una obra maestra. Nos esforzamos por superar las expectativas en cada impresión, en cada detalle.
                    Agradecemos por ser parte de nuestra historia y por confiar en nosotros para todas tus necesidades de impresión. Juntos, hacemos magia en cada impresión.</b></p>
                </div>
            </div>  
        </div> 
        </body> 
    )
}

export default AboutPage 