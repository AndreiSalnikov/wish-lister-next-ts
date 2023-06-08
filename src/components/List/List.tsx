import React from 'react';
import Image from "next/image";
import styles from "./List.module.scss"
import {mainApi} from "@/utils/MainApi";
import {useRouter} from "next/router";

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


interface IListProps {
    list: ILists,
    setLists: React.Dispatch<React.SetStateAction<ILists[]>> | undefined;
}

const List: React.FC<IListProps> = ({list, setLists}) => {
    const { date, image, title, description, _id } = list;
    const dateFormatted = new Date(date).toLocaleDateString('en-GB', {timeZone: 'Europe/Moscow'});
    const router = useRouter()
    const openList = () => {
        router.push(`${router.pathname}/edit/${list._id}`)
    }

    const deleteList = async (e: any) => {
        e.stopPropagation();
        try {
            await mainApi.deleteList(_id)
            // @ts-ignore
          setLists((state) => state.filter((l) => {
                // @ts-ignore
            return l._id !== list._id
            }))
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    return (
        <div className={styles.list} onClick={openList}>
            <Image className={styles.list__img} src={image} width={200} height={200} alt='картинка'/>
            <div className={styles.list__box}>
                <div>
                    <h2 className={styles.list__title}>{title}</h2>
                    <p className={styles.list__date}>{dateFormatted}</p>
                    <p className={styles.list__text}>{description === ' ' ? 'Описание отсустствует' : list.description}</p>
                </div>
                <svg className={styles.list__close} onClick={deleteList} xmlns="http://www.w3.org/2000/svg" width="16"
                     height="16"
                     fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </div>
        </div>
    );

};

export default List;
