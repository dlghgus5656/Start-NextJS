// import Head from "next/head";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// export default function Home() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <h1>Hello {counter}</h1>
//       <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
//     </div>
//   );
// }

const API_KEY = "xx";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })(); // (async)() - IIFE (즉시 실행 함수 표현, Immediately Invoked Function Expression) 이라고 찾았습니다.
    // 첫번째 괄호는 익명함수를 감싸 실행 될 함수가 전역 스코프에 불필요한 변수를 추가하거나,
    // IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이라고 설명되어 있습니다.
    // 두번째 괄호는 즉시 실행 함수를 생상하는 괄호이고,
    // 이를 통해 자바스크립트 엔진은 함수를 즉시 해석해서 실행한다고 설명되어 있습니다.;
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
