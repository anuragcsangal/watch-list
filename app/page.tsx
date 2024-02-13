import AuthForm from "./components/AuthForm";
import Watch from "./components/Watch";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000] text-gray-300 flex justify-center items-center">
      <div className="container mx-auto p-6 sm:p-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Welcome to Watch List</h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Your personal space to curate and manage a wishlist of your favourite watches.<br />
          Sign in to create, view, edit and delete watches from your wishlist.
        </p>
        <div className="bg-zinc-500 p-6 rounded-lg">
          <AuthForm />
        </div>
      </div>
    </div>

  );
}
