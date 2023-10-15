import NewProduct from '../NewProduct/NewProduct';
import Products from '../Products/Products';
import Sales from '../Sales/Sales';
import Users from '../Users/Users';
import './Content.css'

const Content = ({currentSelection}) => {

    const renderSection = () => {
        switch (currentSelection) {
          case 'usuarios':
            return <Users />;
          case 'ventas':
            return <Sales />;
          case 'productos':
            return <Products />
          case 'NewProduct':
            return <NewProduct />
          default:
            return <div>Seleccione una sección</div>;
        }
      };

    return (
        <div className='containerContent'>
            {renderSection()}
        </div>
    )
}

export default Content