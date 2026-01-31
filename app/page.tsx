import Problem1 from "@/components/problem1/Problem1";

export default function Home() {
  return (
    <div className="flex flex-col justify-center p-10 gap-6">
      <h1 className="text-center font-bold text-4xl">
        99Tech Frontend Code Challenge
      </h1>
      <Problem1 />
    </div>
  );
}
