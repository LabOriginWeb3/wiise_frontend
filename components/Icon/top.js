export const TopIcon = ({ size, fill, width = 24, height = 24, ...props }) => {
    return (
        <svg width={size || width} height={size || height} viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333313 18.6667L23.6666 18.6667L12 0.333324L0.333313 18.6667Z" fill={fill} />
        </svg>
    );
};
