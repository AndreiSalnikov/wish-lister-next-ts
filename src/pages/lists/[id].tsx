import {mainApi} from '@/utils/MainApi';
import styles from './id.module.scss';
import Gift from '@/components/Gift/Gift';
import Image from 'next/image';
import Error404Page from '@/pages/404';
import React from 'react';
import {GetServerSideProps} from "next";

interface IGift {
    link: string,
    name: string,
    price: number,
    reservation: object[],
    specification: string,
    _id: string
}

interface IWishListPageProps {
    wishlist: {
        date: string;
        description: string;
        gifts: IGift[];
        image: string;
        owner: string;
        title: string;
        _id: string;
        message?: string;
    };
}

const WishListPage: React.FC<IWishListPageProps> = ({wishlist}) => {
    const date = new Date(wishlist.date).toLocaleDateString('en-GB', {timeZone: 'Europe/Moscow'});

    if (wishlist.message === 'Передан некорректный id' || wishlist.message === 'Лист с подарками не найден') {
        return <Error404Page/>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.title}>{wishlist.title}</h1>
                <p className={styles.date}>Дата: {date}</p>
                <Image width={400} height={300} src={wishlist.image} alt={'картинка'} className={styles.image}/>
                <h2 className={styles.title}>Описание</h2>
                <p className={styles.description}>
                    {wishlist.description === ' ' || wishlist.description === '' ? 'Отсутствует' : wishlist.description}
                </p>
            </div>
            <div className={styles.right}>
                {wishlist?.gifts?.map((gift) => (
                    <Gift wishlistOwner={wishlist.owner} listId={wishlist._id} key={gift._id} gift={gift}/>
                ))}
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<IWishListPageProps> = async ({params}) => {
    // @ts-ignore
    const {id} = params;
    const res = await mainApi.getList(id);
    const wishlist = await res.json();

    return {
        props: {
            wishlist,
        },
    };
};

export default WishListPage;
