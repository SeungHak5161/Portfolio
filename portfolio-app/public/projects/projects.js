export const projects = [
  {
    title: "Portfolio-Page",
    image: "/projects/portfolio.gif",
    description: "제 소개를 위한 포트폴리오 페이지입니다.",
    detail: [
      "React 기반으로 페이지를 제작했습니다.",
      "여러 효과들을 JS를 이용해 직접 구현했습니다.",
      "Pageable, swiper 등을 사용했습니다.",
    ],
    github:
      "https://github.com/SeungHak5161/Portfolio/tree/master/portfolio-app",
    demo: "https://portfolio-seunghak.vercel.app/",
  },
  {
    title: "Favorite-Musicians",
    image: "/projects/musicians.gif",
    description: "Next.js 핵심개념들을 적용한 가수 소개 사이트입니다.",
    detail: [
      "page기반 Routing(+fallback을 이용한 Loading 처리)",
      "SSG(getStaticPaths, getStaticProps)",
      "SEO, 캐싱, Image optimize, open graph 등",
      "swiper : main page slider에 사용",
      "gray-matter : YAML 형식 해석",
      "remark : markdown 파일 html로 변환",
    ],
    github:
      "https://github.com/SeungHak5161/JS_Study/tree/master/JS/todo-list-react",
    demo: "https://favorite-musician.vercel.app/",
  },
  {
    title: "TodoList",
    image: "/projects/todoList.gif",
    description: "프로그래머스 스터디 때 제작한 TodoList입니다.",
    detail: [
      "VanilaJS로 제작해 React로 리팩토링 했습니다.",
      "데이터 무결성을 위한 예외처리에 신경썼습니다.",
      "API를 사용함에 따라 비동기 처리를 구현했습니다.",
    ],
    github: "github.com/seunghak5161/blabla",
    demo: "demo.netlify.com",
  },
  {
    title: "Starbucks-Clone",
    image: "/projects/starbucks.gif",
    description: "HTML, CSS 학습용 스타벅스 클론 사이트입니다.",
    detail: [
      "swiper, youtube API 등을 사용했습니다.",
      "각종 애니메이션 최적화를 위해 lodash와 throttle을 적용했습니다.",
      "차후에 scss로 리팩토링 했습니다.",
    ],
    github: "https://github.com/SeungHak5161/webStudy/tree/master/Starbucks",
    demo: "https://starbucks-clone-seunghak.netlify.app/",
  },
  {
    title: "프로젝트 정리중",
    // image: "/projects/musicians.gif",
    description: "프로젝트 정리중입니다.",
    detail: [],
    github: "",
    demo: "",
  },
];
