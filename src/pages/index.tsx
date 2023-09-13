import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  return (
    <div>
      <h2 className="text-blue-600/100 text-center border border-blue-700 mx-6 sm:mx-16 dark:bg-black" >Yay! Welcome to umi!</h2>
      
      <button className='border border-green-700 px-2 py-1 rounded-md bg-green-300 hover:bg-green-400 active:bg-green-500 disabled:bg-gray-300 disabled:border-gray-700'>Test</button>

      <button className='border border-green-700 px-2 py-1 rounded-md bg-green-300 hover:bg-green-400 active:bg-green-500 disabled:bg-gray-300 disabled:border-gray-500 disabled:text-gray-400 hover:transition-all hover:delay-300' disabled>Test</button>
    </div>
  );
}
