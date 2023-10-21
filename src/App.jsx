import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className='mt-3 text-3xl text-center  text-cyan-600'>Review Cards</h1>
		</>
	);
}

export default App;
