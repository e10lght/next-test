import React from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

// ページコンポーネントのprops型定義
type SSGProps = {
  message: string;
};

const Ssg: NextPage<SSGProps> = (props: SSGProps) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に作成されたページです</p>
        <p>{message}</p>
        <p>.envの値：{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  );
};

// getStaticPropsはビルド時に実行される
// GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (params) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);

  return {
    props: { message },
  };
};

export default Ssg;
