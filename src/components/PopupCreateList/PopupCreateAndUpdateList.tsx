import React, {useState} from 'react';
import {Controller} from "react-hook-form";
import {useFormValidation} from "@/hooks/useFormValidation";
import styles from './PopupCreateList.module.scss'
import {mainApi} from "@/utils/MainApi";
import Preloader from "@/components/Preloader/Preloader";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import {useRouter} from "next/router";

registerLocale('ru', ru)
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

interface IPopupCreateAndUpdateListProps {
  isPopupOpen: boolean,
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>,
  list?: ILists,
  setList?: React.Dispatch<React.SetStateAction<ILists | undefined>>,
  lists?: object[],
  setLists?: React.Dispatch<React.SetStateAction<ILists[]>>

}

interface DateInputProps {
  control: any;
  name: string;
  rules: any;
  classname: string;
}

const PopupCreateAndUpdateList: React.FC<IPopupCreateAndUpdateListProps> = ({list, setList, lists, setLists, isPopupOpen, setIsPopupOpen}) => {
  const [isErrorSubmit, setIsErrorSubmit] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
    const {
    validateLinkCreateList,
    control,
    validateDate,
    validateCreate,
    setValue,
    reset,
    register,
    handleSubmit,
    errors,
    isValid,
  } = useFormValidation({
    title: list?.title,
   // date: wishlist?.date,
    image: list?.image,
    description: list?.description
  });
  const DateInput = ({control, name, rules, classname}: DateInputProps) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field}) => (
          <DatePicker
            locale="ru"
            dateFormat="dd/MM/yyyy"
            autoComplete="off"
            className={classname}
            placeholderText='Дата'
            selected={field.value ? new Date(field.value) : null}
            onChange={(date) => field.onChange(date)}
          />
        )}
      />
    );
  };

  const onSubmit = async (data: {title:string,date: string,description: string, image: string}, e: any) => {
    e.preventDefault();
    setIsErrorSubmit('')
    if (router.pathname === '/lists') {
      try {
        setIsLoading(true)
        const newList = await mainApi.createList(data.title, data.date, data.description, data.image);
        setIsLoading(false)
        setIsPopupOpen(false)
        if (setLists) {
         setLists([...(lists ?? []), newList]);
        }
        reset()
        setValue('date', '');
      } catch (err: any) {
        setIsErrorSubmit(err)
        setIsLoading(false)
        console.error(err.message);
      }
    } else {
      try {
        setIsLoading(true)
        const updateList = await mainApi.updateList(data,list?._id);
        if(setList) {
                  setList(updateList)
        }

        setIsLoading(false)
        setIsPopupOpen(false)
        //    setLists([...lists, newList])
        reset()
        setValue('date', '');
      } catch (err: any) {
        setIsErrorSubmit(err)
        setIsLoading(false)
        console.error(err.message);
      }
    }

  };

  return (
    <div
      className={isPopupOpen ? `${styles.list} ${styles.list_opened}` : `${styles.list}`}>
      {isLoading && <Preloader/>}
      <div className={styles.list__container}>
        <button className={styles.list__close} onClick={() => {
          reset()
          if (!list) {
            setValue('date', '');
          }
          setIsPopupOpen(!isPopupOpen)
        }

        }></button>
        <h3 className={styles.list__title}>{list ? 'Обновить список' : 'Создать список'}</h3>
        <form className={styles.list__form}
              onSubmit={handleSubmit(onSubmit)}>
          <input className={styles.list__input} placeholder='Название' required {...register('title', validateCreate)}/>
          <span
            className={errors.title ? `${styles.list__error} ${styles.list__error_active}` :
              `${styles.list__error}`}>{String(errors?.title?.message || "")}
             </span>
          <DateInput
            control={control}
            name="date"
            rules={validateDate}
            classname={styles.list__input}
          />
          <span
            className={errors.date ? `${styles.list__error} ${styles.list__error_active}` :
              `${styles.list__error}`}>{String(errors?.date?.message || "")}
             </span>
          <input className={styles.list__input} placeholder='Описание' {...register('description')}/>
          <span
            className={errors.description ? `${styles.list__error} ${styles.list__error_active}` :
              `${styles.list__error}`}>{String(errors?.description?.message || "")}
             </span>
          <input className={styles.list__input}
                 placeholder='Ссылка на картинку' {...register('image', validateLinkCreateList)}/>
          <span
            className={errors.image ? `${styles.list__error} ${styles.list__error_active}` :
              `${styles.list__error}`}>{String(errors?.image?.message || "")}
             </span>


          <button disabled={!isValid || isLoading}
                  className={!isValid || isLoading ?
                    `${styles.list__updateButton}`
                    : `${styles.list__updateButton}
                   ${styles.list__updateButton_active}`}>{list ? 'Сохранить' : 'Создать'}
          </button>
        </form>
        <div
          className={isErrorSubmit ? `${styles.list__errorSubmit} ${styles.list__errorSubmit_active}` : `${styles.list__errorSubmit}`}>{`Во время выполнения запроса произошла ошибка, попробуйте позднее`}
        </div>
      </div>
    </div>
  );
};

export default PopupCreateAndUpdateList;
