import { object } from "prop-types";
import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

//create your first component
const Home = () => {

	const [newItem, setNewItem] = useState ("");
	const [items, setItems] = useState([]);
	const [count, setCount] = useState(0);

	function addItem(){

		if (!newItem){
			alert("Enter an item.")
			return;
		}
		
	const item = {
		id: Math.floor(Math.random() * 1000),
		value: newItem
		}

		setItems(oldList => [...oldList, item]);
		setNewItem("");

	};

	function deteleItem(id){
		const newArray = items.filter(item => item.id !== id);
		setItems(newArray);
	}

	return (
		<div className="text-center container">
			
			<h1>todos</h1>
			<input 
			type="text"
			placeholder="What needs to be done?"
			value={newItem}
			onChange={e => setNewItem(e.target.value)}
			onKeyDown={ e => {
				if (e.key == "Enter"){
					addItem();
				if(e.target.value)
				{setCount(count + 1)}
				}
			}}  
			/>

			<ul>
				{items.map(item => {
					return (
						<li key={item.id}>{item.value} 
						<button className="boton" 
						onClick={() => {
							deteleItem(item.id); 
							{setCount(count - 1)}
						}
						}>X</button></li>
					)

				})}
			</ul>
			<div className="contador">{count} item left </div>
		</div>
	);
};

export default Home;
