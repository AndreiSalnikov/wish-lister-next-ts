import React, {useState} from 'react';
import styles from './Welcome.module.scss'
import PopupRegisterLogin from "@/components/PopupRegisterLogin/PopupRegisterLogin";
import {useRouter} from "next/router";
import {useAppSelector} from "@/hooks/redux-hooks";

const Welcome = () => {
  const user = useAppSelector((state) => state.user);
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const router = useRouter();

  return (

    <section className={styles.welcome}>
      <PopupRegisterLogin popupIsOpen={popupIsOpen} setPopupIsOpen={setPopupIsOpen}/>
      <h1 className={styles.welcome__title}>Создайте свой идеальный список подарков</h1>
      <h2 className={styles.welcome__subtitle}>Будь то день рождения, свадьба или праздник — мы поможем!</h2>
      <span className={styles.welcome__span} onClick={() => {
        user ? router.push('/lists') : setPopupIsOpen(!popupIsOpen)
      }}>Создать свой первый список</span>
    </section>
  );
};

export default Welcome;
