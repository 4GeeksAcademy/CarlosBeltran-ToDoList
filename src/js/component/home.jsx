import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {

	let [task, setTask] = useState('')
	let [handleTask, setHandleTask] = useState([])

	const handleEnterKey = (e) =>{
		if (e.key === "Enter" && task.trim() != ''){
			setHandleTask([...handleTask.concat([task])]);
			setTask('');
		}
	};
	const deleteTask = (index) =>{
		setHandleTask( handleTask.filter((t, i) => index !== i ));
	}

	return (
		<div className="text-center">
			<h1>To do List</h1>
			<ul>
				<li>
					<input 
					type="text"
					onChange={(e)=>setTask(e.target.value) }
					value={task}
					onKeyDown={ handleEnterKey }
					placeholder="Escribe aquí tu nueva tarea"
					/>
				</li>
				{ handleTask.map((item, index) => 	<li> { item + " "}  
					<i className="fas fa-trash-alt" onClick={ ()=> deleteTask(index) }> 
					</i> 
				</li> )}
				
			</ul>
		</div>
	);
};

export default Home;
