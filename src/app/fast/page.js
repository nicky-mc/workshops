import { Suspense } from "react";
import { SlowComponent } from "../components/SlowComponent";
import SimulateLoading from "../components/SimulateLoading"; // Import the SimulateLoading component

export default function FastPage() {
  return (
    <SimulateLoading>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl md:text-6xl text-center mb-4">Fast page</h2>
        <Suspense
          fallback={
            <p className="text-green-400 text-4xl md:text-6xl text-center">
              Loading...
            </p>
          }
        >
          <SlowComponent />
        </Suspense>
      </div>
    </SimulateLoading>
  );
}
