import Gift from "@/components/Gift/Gift";
import styles from "./index.module.scss"
import {useAppSelector} from "@/hooks/redux-hooks";

const Reservation = () => {
    const user = useAppSelector((state) => state.user);

    return (

        <div className={styles.reservation}>
            <h1 className={styles.reservation__title}> Забронированные подарки</h1>
            <div className={styles.reservation__gifts}>
                {user?.reservedGifts?.map((gift) => (

                    <Gift
                        // wishlistOwner={wishlist.owner}
                        // listId={wishlist._id}
                        // @ts-ignore
                        key={gift._id}
                        gift={gift}
                    />
                ))}

            </div>

        </div>

    );
};

export default Reservation;
