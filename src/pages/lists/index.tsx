import {useEffect, useState} from 'react';
import {withAuth} from "@/hoc/ProtectedRoute";
import {mainApi} from "@/utils/MainApi";
import PopupCreateAndUpdateList from "@/components/PopupCreateList/PopupCreateAndUpdateList";
import List from "@/components/List/List";
import styles from './index.module.scss'

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

const Lists = () => {
    const [lists, setLists] = useState<ILists[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    console.log(lists)
    useEffect(() => {
        mainApi
            .getLists()
            .then((data) => setLists(data))
            .catch((err) => console.error(err))
    }, []);

    return (
        <div className={styles.lists}>
            <h1 className={styles.lists__title}>Ваши списки с подарками</h1>
            <button className={styles.lists__button} onClick={() => setIsPopupOpen(true)}></button>
            <section>
                {lists.map((list) => (
                    <List
                        setLists={setLists}
                        list={list}
                        key={list._id}
                    />))}
            </section>
            <PopupCreateAndUpdateList isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} setLists={setLists}
                                      lists={lists}/>
        </div>
    );
};

export default withAuth(Lists);
