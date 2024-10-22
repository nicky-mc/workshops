import SimulateLoading from "../components/SimulateLoading";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <p className="text-green-400 text-4xl md:text-6xl text-center">
          Loading your page...
        </p>
      </div>
      <div>
        <SimulateLoading />
      </div>
    </div>
  );
}
