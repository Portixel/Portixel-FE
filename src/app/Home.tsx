import { Suspense } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Suspense fallback={<></>}>
      <main className="home">
        <Link to="/onboard">
          <img
            alt="Portixel"
            src="/icon/logo.svg"
            height={300}
            width={300}
            className=""
          />
        </Link>
      </main>
    </Suspense>
  );
}
