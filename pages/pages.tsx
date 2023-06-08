import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const pages = () => {
    const router = useRouter() // useRouterの使用

    // 下記コメントアウトを外すと/ssgに遷移する
    // useEffect(() => {
    //     router.push('/ssg');
    // }, [])
  return (
    <div>pages</div>
  )
}

export default pages