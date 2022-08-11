// ! Dynamic Routes
// Next.js에서는 페이지에 대괄호([param])를 추가하여 Dynamic Route를 생성할 수 있습니다.
// /movies/1, /movies/abc 등과 같은 모든 경로는 pages/movies/[id].js와 일치합니다.

import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  // 왜 const [title, id] = params || [];에서  || [] 를 추가해주면 되는건지.
  // 기본적으로 미리 렌더링이 되기때문에 먼저 html 파일이 내려온다.
  // 이때 문제가 아직 js들이 다운로드가 안됐기 때문에 useRouter()로 정보를 제대로 가져오질 못하는 상태
  // 그렇기 때문에 초기에는 빈 배열을 추가해줘서 오류가 발생하지 않도록 해주고,
  // js가 내려가서 다시 렌더링하게되면 그 때는 빈 배열이 아닌
  // router.query.params에서 값을 가져와서 뿌려주는 방식이다.
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// 컴포넌트 내부에서 router를 사용하면 router는 프론트에서만(클라이언트 사이드에서만) 실행 된다.
// 만약 URL에 들어있는 영화제목을 사용해서 구글 SEO에 최적화 하고, 유저가 접속하기 전에 탭 제목을 바꾸고 싶고,
// 그냥 기본적으로 페이지를 pre-render하고 싶다면 sever-side에서 정보를 얻기 위한 getServerSideProps를 실행하면 된다.

// 여기서는 단순히 getServerSideProps를 통해서 영화 제목을 가져온다.
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
