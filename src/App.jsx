import { useState } from "react";
import people from "./data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiSolidQuoteRight } from "react-icons/bi";

function App() {
	const [index, setIndex] = useState(0);
	const [animation, setAnimation] = useState("");

	const nextSlide = () => {
		setTimeout(() => {
			setAnimation("animate-LeftWobble");
			setIndex((i) => {
				const newI = (i + 1) % people.length;
				return newI;
			});
		});
		setAnimation("");
	};
	const prevSlide = () => {
		setTimeout(() => {
			setAnimation("animate-RightWobble");
			setIndex((i) => {
				const newI = (i - 1 + people.length) % people.length;
				return newI;
			});
		});
		setAnimation("");
	};
	const randomReview = () => {
		let randomNumber = Math.floor(Math.random() * people.length);
		if (randomNumber === index) {
			randomNumber = index + 1;
		}
		const newI = randomNumber % people.length;
		setIndex(newI);
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
						<a
							onClick={randomReview}
							href='#_'
							class='relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group'>
							<span class='absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease'></span>
							<span class='absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease'>
								<span class='absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md'></span>
								<span class='absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md'></span>
							</span>
							<span class='relative text-white'>Random Review</span>
						</a>
						<button
							onClick={nextSlide}
							className=' bg-transparent text-2xl font-semibold border-transparent border-[#A7D397] hover:bg-[#A7D397] hover:text-white py-2 px-2 rounded-full hover:shadow-xl hover:animate-wobble'>
							<BsArrowRight />
						</button>
					</div>
				</article>
			</main>
		</>
	);
}

export default App;
