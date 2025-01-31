import { useState } from 'react'

export const useMenuData = () => {

  const [selectPizza] = useState([
    { id: 1, name: "Margherita", price: 20000 },
    { id: 2, name: "Pepperoni", price: 20000 },
    { id: 3, name: "Hawaiana", price: 20000 },
    { id: 4, name: "Cuatro Quesos", price: 20000 },
    { id: 5, name: "Vegetariana", price: 20000 },
    { id: 6, name: "Barbacoa", price: 20000 },
    { id: 7, name: "Mexicana", price: 20000 },
    { id: 9, name: "Champiñones", price: 20000 },
    { id: 10, name: "Napolitana", price: 20000 },
    { id: 11, name: "Española", price: 20000 },
    { id: 12, name: "Mar y Tierra", price: 20000 },
  ]);

  const selectEntrada = [
    { id: 13, name: "Papas Fritas", price: 12000 },
    { id: 14, name: "Batones de Mozzarella", price: 12000 },
    { id: 15, name: "Alitas de Pollo", price: 12000 },
    { id: 16, name: "Aros de Cebolla", price: 12000 },
    { id: 17, name: "Bruschetta", price: 12000 },
    { id: 18, name: "Empanadas", price: 12000 },
    { id: 19, name: "Nachos con Queso", price: 12000 },
    { id: 20, name: "Queso Fundido", price: 12000 },
    { id: 21, name: "Croquetas de Jamón", price: 12000},
    { id: 22, name: "Hummus con Pan de Pita", price: 12000 },
  ];

  const selectBebidas = [
    // Cervezas
    { id: 23, name: "Corona", price: 2000 },
    { id: 24, name: "Heineken", price: 2000 },
    { id: 25, name: "Budweiser", price: 2000 },
    { id: 26, name: "Guinness", price: 2000 },
    { id: 27, name: "Stella Artois", price: 2000 },
  
    // Gaseosas
    { id: 28, name: "Coca-Cola", price: 2000 },
    { id: 29, name: "Pepsi", price: 2000 },
    { id: 30, name: "Sprite", price: 2000 },
    { id: 31, name: "Fanta", price: 2000 },
    { id: 32, name: "7-Up", price: 2000 }
  ];

  const [addFood, setAddFood] = useState([])

  const addYourFood = (food) => {
    
    setAddFood(prevFood => [...prevFood, food]);

  };

  const removeYourFood = (food) => {
    setAddFood((prev) => prev.filter((item) => item.id !== food.id))
  }

  const calcularTotal = () => {
    return addFood.reduce((total, food) => total + food.price, 0);
  }

  return {
      selectPizza,
      selectEntrada,
      selectBebidas,
      addFood,
      addYourFood,
      removeYourFood,
      calcularTotal
  }
}