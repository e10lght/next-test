import Image from "next/image";
import React from "react";
import ImageFile from "../public/images/test2.jpeg";
import ImageFile3 from "../public/images/test3.jpeg";
import ImageFile4 from "../public/images/test4.jpeg";
import ImageFile5 from "../public/images/test5.jpeg";
import ImageFile6 from "../public/images/test6.jpeg";
import ImageFile7 from "../public/images/test7.jpeg";

const image = () => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <img src="/images/test2.jpeg" alt="" width={180} height={37} />
      <Image src={ImageFile} alt="sample" width={180} height={130} placeholder="blur" />
      <Image src={ImageFile3} alt="sample" width={180} height={167} placeholder="blur" />
      <Image src={ImageFile4} alt="sample" width={180} height={167} placeholder="blur" />
      <Image src={ImageFile5} alt="sample" width={180} height={167} placeholder="blur" />
      <Image src={ImageFile6} alt="sample" width={180} height={167} placeholder="blur" />
      <Image src={ImageFile7} alt="sample" width={180} height={167} placeholder="blur" />
    </div>
  );
};

export default image;
