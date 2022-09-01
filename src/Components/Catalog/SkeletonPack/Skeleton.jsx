import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={.8}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#ffffff"
        foregroundColor="#8f8f8f"
        {...props}
    >
        <circle cx="137" cy="109" r="109" />
        <rect x="34" y="238" rx="0" ry="0" width="95" height="17" />
        <rect x="148" y="238" rx="0" ry="0" width="94" height="15" />
        <rect x="39" y="271" rx="0" ry="0" width="61" height="14" />
        <rect x="124" y="273" rx="0" ry="0" width="44" height="12" />
        <rect x="185" y="272" rx="0" ry="0" width="57" height="11" />
        <rect x="31" y="297" rx="0" ry="0" width="109" height="20" />
        <rect x="152" y="300" rx="0" ry="0" width="86" height="18" />
    </ContentLoader>
)

export default Skeleton