export default function NotFound() {
  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=https://sugeevan.com" />
      </head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white font-sans">
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-16 h-16 border-4 border-gray-800 rounded-full"></div>
          <div className="absolute w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <h1 className="text-xl font-medium tracking-wide text-gray-300">
          Redirecting to sugeevan.com...
        </h1>
      </div>
    </>
  );
}
