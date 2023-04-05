export default function Form(props) {
	return (
		<form className="form">
			<label>
				İsim:
				<input
					id="name"
					onChange={props.onNameChange}
					value={props.member.names}
					type="text"
				/>
			</label>

			<label>
				Email:
				<input
					id="email"
					onChange={props.onEmailChange}
					value={props.member.email}
					type="email"
				/>
			</label>

			<label>
				Rol:
				<input
					id="rol"
					onChange={props.onRolChange}
					value={props.member.rol}
					type="text"
				/>
			</label>

			<button type="submit" onClick={props.onFormSubmit}>
				Submit
			</button>
		</form>
	);
}
