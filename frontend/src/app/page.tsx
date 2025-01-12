import Loader from "@/components/loader";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-8 ">
      <Loader />
      <div className="stay-tuned-message text-center">
        <p>Stay Tuned</p>
        <span>Something delightful is being served!</span>
      </div>
    </div>
  );
}
