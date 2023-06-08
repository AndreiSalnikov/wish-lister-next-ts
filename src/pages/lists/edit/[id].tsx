import React, {useEffect, useState} from 'react';
import {mainApi} from "@/utils/MainApi";
import {useRouter} from 'next/router';
import Gift from "@/components/Gift/Gift";
import styles from './id.module.scss'
import Image from "next/image";
import {useAppSelector} from "@/hooks/redux-hooks";
import PopupCreateAndUpdateGift from "@/components/PopopAddGift/PopupCreateAndUpdateGift";
import PopupCreateAndUpdateList from "@/components/PopupCreateList/PopupCreateAndUpdateList";
import Error404Page from "@/pages/404"
import PopupShare from "@/components/PopupShare/PopupShare";
import Preloader from "@/components/Preloader/Preloader";

interface IGift {
    link: string,
    name: string,
    price: number,
    reservation: string[],
    specification: string,
    _id: string
}

interface ILists {
    date: string,
    description: string,
    gifts: IGift[],
    image: string,
    owner: {
        about: string,
        avatar: string,
        createdAt: string,
        email: string,
        name: string,
        reminder: boolean,
        reservedGifts: string[]
        __v: number,
        _id: string;
    };
    title: string,
    _id: string
}

const EditPage = () => {
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        if (id) {
            mainApi
                .getListForEdit(id).then((list) => {
                setList(list)
                setIsLoading(false);
            })
                .catch((err) => {
                    setIsLoading(false);
                    console.log(err.message)
                })
        }

    }, [id])

    const shareList = () => {
        setIsSharePopupOpen(true)
    }


    const [list, setList] = useState<ILists | undefined>(undefined);
    const [isSharePopupOpen, setIsSharePopupOpen] = useState(false)
    const [isAddGiftPopupOpen, setIsAddGiftPopupOpen] = useState(false)
    const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false)
    const date = list?.date ? new Date(list.date).toLocaleDateString('en-GB', {timeZone: 'Europe/Moscow'}) : "";
    const user = useAppSelector((state => state.user))
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        // Show loading state until data is fetched
        return <Preloader/>;
    }

    if (!list || list?.owner !== user?._id) {
        return <Error404Page/>;
    }

    return (
        <div className={styles.container}>
            <PopupCreateAndUpdateGift wishlistId={list?._id} setList={setList} isAddGiftPopupOpen={isAddGiftPopupOpen}
                                      setIsAddGiftPopupOpen={setIsAddGiftPopupOpen}/>
            <PopupCreateAndUpdateList setList={setList}
                                      list={list} isPopupOpen={isUpdatePopupOpen}
                                      setIsPopupOpen={setIsUpdatePopupOpen}/>
            <PopupShare id={String(id)} isPopupOpen={isSharePopupOpen} setIsPopupOpen={setIsSharePopupOpen}/>
            <div className={styles.left}>
                <h1 className={styles.title}>{list?.title}</h1>
                <p className={styles.date}>Дата: {date}</p>
                <Image width={400} height={300}
                       src={list?.image || 'https://static.mk.ru/upload/entities/2021/09/24/03/articles/detailPicture/ad/f0/3b/f8/aa1602c4e8a45f36cfdacc8b1b045625.jpg'}
                       alt={'картинка'}
                       className={styles.image}/>
                <h2 className={styles.title}>Описание</h2>
                <p
                    className={styles.description}>{list?.description === ' ' || list?.description === '' ? 'Отсутствует' : list?.description}</p>
                {user?._id === list?.owner &&
                  <div>
                    <button className={styles.editButton} onClick={() => setIsUpdatePopupOpen(true)}>Редактировать
                      список
                    </button>
                    <button className={styles.editButton} onClick={shareList}>Поделиться</button>
                  </div>
                }
            </div>
            <div className={styles.right}>

                {list?.gifts?.map((gift) => (
                    <Gift
                        setList={setList}
                        wishlistOwner={list?.owner._id}
                        listId={list?._id}
                        key={gift._id}
                        gift={gift}
                    />
                ))
                }
            </div>
            {user?._id === list?.owner &&

              <button className={styles.add} onClick={() => setIsAddGiftPopupOpen(true)}>Добавить подарок</button>
            }
        </div>
    );
};

export default EditPage;
