import { NextPageContext } from "next";

type PageProps = {
  stars: number;
};

function Page({ stars }: PageProps) {
  return (
    <>
      <div>Next stars: {stars}</div>
      <p>{String(new Date())}</p>
    </>
  );
}

Page.getInitialProps = async ({ req }: NextPageContext) => {
  console.log(new Date());
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Page;
