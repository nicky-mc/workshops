import SimulateLoading from "./components/SimulateLoading";
import PopoverComponent from "./components/Popover"; // Import the PopoverComponent
import Image from "next/image";

export default function Home() {
  return (
    <SimulateLoading>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <header className="mb-8">
          <div className="relative w-64 h-64 hexagon">
            {" "}
            {/* Adjust the size as needed */}
            <Image
              src="/IMG_0716.jpeg" // Path to your image in the public folder
              alt="Hexagonal Image"
              layout="fill"
              objectFit="cover"
              className="hexagon-image"
            />
          </div>
        </header>
        <main className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Welcome to My Website</h1>
          <p className="text-lg text-center max-w-md">
            This is a simple and stylish home page.
          </p>
          <div className="flex gap-4 mt-4">
            <PopoverComponent />
            <a
              className="rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors px-4 py-2"
              href="#"
            >
              Learn More
            </a>
          </div>
        </main>
        <footer className="mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mortoza-Cowles All rights
            reserved.
          </p>
        </footer>
      </div>
    </SimulateLoading>
  );
}
