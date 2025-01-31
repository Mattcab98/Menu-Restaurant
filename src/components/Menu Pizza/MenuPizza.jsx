import { useState, useRef } from 'react';
import '../Menu Pizza/menuPizza.css';
import { useMenuData } from './hook/useMenuData';

export const MenuPizza = () => {

  // Custom Hook Data topping 

  const { selectPizza, selectEntrada, selectBebidas, addFood, addYourFood, removeYourFood, calcularTotal } = useMenuData();

  // end custom Hook Data topping

  // event onClick add className 'active'

  const [isVisible, setIsVisible] = useState(false);
  const containToppingRef = useRef(null);

  const toggleVisible = () => {
    setIsVisible(visible => !visible);
  }

  // end event onClick add className 'active'

  return (
    <>

      <div className="menu">

        <div className={'menu__food'}>

          <h2 className="title__menu">Food Menu</h2>

          <h3>Pizzas</h3>

          <ul
            className={`contain__topping ${isVisible ? 'active' : ''}`}
            id="contain__topping"
            ref={containToppingRef}> {selectPizza.map((topping) => (
              <li
                key={topping.id}
                onClick={() => addYourFood(topping)}> {topping.name} ${topping.price},00 </li>
            ))}
          </ul>

          <h3>Entradas</h3>

          <ul
            className={`contain__topping ${isVisible ? 'active' : ''}`}
            id="contain__topping"
            ref={containToppingRef}>
            {selectEntrada.map((topping) => (
              <li
                key={topping.id}
                onClick={() => addYourFood(topping)}> {topping.name} ${topping.price},00</li>
            ))}
          </ul>

          <h3>Bebidas</h3>

          <ul
            className={`contain__topping ${isVisible ? 'active' : ''}`}
            id="contain__topping"
            ref={containToppingRef}>
            {selectBebidas.map((topping) => (
              <li
                key={topping.id}
                onClick={() => addYourFood(topping)}> {topping.name} ${topping.price},00</li>
            ))}
          </ul>

          <button
            className={'buttonColor'}
            onClick={toggleVisible}
          > {isVisible ? 'Ocultar Menu' : 'Mostrar Menu'}</button>

        </div>

        <div className="container__addFood">

          <h2>Your food Selected</h2>

          <ul className='ul__addFood'>
            {addFood.length === 0 ? (
              <a>No food is selected.</a>
            ) : (addFood.map((add) => (
              <li key={add.id}>
                {add.name}
                <button
                  className='buttonRemove'
                  onClick={() => removeYourFood(add)}> X </button>
              </li>
            )))}
          </ul>

          <h4>total: {calcularTotal()},00</h4>

        </div>
        
          <button className='buttonSend'>Enviar Pedido</button>

      </div>

    </>
  )
}
