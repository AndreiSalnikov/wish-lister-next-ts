import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {mainApi} from "@/utils/MainApi";
import {useAppDispatch, useAppSelector} from "@/hooks/redux-hooks";
import {setUser} from "@/store/slices/userSlice";

export const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const user = useAppSelector(((state) => state.user));
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Fetch the user if it hasn't been fetched yet
      if (!user) {
        mainApi
          .getMe()
          .then((data) => dispatch(setUser(data)))
          .catch((err) => console.error(err))
          .finally(() => setIsLoading(false));
      } else {
        setIsLoading(false);
      }
    }, [user]);

    // If user is not authenticated, redirect to login page
    if (!user && !isLoading) {
      if (typeof window !== "undefined") {
        router.replace("/");
      }
      return null;
    }

    // If user is authenticated or still loading, render the wrapped component
    return isLoading ? null : <WrappedComponent {...props} />;
  };
};
