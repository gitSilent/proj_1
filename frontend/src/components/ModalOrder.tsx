import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { getCourses, postAppeals, postVerifyCaptcha } from "../api/reqs";
import Select, { StylesConfig } from "react-select";
import { Controller, useForm } from "react-hook-form";
import { showNotification } from "./Notifications";
import { IAppeals } from "../api/models";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import ReCAPTCHA from "react-google-recaptcha";
import scribble from "../media/scribble.webp"
import folder from "../media/folder.webp"
import Modal from "react-modal";
import 'react-notifications-component/dist/theme.css'
import 'react-phone-number-input/style.css'
import "./stylesModalOrder.css";
import 'animate.css';

interface IProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  tag: number
}

interface Option {
  value: number,
  label: string
}

export default function ModalOrder({ active, setActive, tag }: IProps) {
  const [options, setOptions] = useState<Option[]>()
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [captcha, setCaptcha] = useState<string>()
  const [captchaSkipped, setCaptchaSkipped] = useState<boolean>()
  const captchaRef = useRef<ReCAPTCHA>(null)

  const { register, reset, handleSubmit, control, formState: { errors } } = useForm();
  let verifyCaptchaStatus;

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setCaptcha(value)
      setCaptchaSkipped(false)
    }
  };

  useEffect(() => {
    getCourses()
      .then((res) => {
        let newOptions = res.map((item) => {
          return {
            label: item.title,
            value: item.id
          }
        })
        setOptions(newOptions)
      })
  }, [])


  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  async function sendRequest(data: any) {
    if (!captcha) {
      setCaptchaSkipped(true)
      return
    }
    // let validatedPhone = validatePhone(data.phone_number)
    let validatedPhone
    try{
      validatedPhone = isValidPhoneNumber(data.phone_number) ? data.phone_number : false
    } catch{
      validatedPhone = false
    }

    if (!validatedPhone) {
      showNotification({ type: "error", title: "Неверный номер телефона", desc: "Проверьте правильность ввода" })
      return
    }


    try {
      verifyCaptchaStatus = await postVerifyCaptcha(captcha)
    } catch {
      showNotification({ type: "error", title: "Срок действия капчи истек", desc: "Повторите ввод капчи" })
      return
    }

    let postData: IAppeals = {
      name: data.name,
      phone_number: validatedPhone ? validatedPhone : data.phone_number,
      email: data.email,
      tag: tag
    }
    if (selectedOption) {
      postData.topic = selectedOption.label
      postData.course = selectedOption.value
    }
    console.log(postData);

    postAppeals(postData)
      .then((res) => {
        console.log(res.data)
        reset()
        captchaRef?.current?.reset()
        showNotification({ type: "success", title: "Заявка успешно отправлена", desc: "Вы успешно отправили заявку, ожидайте сообщения от нашей команды" })
      })
      .catch((er) => {
        captchaRef?.current?.reset()
        setCaptchaSkipped(false)
        showNotification({ type: "error", title: "Несуществующий адрес электронной почты", desc: "Проверьте правильность ввода электронной почты" })
      })

  }


  const customStyles: StylesConfig<Option, false> = {
    dropdownIndicator: base => ({
      ...base,
      color: "black" // Custom colour
    }),
    control: (provided, state) => ({
      ...provided,
      fontWeight: "500",
      border: 'none',
      borderRadius: '12px',
      padding: "8px 10px",
      cursor: "pointer",
      transition: "all",
      transitionDuration: "150ms",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#00BA61' : 'inherit',
      cursor: 'pointer',
      "&:hover": {
        backgroundColor: '#00BA61',
        color: 'white'
      }
    })
  };

  const customStylesModal = {
    overlay: {
      zIndex: 120, // уровень z-index для оверлея
    },
    content: {
      zIndex: 130, // уровень z-index для контента модального окна
    }
  }


  return (
    <Modal
      isOpen={active}
      className={"order-modal hide-scroll overflow-hidden"}
      onRequestClose={() => setActive(false)}
      contentLabel="Example Modal"
      style={customStylesModal}
    >
      <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex flex-col h-full w-full md:flex-row">
        <img src={scribble} alt="" className="hidden md:block absolute scale-[65%] rotate-[12deg] top-[-120px] right-[-280px]" />
        <img src={folder} alt="" className="hidden md:block absolute scale-[53%] top-[-200px] right-[-280px]" />
        <div onClick={() => { setActive(false); }} className="close-modal fixed flex justify-center items-center z-[100] xs:max-md:top-[10px] xs:max-md:right-[10px] top-[70px] right-[calc(50vw-390px)] w-[48px] h-[48px] bg-[#2D2D2D] bg-opacity-30 rounded-[10px] border-[1px] border-[#E3E3E3]" >
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.99988 16.1992L16.1992 2.99989" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M2.99988 3L16.1992 16.1993" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col justify-between h-full max-w-[780px] px-[20px] md:px-0 w-full mx-auto pt-[1px] z-10 ">
          <div className="">
            <article className="mb-[30px] max-w-[1220px] mx-auto">
              <span className="block font-semibold italic text-[16px] mt-[40px] md:mt-[10px] mb-[12px] l:mb-[20px] text-[#00BA61]">Оставить заявку</span>
              <h2 className="font-black text-white text-[28px] mb-[15px] l:mb-[30px] l:text-[48px]">Сделай первый шаг <br /> в изучении языка!</h2>
              <p className="max-w-[310px] l:max-w-[480px] text-base font-medium text-[#E3E3E3] mb-[40px]">Оставьте заявку на вводную встречу — мы напишем вам, выберем подходящий формат и ответим на все вопросы.</p>
            </article>
            <form onSubmit={handleSubmit((data) => { sendRequest(data) })} className="pb-[15px]">
              <span className="block font-semibold italic text-[16px] mb-[10px] text-[#E3E3E3]">Формат</span>
              <Select components={{
                IndicatorSeparator: () => null,
              }}
                isSearchable={false}
                styles={customStyles} defaultValue={{ value: 0, label: 'Выбрать курс' }} onChange={handleOptionChange}
                options={options ? options : [{ value: 0, label: 'Выбрать курс' }]} className="mb-[20px] rounded-[12px] z-50" />
              <span className="block font-semibold italic text-[16px] mb-[10px] text-[#E3E3E3]">Личные данные</span>
              <div className="w-full flex flex-col gap-[10px]">
                <input {...register("name", { required: true })} type="text" className="w-full py-[15px] px-[20px] text-[18px] placeholder-[#787878] bg-white rounded-[12px]" placeholder="Имя" />
                {errors.name && <span className="block text-red-400 mt-[-5px]">Это поле не может быть пустым</span>}
                <Controller
                  control={control}
                  name="phone_number"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <PhoneInput international defaultCountry="RU" value={value} onChange={onChange} onBlur={onBlur} inputRef={ref} />)}
                />
                {errors.phone_number && <span className="block text-red-400 mt-[-5px]">Это поле не может быть пустым</span>}
                <input {...register("email", { required: true })} type="text" className="w-full py-[15px] px-[20px] text-[18px] placeholder-[#787878] bg-white rounded-[12px]" placeholder="Электропочта" />
                {errors.email && <span className="block text-red-400 mt-[-5px]">Это поле не может быть пустым</span>}
              </div>
              <ReCAPTCHA
                ref={captchaRef}
                sitekey=""
                onChange={handleRecaptchaChange}
                className="mt-[10px]"
              />
              {captchaSkipped && <span className="block text-red-400 mb-[5px]">Пожалуйста, подтвердите, что вы не робот</span>}
              <button className="hidden button-default bg-[#00BA61] hover:bg-[#26c97b] px-[30px] py-[20px] mt-[18px]  min-h-[58px] rounded-[8px] font-semibold text-white text-[18px] text-center w-full md:block">Записаться бесплатно</button>
              <p className="text-[#787878] mx-auto mt-[25px] text-[8px] text-center max-w-[335px]">Нажимая «Записаться бесплатно» вы даёте согласие на обработку персональных данных в соответствии с
                <Link to={"/policy_privacy"} className='underline'> Политика конфиденциальности</Link>
              </p>
            </form>
          </div>
          <button className="block button-default bg-[#00BA61] hover:bg-[#26c97b] px-[30px] py-[20px] mt-[18px]  min-h-[58px] rounded-[8px] font-semibold text-white text-[18px] text-center w-full md:hidden">Записаться бесплатно</button>
          <div className="min-h-[20px] w-full md:hidden"></div>

        </div>

      </motion.div>
    </Modal>
  );
}
