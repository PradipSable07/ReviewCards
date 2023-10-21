import { useState } from "react";
<<<<<<< HEAD

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className='mt-3 text-3xl text-center  text-cyan-600'>Review Cards</h1>
=======
import people from "./data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiSolidQuoteRight } from "react-icons/bi";

function App() {
	const [index, setIndex] = useState(0);
	const [animation, setAnimation] = useState("");
	people[index];
	const nextSlide = () => {
		setIndex(index === people.length - 1 ? 0 : index + 1);
	};
	const prevSlide = () => {
		setAnimation("animate-wobble");
		setIndex(index === 0 ? people.length - 1 : index - 1);
	};

	const { name, image, job, text } = people[index];

	return (
		<>
			<main className='min-h-screen grid justify-center items-center'>
				<article
					className={` w-11/12 max-w-[475px] bg-[#F5F7F8] text-center px-6 py-8  drop-shadow-md hover:scale-105 hover:drop-shadow-xl duration-500 ${animation}`}>
					<div className='relative w-36 h-36 rounded-full m-auto mb-6 before:content before:w-full before:h-full before:absolute before:bg-[#495E57] before:rounded-full before:-top-1 before:-right-[0.3rem]  '>
						<img
							src={image}
							alt={name}
							className='w-full h-full rounded-full object-cover relative'
						/>
						<span className='absolute top-1 left-1 transform w-10 h-10 rounded-full flex items-center justify-center bg-[#495E57] text-white '>
							<BiSolidQuoteRight />
						</span>
					</div>
					<h4 className='text-2xl font-bold mb-2'>{name}</h4>
					<p className='mb-3 uppercase text-sm font-medium text-[#A7D397] '>
						{job}
					</p>
					<p className='mb-3 leading-normal   '>{text}</p>
					<div className='mb-4 flex items-center  justify-between'>
						<button
							onClick={prevSlide}
							className=' bg-transparent mx-4 text-2xl font-semibold border-transparent border-[#A7D397] hover:bg-[#A7D397] hover:text-white py-2 px-2 rounded-full hover:shadow-xl hover:animate-wobble '>
							<BsArrowLeft />
						</button>
						<button
							onClick={nextSlide}
							className=' bg-transparent text-2xl font-semibold border-transparent border-[#A7D397] hover:bg-[#A7D397] hover:text-white py-2 px-2 rounded-full hover:shadow-xl hover:animate-wobble'>
							<BsArrowRight />
						</button>
					</div>
				</article>
			</main>
>>>>>>> 757aeaa (done all implentation)
		</>
	);
}

export default App;
