import { useOptionalUser } from "~/utils";

export default function Index() {
  return (
    <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
      <p className="font-sans font-normal text-white">
        Testing if this worked. I bet not
      </p>
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
