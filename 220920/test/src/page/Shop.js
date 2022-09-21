import React from 'react'
import {Header,Body} from '../com'
const Shop = (islogin) => {
  return (
    <div>
        <Header title="상점페이지"/>
        <Body islogin={islogin} path="/detail/1/10/s" name="1번 상품으로 이동"/>
        <Body islogin={islogin} path="/detail/2/20/바지" name="2번 상품으로 이동"/>
        <Body islogin={islogin} path="/detail/3/14/장갑" name="3번 상품으로 이동"/>
        <Body islogin={islogin} path="/detail/4/15/모자" name="4번 상품으로 이동"/>
        <Body islogin={islogin} path="/detail/5/16/몰라" name="5번 상품으로 이동"/>
    </div>
  )
}

export default Shop