import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-4xl md:text-7xl font-bold">404 - Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <button className="px-8 py-3 border-2 border-black font-semibold text-xl rounded-xl">Return Home</button>
      </Link>
    </div>
  );
}
