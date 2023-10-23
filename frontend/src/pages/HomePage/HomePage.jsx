import spotPublicitario from '../../assets/spotPublicitario.mp4'
import './Home.css'

const HomePage = () => {
    
    return (
        <div>
            <video 
                width='90%'
                muted 
                autoPlay 
                loop 
                src={spotPublicitario}
                className='spot'
            />
            
            <div>
                <div className='box'>
                    <h2 className='subTittle'> Descuentos del Día </h2>
                    <div className='boxProduct'>
                        <p className='prodTittle'> Taza Mario Bros</p>
                        <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNaDRfV1TwGI8ICGt0KScf3bl9VKxqoiqXbkWjxFKtP3P8cCZiivl_hwzGkhKZAKZJeIo&usqp=CAU" 
                        alt="producto" 
                        className='product' 
                        />
                        <div className='boxPrice'>
                            <p className='rebaja'>${1500-1500/10}</p>
                            <p className='price'>${1500}</p>
                        </div>
                        <p className='stock'> stock: 30 </p>
                    </div>
                </div>

                <div className='box'>
                    <h2 className='subTittle'> Nuevos Productos </h2>
                    <div className='boxProduct'>
                        <p className='prodTittle'> Taza Mario Bros</p>
                        <img 
                        src="https://www.sublimadosaiki.com.ar/store/wp-content/uploads/2020/04/20180717_155411-scaled.jpg" 
                        alt="producto" 
                        className='product' 
                        />
                        <p className='onlyPrice'> ${1500} </p>
                        <p className='stock'> stock: 30 </p>

                    </div>
                </div>

                <div className='box'>
                    <h2 className='subTittle'> Más vendidos</h2>
                    <div className='boxProduct'>
                        <p className='prodTittle'> Taza Mario Bros</p>
                        <img 
                        src="https://www.la-grafika.com.ar/wp-content/uploads/2018/05/0529A937-BAF2-4A69-8E31-51E9AD2AED26.jpeg" 
                        alt="producto" 
                        className='product' 
                        />
                        <p className='onlyPrice'> ${1500} </p>
                        <p className='stock'> stock: 30 </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
