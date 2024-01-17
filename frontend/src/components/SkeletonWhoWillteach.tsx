import ContentLoader from "react-content-loader"

export default function SkeletonWhoWillteach() {
    return (
        <>
            <div className="xs:max-l:hidden">
                <ContentLoader
                    speed={2}
                    width={280}
                    height={496}
                    viewBox="0 0 280 496"
                    backgroundColor="#e8e8e8"
                    foregroundColor="#bababa"
                >
                    <rect x="5" y="7" rx="8" ry="8" width="260" height="243" />
                    <rect x="5" y="269" rx="8" ry="8" width="260" height="29" />
                    <rect x="5" y="308" rx="8" ry="8" width="260" height="19" />
                    <rect x="5" y="350" rx="8" ry="8" width="70" height="26" />
                    <rect x="5" y="433" rx="8" ry="8" width="260" height="51" />
                    <rect x="84" y="349" rx="8" ry="8" width="71" height="26" />
                    <rect x="5" y="385" rx="8" ry="8" width="97" height="26" />
                    <rect x="165" y="348" rx="8" ry="8" width="70" height="26" />
                </ContentLoader>
            </div>
            
            <div className="l:hidden">
                <ContentLoader
                    speed={2}
                    width={200}
                    height={372}
                    viewBox="0 0 200 372"
                    backgroundColor="#e8e8e8"
                    foregroundColor="#bababa"

                >
                    <rect x="10" y="7" rx="8" ry="8" width="180" height="200" />
                    <rect x="10" y="222" rx="8" ry="8" width="180" height="29" />
                    <rect x="10" y="259" rx="8" ry="8" width="180" height="19" />
                    <rect x="5" y="433" rx="8" ry="8" width="260" height="51" />
                    <rect x="10" y="293" rx="8" ry="8" width="128" height="16" />
                    <rect x="5" y="385" rx="8" ry="8" width="97" height="26" />
                    <rect x="145" y="293" rx="8" ry="8" width="40" height="16" />
                    <rect x="10" y="324" rx="8" ry="8" width="180" height="37" />
                </ContentLoader>
            </div>
        </>
    )
}