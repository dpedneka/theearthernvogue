import Loader from "@/components/loader";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <Loader />
      <h1 className="font-bold text-xl">Stay Tuned!! We are Coming Soon!!</h1>
    </div>
  );
}
