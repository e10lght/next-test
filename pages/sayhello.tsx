import React, { useEffect, useState } from "react";

type ResponseHello = {
  name: string;
};

const sayhello = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((result: ResponseHello) => {
        console.log(result);
        setData(result.name);
      });
  }, []);
  return <div>sayhello, {data}</div>;
};

export default sayhello;
