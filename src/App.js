import axios from "axios";
import { useCallback, useState } from "react";

export default function App() {
  const [result, setResult] = useState();

  const callLambda = useCallback(async () => {
    const res = await axios.get("/api");
    setResult(JSON.stringify(res.data));
  }, []);

  return (
    <div className="m-10 flex flex-col gap-3">
      <article className="prose">
        <h1>Cloud Canvas </h1>
        <p>Static react app, deployed on cloud front</p>
      </article>
      <div>
        <button className="btn" onClick={callLambda}>
          Call Lambda
        </button>
        <article className="prose">
          <p>{result}</p>
        </article>
      </div>
    </div>
  );
}
