import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/139259/pexels-photo-139259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="mx-auto max-w-7xl py-16 px-6 text-center sm:py-24 lg:px-8 lg:py-48">
          <p className="text-base font-semibold text-black text-opacity-50">
            404
          </p>
          <h1 className="mt-2 text-4xl font-bold text-orange-600 tracking-tight text-white sm:text-5xl">
            Uh oh! I think you’re lost.
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            It looks like the page you’re looking for doesn't exist.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:hover:bg-orange-500"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
