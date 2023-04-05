export default function List(props) {
	const { member } = props;

	return (
		<div>
			{Object.entries(member).map(([key, value]) => (
				<ul key={key}>
					<li>
						{key}: {value}
					</li>
				</ul>
			))}
		</div>
	);
}
