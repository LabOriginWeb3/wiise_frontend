export const AddIcon = ({ size, fill, width = 24, height = 24, ...props }) => {
    return (
        <svg  width={size || width} height={size || height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.625 4.375V0H4.375V4.375H0V5.625H4.375V10H5.625V5.625H10V4.375H5.625Z" fill={fill} />
        </svg>

    );
};
