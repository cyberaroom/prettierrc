import React from "react"

const RandomPage: React.FC = () => {
	return (
		<div className='min-h-screen bg-gray-100 flex items-center justify-center'>
			<div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
				<h1 className='text-2xl font-bold text-gray-800 mb-4'>Random Page</h1>
				<p className='text-gray-600 mb-6'>This is a randomly generated page using TSX and TailwindCSS.</p>
				<button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
					Click Me
				</button>
				<div className='mt-6'>
					<input
						className=' border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-50 border'
						placeholder='Enter text here'
						type='text'
					/>
				</div>
				<div className='mt-4'>
					<select className='border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 '>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
					</select>
				</div>
				<div className='mt-4'>
					<textarea
						placeholder='Enter your message here'
						className='border border-gray-300 rounded px-3 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500'
					></textarea>
				</div>
			</div>
		</div>
	)
}

export default RandomPage
