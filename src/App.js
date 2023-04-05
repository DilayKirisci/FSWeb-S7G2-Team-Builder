import "./App.css";
import { useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
	const initialMemberState = {
		names: "",
		email: "",
		rol: "",
	};
	const [member, setMember] = useState([]);

	function handleFormSubmit(e) {
		e.preventDefault();
		// do something with the member data
		setMember(initialMemberState);
	}

	function handleNameChange(e) {
		setMember({
			...member,
			names: e.target.value,
		});
	}

	function handleEmailChange(e) {
		setMember({
			...member,
			email: e.target.value,
		});
	}

	function handleRolChange(e) {
		setMember({
			...member,
			rol: e.target.value,
		});
	}

	return (
		<div className="App">
			<h1>Form</h1>
			<Form
				onFormSubmit={handleFormSubmit}
				onEmailChange={handleEmailChange}
				onNameChange={handleNameChange}
				onRolChange={handleRolChange}
				member={member}
			/>
			<List member={member} />
		</div>
	);
}

export default App;
