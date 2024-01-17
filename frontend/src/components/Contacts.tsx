import { Controller, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { IAppeals } from "../api/models";
import { postAppeals, postVerifyCaptcha } from "../api/reqs";
import { Link } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { showNotification } from "./Notifications";

export default function Contacts() {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm();
  const [captcha, setCaptcha] = useState<string>()
  const [captchaSkipped, setCaptchaSkipped] = useState<boolean>()

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setCaptcha(value)
      setCaptchaSkipped(false)
    }
  };

  async function sendRequest(data: any) {
    if (!captcha) {
      setCaptchaSkipped(true)
      return
    }

    let postData: IAppeals = {
      name: data.name,
      phone_number: data.phone_number,
      email: data.email,
      topic: data.topic,
      message: data.message
    }


    // let validatedPhone = validatePhone(data.phone_number)
    let validatedPhone
    try{
      validatedPhone = isValidPhoneNumber(data.phone_number) ? data.phone_number : false
    } catch{
      validatedPhone = false
    }

    if (!validatedPhone) {
     showNotification({type:"error", title:"Неверный номер телефона", desc:"Проверьте правильность ввода"})
      return
    }

    let verifyCaptchaStatus;
    try{
      verifyCaptchaStatus = await postVerifyCaptcha(captcha)
    }catch{
      showNotification({type:"error", title:"Срок действия капчи истек", desc:"Повторите ввод капчи"})
      return
    }
    
      postAppeals(postData)
      .then((res) => {
        reset()
        showNotification({type:"success", title:"Заявка успешно отправлена", desc:"Вы успешно отправили заявку, ожидайте сообщения от нашей команды"})
      })
      .catch((er)=>{
        showNotification({type:"error", title:"Несуществующий адрес электронной почты", desc:"Проверьте правильность ввода электронной почты"})
      })
  }
  return (
    <div className="relative max-w-[780px] px-[20px] w-full mx-auto z-10 py-[100px] ">
      <article className="mb-[30px] max-w-[1220px] mx-auto">
        <span className="block font-semibold italic text-[16px] mb-[12px] l:mb-[20px] text-[#00BA61]">Контакты</span>
        <h2 className="font-black text-[#2D2D2D] text-[28px] mb-[15px] l:mb-[30px] l:text-[48px]">Связаться с нами</h2>
        <p className="max-w-[310px] l:max-w-[480px] text-base font-medium text-[#787878] mb-[30px]">Оставьте заявку на вводную встречу — мы напишем вам, выберем подходящий курс и ответим на все вопросы.</p>
      </article>

      <form action="" onSubmit={handleSubmit((data) => { sendRequest(data) })}>
        <section>
          <span className="block font-semibold italic text-[16px] mb-[10px] text-[#787878]">Личные данные</span>
          <div className="w-full flex flex-col gap-[10px]">
            <input {...register("name", { required: true })} type="text" className="w-full py-[15px] px-[20px] text-[18px] placeholder-[#787878] bg-white rounded-[12px]" placeholder="Имя" />
            {errors.name && <span className="block text-red-400 mt-[-5px]">Это поле не может быть пустым</span>}
            {/* <input {...register("phone_number", { required: true })} type="text" className="w-full py-[15px] px-[20px] text-[18px] placeholder-[#787878] bg-white rounded-[12px]" placeholder="Номер в WhatsApp или Telegram" /> */}
            <Controller
              control={control}
              name="phone_number"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <PhoneInput international defaultCountry="RU" value={value} onChange={onChange} onBlur={onBlur} inputRef={ref}/> )}
            />
            {errors.phone_number && <span className="block text-red-400 mt-[-5px]">Это поле не может быть пустым</span>}
            <input {...register("email", { required: true })} type="text" className="w-full py-[15px] px-[20px] text-[18px] placeholder-[#787878] bg-white rounded-[12px]" placeholder="Электропочта" />
            {errors.email && <span className="block text-red-400 mt-[-5px]">Это поле не может быть пустым</span>}
          </div>
        </section>

        <section className="mt-[20px]">
          <span className="block font-semibold italic text-[16px] mb-[10px] text-[#787878]">Ваш комментарий</span>
          <div className="w-full flex flex-col gap-[10px]">
            <input {...register("topic", { required: true })} type="text" className="w-full py-[15px] px-[20px] text-[18px] placeholder-[#787878] bg-white rounded-[12px]" placeholder="Тема обсуждения" />
            {errors.topic && <span className="block text-red-400 mt-[-5px]">Это поле не может быть пустым</span>}
            <textarea {...register("message", { required: true })} placeholder="Опишите суть в 2-3 предложениях" className="w-full py-[15px] h-[140px] px-[20px] text-[18px] resize-none placeholder-[#787878] bg-white rounded-[12px]"></textarea>
            {errors.message && <span className="block text-red-400 mt-[-5px]">Это поле не может быть пустым</span>}
          </div>
        </section>
        <ReCAPTCHA
          sitekey=""
          onChange={handleRecaptchaChange}
          className="mt-[10px]"
        />
        {captchaSkipped && <span className="block text-red-400 mb-[5px]">Пожалуйста, подтвердите, что вы не робот</span>}
        <p className="text-[#787878] mx-auto mt-[25px] text-[8px] text-center max-w-[335px]">Нажимая «Записаться бесплатно» вы даёте согласие на обработку персональных данных в соответствии с
          <Link to={"/policy_privacy"} className='underline'> Политика конфиденциальности</Link>
        </p>
        <button className="button-default z-10 bg-[#00BA61] hover:bg-[#26c97b] px-[30px] py-[20px] mt-[18px]  h-[58px] rounded-[8px] font-semibold text-white text-[18px] text-center w-full">Записаться бесплатно</button>
      </form>

    </div>
  );
}
