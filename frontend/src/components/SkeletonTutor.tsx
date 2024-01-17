import ContentLoader from "react-content-loader"

export default function SkeletonTutor() {

    return (
        <>
            <div className="hidden l:block min-w-[163px] max-w-[163px] z-[50] bg-[#F8F8F8] rounded-[12px] l:max-w-[280px] p-[10px] w-full h-fit relative">

                <ContentLoader
                    speed={2}
                    width={290}
                    height={500}
                    viewBox="0 0 290 500"
                    backgroundColor="#e8e8e8"
                    foregroundColor="#bababa"
                >
                    <rect x="0" y="296" rx="16" ry="16" width="211" height="29" />
                    <rect x="0" y="332" rx="12" ry="12" width="173" height="23" />
                    <rect x="0" y="0" rx="8" ry="8" width="260" height="290" />
                    <rect x="0" y="366" rx="3" ry="3" width="133" height="22" />
                    <rect x="26" y="391" rx="3" ry="3" width="108" height="22" />
                    <rect x="0" y="391" rx="3" ry="3" width="22" height="22" />
                    <rect x="0" y="423" rx="10" ry="10" width="260" height="20" />
                    <rect x="0" y="446" rx="10" ry="10" width="260" height="20" />
                    <rect x="0" y="469" rx="10" ry="10" width="133" height="20" />
                </ContentLoader>
            </div>

            <div className="l:hidden min-w-[163px] max-w-[163px] z-[50] bg-[#F8F8F8] rounded-[12px] l:max-w-[280px] p-[10px] w-full h-fit relative">

                <ContentLoader
                    speed={2}
                    width={165}
                    height={340}
                    viewBox="0 0 165 340"
                    backgroundColor="#e8e8e8"
                    foregroundColor="#bababa"
                >
                    <rect x="0" y="171" rx="12" ry="12" width="118" height="24" />
                    <rect x="0" y="200" rx="8" ry="8" width="143" height="17" />
                    <rect x="0" y="0" rx="8" ry="8" width="143" height="160" />
                    <rect x="0" y="228" rx="3" ry="3" width="143" height="17" />
                    <rect x="0" y="278" rx="8" ry="8" width="144" height="14" />
                    <rect x="0" y="249" rx="3" ry="3" width="24" height="17" />
                    <rect x="28" y="249" rx="3" ry="3" width="114" height="17" />
                    <rect x="0" y="297" rx="8" ry="8" width="144" height="14" />
                    <rect x="0" y="317" rx="8" ry="8" width="109" height="14" />
                </ContentLoader>
            </div>
        </>
    )
}
