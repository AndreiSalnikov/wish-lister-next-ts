import React, {useState} from 'react';
import styles from './PopupEditAvatar.module.scss'
import {useFormValidation} from "@/hooks/useFormValidation";
import {mainApi} from "@/utils/MainApi";
import {useAppDispatch} from "@/hooks/redux-hooks";
import {setUser} from "@/store/slices/userSlice";

interface IPopupEditAvatarProps {
    isPopupOpen: boolean,
    setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PopupEditAvatar: React.FC<IPopupEditAvatarProps> = ({isPopupOpen, setIsPopupOpen}) => {
    const [isErrorSubmit, setIsErrorSubmit] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const {
        reset,
        register,
        validateLink,
        handleSubmit,
        errors,
        isValid,
    } = useFormValidation();

    const onSubmit = async (data: {avatar: string}, e:any) => {
        e.preventDefault();
        setIsErrorSubmit('')
        try {
            setIsLoading(true)
            const avatarUser = await mainApi.updateAvatar(data)
            dispatch(setUser(avatarUser))
            setIsLoading(false)
            setIsPopupOpen(false)
            reset()
        } catch (err:any) {
            setIsLoading(false)
            setIsErrorSubmit(err)
        }
    }

    return (
        <div
            className={isPopupOpen ? `${styles.avatar} ${styles.avatar_opened}` : `${styles.avatar}`}>
            <div className={styles.avatar__container}>
                <button className={styles.avatar__close} onClick={() => {
                    reset()
                    setIsPopupOpen(!isPopupOpen)
                }

                }></button>
                <h3 className={styles.avatar__title}>Обновить аватар</h3>
                <form className={styles.avatar__form} onSubmit={handleSubmit(onSubmit)}>
                    <input className={styles.avatar__input} required {...register("avatar", validateLink)}
                           placeholder="Ссылка на аватар"/>
                    <span
                        className={errors.avatar ? `${styles.avatar__error} ${styles.avatar__error_active}` :
                            `${styles.avatar__error}`}>{String(errors?.avatar?.message || "")}
             </span>
                    <button disabled={!isValid || isLoading}
                            className={!isValid || isLoading ?
                                `${styles.avatar__updateButton}`
                                : `${styles.avatar__updateButton}
                   ${styles.avatar__updateButton_active}`}>
                        Сохранить
                    </button>
                </form>
                <div
                    className={isErrorSubmit ? `${styles.avatar__errorSubmit} ${styles.avatar__errorSubmit_active}` : `${styles.avatar__errorSubmit}`}>{`Во время выполнения запроса произошла ошибка, попробуйте позднее`}
                </div>
            </div>
        </div>
    );
};

export default PopupEditAvatar;
