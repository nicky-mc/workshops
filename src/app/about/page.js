import Image from "next/image";
import { FaInfoCircle, FaAddressCard, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="mb-8">
        <div className="relative w-64 h-64">
          {/* Adjust the size as needed */}
          <Image
            src="/plan.jpeg" // Path to your image in the public folder
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg" // Optional: Add some styling to the image
          />
        </div>
      </header>
      <main className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg text-center max-w-md">
          This page uses react-icons to display various icons.
        </p>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <FaInfoCircle className="text-blue-600" />
            <span>Information</span>
          </div>
          <div className="flex items-center gap-2">
            <FaAddressCard className="text-green-600" />
            <span>Contact</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-red-600" />
            <span>Email</span>
          </div>
        </div>
      </main>
      <footer className="mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mortoza-Cowles All rights reserved.
        </p>
      </footer>
    </div>
  );
}
