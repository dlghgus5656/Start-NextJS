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

export default function Home({ results }) {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })(); // (async)() - IIFE (즉시 실행 함수 표현, Immediately Invoked Function Expression) 이라고 찾았습니다.
  // 첫번째 괄호는 익명함수를 감싸 실행 될 함수가 전역 스코프에 불필요한 변수를 추가하거나,
  // IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이라고 설명되어 있습니다.
  // 두번째 괄호는 즉시 실행 함수를 생상하는 괄호이고,
  // 이를 통해 자바스크립트 엔진은 함수를 즉시 해석해서 실행한다고 설명되어 있습니다.;
  // }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {/* {movies?.map((movie) => ( */}
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 10px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// ex) loding화면을 보여주기 싫을 때 사용
// getServerSideProps는 프론트에 보이지 않고 백엔드에서만 작동한다.
// 따라서 API key를 넣을 수도 있고 데이터를 가져오거나, 원하는건 다 할 수 있다.
// 완전한 서버 사이드 렌더링으로 작동한다. 유저는 백엔드에서 처리하기 전까지 화면에서 아무것도 보지못한다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
