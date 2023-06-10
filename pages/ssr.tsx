import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです。
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getServerSidePropsはページへのリクエストがある度に実行される
export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  console.log(context.resolvedUrl);
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} にこのページのgetServerSidePropsが実行されました`;
  console.log(message);
  const res = await fetch(`${process.env.LOCAL_URL}/api/hello`);
  const result = await res.json();
  console.log(result);

  return {
    props: {
      message,
    },
  };
};

export default SSR;
