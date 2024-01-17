import { lazy, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ITeacher } from "../api/models";
import { getTeachers } from "../api/reqs";
import de from "../media/svg/flags/de.svg";
import es from "../media/svg/flags/es.svg";
import us from "../media/svg/flags/us.svg";
import SkeletonWhoWillteach from "./SkeletonWhoWillteach";
import TeacherCard from "./TeacherCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../swiperStyles.css";

const ModalTeacher = lazy(() => import("../components/ModalTeacher"));

interface ILanguage {
  language: string;
  icon: string;
}

interface IAudioPlayerData {
  idCard: number;
  isPlaying: boolean;
}

export default function WhoWillTeach() {
  const [audioPlayerData, setAudioPlayerData] = useState<IAudioPlayerData>();
  const [isModalTeacherActive, setIsModalTeacherActive] =
    useState<boolean>(false);
  const [selectedTeacher, setSelectedTeacher] = useState<ITeacher>();
  const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>();
  const { isLoading: teachersLoading, data: teachers } = useQuery(
    ["teachers", { language: selectedLanguage }],
    () => getTeachers(selectedLanguage?.language)
  );

  const languages: ILanguage[] = [
    { language: "Английский", icon: us },
    { language: "Испанский", icon: es },
    { language: "Немецкий", icon: de },
  ];
  const teachersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="h-fit relative mx-auto pt-[30px] ss:ml-0 m:pt-[50px] ">
      {selectedTeacher ? (
        <ModalTeacher
          isModalTeacherActive={isModalTeacherActive}
          setIsModalTeacherActive={setIsModalTeacherActive}
          data={selectedTeacher}
        />
      ) : (
        <></>
      )}

      <article className="xs:max-md:mb-[25px] mb-[40px] max-w-[1200px] mx-auto xs:max-l:ml-[20px]">
        <span className="block font-semibold italic text-[16px] mb-[20px] text-[#00BA61]">
          Репетиторы
        </span>
        <h2 className="font-black text-[#2D2D2D] text-[28px] xs:max-l:mt-[-4px] xs:max-l:mb-[15px] mb-[30px] l:text-[48px] tracking-tight mt-[20px]">
          Кто будет вести курсы?
        </h2>
        <p className="xs:max-md:w-[335px] max-w-[480px] text-base font-medium text-[#787878] leading-[22.4px]">
          Все наши репетиторы проходят 3 этапа собеседования и имеют минимум 5
          лет стажа преподавательской деятельности
        </p>
      </article>

      <section className="flex max-w-[1200px] mx-auto xs:max-l:ml-[20px] relative overflow-x-scroll hideScroll sm:items-start sm:flex-col xm:flex-row xm:items-end xm:justify-between mb-[20px]">
        <div className="radio-inputs max-h-[68px]">
          <label className="radio l:hover:bg-[#2d2d2d79] rounded-lg transition-all duration-150 max-h-[34px]">
            <input
              type="radio"
              name="language"
              defaultChecked
              onClick={() => {
                setSelectedLanguage(undefined);
              }}
            />
            <span className="name tracking-tight whitespace-nowrap leading-[14px] text-[#2D2D2D]">
              Все языки
            </span>
          </label>
          {languages.map((item, idx) => {
            return (
              <label
                key={idx}
                className="radio l:hover:bg-[#2d2d2d79] rounded-lg transition-all duration-150 max-h-[34px] w-fit "
              >
                <input
                  type="radio"
                  name="language"
                  onClick={() => {
                    setSelectedLanguage(item);
                  }}
                />
                <div className="name flex items-center gap-1">
                  <img src={item.icon} alt="flagIcon" />
                  <span className="tracking-tight leading-[14px]">
                    {item.language}
                  </span>
                </div>
              </label>
            );
          })}
        </div>

        <div className="hidden xm:flex w-full justify-end items-end gap-5 mr-[20px]">
          <div className="flex items-center">
            <figure className="button-default image-swiper-button-prev bg-[#00ba6038] w-[64px] h-[58px] rounded-l-xl relative cursor-pointer">
              <svg
                className=" absolute w-[24px] h-[24px] right-[20px] top-[18px]"
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=""
                  d="M8 2L2 8L8 14"
                  stroke="#00BA61"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </figure>

            <figure className="button-default image-swiper-button-next bg-[#00BA61] w-[64px] h-[58px] rounded-r-xl relative cursor-pointer">
              <svg
                className=" absolute w-[24px] h-[24px] right-[20px] top-[18px]"
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L8 8L2 14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </figure>
          </div>
          <Link
            to={"/tutors"}
            className="button-default flex items-center justify-center bg-[#00BA61] hover:bg-[#26c97b] p-[15px] mt-[18px] w-[200px] h-[58px] rounded-[8px] font-semibold text-white text-[18px]"
          >
            Все репетиторы
          </Link>
        </div>
      </section>

      <Swiper
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        spaceBetween={20}
        loop={true}
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
          renderBullet: (index: any, className: any) => {
            return "<span class=" + className + "></span>";
          },
        }}
        modules={[Pagination, Navigation]}
        className={`mySwiper ${
          teachers?.results
            ? teachers?.results?.length <= 6
              ? "width-1200"
              : ""
            : ""
        }`}
      >
        {teachersLoading ? (
          <div className="flex xs:max-l:gap-[10px]  l:gap-[20px]">
            {teachersArr.map((idx) => {
              return <SkeletonWhoWillteach key={idx} />;
            })}
          </div>
        ) : (
          <div>
            {teachers?.results?.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <TeacherCard
                    onClick={() => {
                      setSelectedTeacher(item);
                      setIsModalTeacherActive(true);
                    }}
                    data={item}
                    audioPlayerData={audioPlayerData}
                    setAudioPlayerData={setAudioPlayerData}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        )}
      </Swiper>
      <div className="my-custom-pagination-div flex items-center gap-[5px] justify-center mt-[20px] l:hidden"></div>

      <div className="px-[20px]">
        <Link to={"/tutors"}>
          <button className="xm:hidden button-default bg-[#00BA61] mx-auto w-full hover:bg-[#26c97b] p-[15px] xs:max-md:mt-[10px] mt-[18px] h-[58px] rounded-[8px] font-semibold text-white text-[18px] text-center">
            Все репетиторы
          </button>
        </Link>
      </div>
    </div>
  );
}
