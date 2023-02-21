
export const BottomIcon = ({ size, fill, width = 24, height = 24, ...props }) => {
    return (
        <svg width={size || width} height={size || height} viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6667 0.333328L0.333353 0.333327L12 18.6667L23.6667 0.333328Z" fill={fill} />
        </svg>
    );
};
