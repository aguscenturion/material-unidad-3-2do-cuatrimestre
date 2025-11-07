import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const HomePage = () => {
  const { state, data, isLoading, getFetch } = useFetch();

  const { count, handleIncrement, handleDecrement } = useCounter(1);

  const url = `https://thesimpsonsapi.com/api/characters/${count}`;

  useEffect(() => {
    getFetch(url);
  }, [url]);

  return (
    <div
      className="flex flex-col items-center justify-center h-[95vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/public/background.jpg')" }}
    >
      <div className=" bg-white rounded-lg border border-gray-300 shadow-sm text-center transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-yellow-200 hover:border-yellow-400 hover:bg-yellow-50 p-10">
        <h1 className="text-3xl font-bold mb-6">Los simpsons API</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <img
              className="w-32 h-32 mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-yellow-300 group-hover:scale-110 group-hover:rotate-2"
              src={`https://cdn.thesimpsonsapi.com/500${data?.portrait_path}`}
              alt={data?.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                #{data?.id} - {data?.name}
              </div>
            </div>
            <div className="p-6 pt-0 space-y-2">
              <div className="flex justify-center gap-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs ">
                  Age: {data?.age}
                </div>
              </div>
              <div className="text-xs text-gray-500 italic transition-all duration-300 group-hover:text-yellow-600 group-hover:font-medium"></div>
            </div>
          </>
        )}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => handleDecrement(1)}
            disabled={isLoading}
            className={
              isLoading
                ? "bg-gray-400 p-2 rounded-2xl border text-white cursor-not-allowed"
                : "bg-blue-500 p-2 rounded-2xl border text-white"
            }
          >
            Anterior
          </button>
          <button
            onClick={() => handleIncrement(1)}
            disabled={isLoading}
            className={
              isLoading
                ? "bg-gray-400 p-2 rounded-2xl border text-white cursor-not-allowed"
                : "bg-blue-500 p-2 rounded-2xl border text-white"
            }
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
