import { useEffect, useRef, useState } from "react";
import Select, { StylesConfig } from "react-select";
import "./stylesModalOrder.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm } from 'react-hook-form';
import { getCourses, postAppeals, postVerifyCaptcha } from "../api/reqs";
import { IAppeals, ICourses } from "../api/models";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { showNotification } from "./Notifications";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
interface Option {
  value: number,
  label: string
}

interface IProps {
  courses: ICourses[]
}

export default function MakeFirstStep({ courses }: IProps) {
  const [options, setOptions] = useState<Option[]>()
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [captcha, setCaptcha] = useState<string>()
  const [captchaSkipped, setCaptchaSkipped] = useState<boolean>()
  const captchaRef = useRef<ReCAPTCHA>(null)

  const { register, reset, handleSubmit, control, formState: { isSubmitting, isValid, errors } } = useForm();


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

    let verifyCaptchaStatus;
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
      tag: 3
    }
    if (selectedOption) {
      postData.topic = selectedOption.label
      postData.course = selectedOption.value
    }

    postAppeals(postData)
      .then((res) => {
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


  return (
    <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-[780px] px-[20px] w-full mx-auto pt-[1px] z-[50] ">
      <article className="mb-[40px] max-w-[1200px] mx-auto">
        <span className="block font-semibold italic text-[16px] mb-[12px] l:mb-[20px] text-[#00BA61]">А как насчёт...</span>
        <h2 className="font-black text-white text-[28px] mb-[15px] l:mb-[30px] l:text-[48px] xs:max-md:leading-[30.8px] tracking-tight leading-[52.8px]">Сделать первый шаг <br /> в изучении языка?</h2>
        <p className="max-w-[310px] l:max-w-[480px] text-base font-medium text-[#E3E3E3] mb-[30px] tracking-tight leading-[22.4px]">Оставьте заявку на вводную встречу — мы напишем вам, выберем подходящий формат и ответим на все вопросы.</p>
      </article>
      <form onSubmit={handleSubmit((data) => { sendRequest(data) })}>
        <span className="block font-semibold italic text-[16px] mb-[10px] text-[#E3E3E3] tracking-tight leading-[19.2px]">Формат обучения</span>
        <Select components={{
          IndicatorSeparator: () => null,
        }}
          isSearchable={false}
          styles={customStyles} defaultValue={{ value: 0, label: 'Выбрать курс' }} onChange={handleOptionChange}
          options={options ? options : [{ value: 0, label: 'Выбрать курс' }]} className="mb-[20px] rounded-[12px] z-50" />
        <span className="block font-semibold italic text-[16px] mb-[10px] text-[#E3E3E3] tracking-tight leading-[19.2px]">Личные данные</span>
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
        <button type={'submit'} disabled={!isValid} className="button-default bg-[#00BA61] hover:bg-[#26c97b] disabled:hover:bg-[#00BA61] px-[30px] py-[20px] mt-[18px]  h-[58px] rounded-[8px] font-semibold text-white text-[18px] text-center w-full">Записаться бесплатно</button>
        <p className="text-[#787878] mx-auto mt-[25px] text-[8px] text-center max-w-[335px]">Нажимая «Записаться бесплатно» вы даёте согласие на обработку персональных данных в соответствии с
          <Link to={"/policy_privacy"} className='underline'> Политика конфиденциальности</Link>
        </p>
      </form>
    </motion.div>
  );
}
