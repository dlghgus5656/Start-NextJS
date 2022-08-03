// ! Dynamic Routes
// Next.js에서는 페이지에 대괄호([param])를 추가하여 Dynamic Route를 생성할 수 있습니다.
// /movies/1, /movies/abc 등과 같은 모든 경로는 pages/movies/[id].js와 일치합니다.

import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return "detail";
}
