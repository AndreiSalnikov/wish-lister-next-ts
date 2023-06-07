import styles from './PopupShare.module.scss'
import {useFormValidation} from "@/hooks/useFormValidation";
import React from "react";

interface IPopupShareProps {
    id: string,
    isPopupOpen: boolean,
    setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PopupShare: React.FC<IPopupShareProps> = ({id, isPopupOpen, setIsPopupOpen}) => {
    const {
        register,
        handleSubmit,
    } = useFormValidation({link: `${window.location.protocol}//${window.location.host}/lists/${id}`});

    const onSubmit = (data: {link: string}, e: any) => {
        e.preventDefault();
        navigator.clipboard.writeText(data.link).catch((error) => {
            console.error('Failed to copy text:', error);
        });
        setIsPopupOpen(false)

    }

    return (
        <div
            className={isPopupOpen ? `${styles.share} ${styles.share_opened}` : `${styles.share}`}>
            <div className={styles.share__container}>
                <button className={styles.share__close} onClick={() => {
                    setIsPopupOpen(!isPopupOpen)
                }
                }></button>
                <h3 className={styles.share__title}>Ваша ссылка</h3>
                <form className={styles.share__form} onSubmit={handleSubmit(onSubmit)}>
                    <input className={styles.share__input}
                           {...register("link")}/>
                    <button className={`${styles.share__updateButton}
                   ${styles.share__updateButton_active}`}>
                        Скопировать
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PopupShare;
