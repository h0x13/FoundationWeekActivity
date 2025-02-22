import { Link } from "react-router-dom";

const Poster = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Poster
        </h1>
        <Link
          to="/"
          className="mt-8 bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          Back to Main
        </Link>
      </div>
    </div>
  );
};

export default Poster;

