import React, {ReactNode, useEffect} from 'react';
import {useRouter} from "next/router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {mainApi} from "@/utils/MainApi";
import {setUser} from "@/store/slices/userSlice";
import {useAppDispatch} from "@/hooks/redux-hooks";

  interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const location = useRouter()
  const dispatch = useAppDispatch();



  useEffect(() => {
    mainApi
      .getMe()
      .then((data) => dispatch(setUser(data)))
      .catch((err) => console.log(err.message))

  }, [dispatch])


  return (
    <>
      {location.pathname !== "/404" &&
        <Header/>
      }
      {children}
      {location.pathname === "/" &&
        <Footer/>}
    </>
  );
};

export default Layout;
