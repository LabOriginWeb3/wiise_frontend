
export const AnwserIcon = ({ size, fill, width = 20, height = 20, ...props }) => {
    return (
        <svg width={size || width} height={size || height} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.25 18H0.25V19.5H21.25V18Z" fill={fill} />
            <path d="M17.8 5.25C18.4 4.65 18.4 3.75 17.8 3.15L15.1 0.45C14.5 -0.15 13.6 -0.15 13 0.45L1.75 11.7V16.5H6.55L17.8 5.25ZM14.05 1.5L16.75 4.2L14.5 6.45L11.8 3.75L14.05 1.5ZM3.25 15V12.3L10.75 4.8L13.45 7.5L5.95 15H3.25Z" fill={fill} />
        </svg>
    );
};
