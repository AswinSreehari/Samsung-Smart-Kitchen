// NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Oops! Page Not Found
      </h2>
      <p className="max-w-md text-center text-gray-600 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block rounded-full bg-green-500 px-7 py-3 text-lg font-semibold text-white shadow hover:bg-green-600 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
