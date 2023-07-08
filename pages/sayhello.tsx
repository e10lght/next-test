import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";

type ResponseHello = {
  name: string;
};

const sayhello = (props: ResponseHello) => {
  const { name } = props;
  const [data, setData] = useState("");
  useEffect(() => {
    setData(name);
    // fetch("/api/hello")
    //   .then((res) => res.json())
    //   .then((result: ResponseHello) => {
    //     console.log(result);
    //     setData(result.name);
    //   });
  }, []);
  return <div>sayhello, {data}</div>;
};

export const getStaticProps: GetStaticProps<ResponseHello> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const result: ResponseHello = await res.json();
  const name = result.name;

  return {
    props: { name },
  };
};

export default sayhello;
