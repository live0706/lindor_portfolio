import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-full pt-16 pb-16">
      <h1 className="text-5xl font-bold mb-4 font-['Inter']">Innovative Frontend Solutions</h1>
      <p className="text-lg max-w-2xl mb-8">
        Specializing in responsive web applications with a focus on clean design and interactive user experiences. I build precise, solution-oriented applications with React and modern APIs.
      </p>
      <Link to="/projects" style={{backgroundColor: '#007BFF'}} className="text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-['Inter']">
        View My Work
      </Link>
    </div>
  );
};

export default HomePage;