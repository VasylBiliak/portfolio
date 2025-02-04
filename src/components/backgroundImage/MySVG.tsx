import React from 'react';

interface MySVGProps {
    stroke?: string;
    width?: string;
    height?: string;
    strokeWidth?: string; // Додано новий параметр для товщини ліній
}

const MySVG: React.FC<MySVGProps> = ({
                                         stroke = 'white',
                                         width = '1400',
                                         height = '1422',
                                         strokeWidth = '1', // Значення за замовчуванням
                                     }) => (
    <svg width={width} height={height} viewBox="0 0 1400 1422" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_18_43)" filter="url(#filter0_d_18_43)">
            <path d="M4 5C101.333 6.5 1021 129 382 391.5C316 418.613 -229 750 698 710.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M4 25C101.333 26.5 1021 149 382 411.5C316 438.613 -225.5 781.5 699 711.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M4 45C101.333 46.5 1021 169 382 431.5C316 458.613 -221 804 697.5 712.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M4 65C101.333 66.5 1021 189 382 451.5C316 478.613 -228.5 828 697.5 711.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M4 85C101.333 86.5 1021 209 382 471.5C316 498.613 -242 847.5 698.5 712.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M-98 337C-0.666664 338.5 919 461 280 723.5C214 750.613 -331 1082 596 1042.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M-98 357C-0.666664 358.5 919 481 280 743.5C214 770.613 -327.5 1113.5 597 1043.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M-98 377C-0.666664 378.5 919 501 280 763.5C214 790.613 -323 1136 595.5 1044.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M-98 397C-0.666664 398.5 919 521 280 783.5C214 810.613 -330.5 1160 595.5 1043.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M-98 417C-0.666664 418.5 919 541 280 803.5C214 830.613 -344 1179.5 596.5 1044.5" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1411 1504C1312.97 1502.31 386.673 1364.56 1030.28 1069.38C1096.75 1038.9 1645.68 666.254 712 710.672" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1411 1482C1312.97 1480.31 386.683 1342.48 1030.28 1047.13C1096.76 1016.62 1642.15 630.819 711 709.58" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1411 1459C1313.04 1457.31 387.401 1319.54 1030.55 1024.33C1096.98 993.834 1637.46 605.398 713 708.302" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1411 1437C1313.04 1435.31 387.401 1297.5 1030.55 1002.18C1096.98 971.673 1645.01 578.601 713 709.667" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1411 1414C1313.04 1412.31 387.41 1274.64 1030.55 979.624C1096.98 949.153 1658.59 557.049 712 708.771" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1338 1838C1233.65 1836.31 247.729 1698.56 932.767 1403.38C1003.52 1372.9 1587.79 1000.25 594 1044.67" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1338 1816C1233.66 1814.31 247.835 1676.48 932.806 1381.13C1003.55 1350.62 1584.01 964.819 593 1043.58" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1338 1793C1233.72 1791.31 248.41 1653.54 933.019 1358.33C1003.73 1327.83 1579.06 939.398 595 1042.3" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1338 1771C1233.72 1769.31 248.41 1631.5 933.019 1336.18C1003.73 1305.67 1587.1 912.601 595 1043.67" stroke={stroke} strokeWidth={strokeWidth} />
            <path d="M1338 1748C1233.73 1746.31 248.514 1608.64 933.058 1313.62C1003.76 1283.15 1601.53 891.049 594 1042.77" stroke={stroke} strokeWidth={strokeWidth} />
            {/*it is sorcle*/}
            {/*<g filter="url(#filter1_d_18_43)">*/}
            {/*    <path d="M422 606C422 619.585 412.654 632.064 397.157 641.201C381.682 650.325 360.239 656 336.5 656C312.761 656 291.318 650.325 275.843 641.201C260.346 632.064 251 619.585 251 606C251 592.415 260.346 579.936 275.843 570.799C291.318 561.675 312.761 556 336.5 556C360.239 556 381.682 561.675 397.157 570.799C412.654 579.936 422 592.415 422 606Z" stroke={stroke} strokeWidth={strokeWidth} shapeRendering="crispEdges"/>*/}
            {/*</g>*/}
            <line x1="-525.999" y1="484.5" x2="1394" y2="487.497" stroke={stroke} strokeWidth={strokeWidth} strokeOpacity="0.42"/>
            <line x1="824.5" y1="85" x2="824.5" y2="882" stroke={stroke} strokeWidth={strokeWidth} strokeOpacity="0.42"/>
            <line x1="974.5" y1="85" x2="974.5" y2="882" stroke={stroke} strokeWidth={strokeWidth} strokeOpacity="0.42"/>
            <line x1="1124.5" y1="85" x2="1124.5" y2="883" stroke={stroke} strokeWidth={strokeWidth} strokeOpacity="0.42"/>
            <line x1="1273.5" y1="885" x2="1273.5" y2="87.9994" stroke={stroke} strokeWidth={strokeWidth} strokeOpacity="0.42"/>
            <line x1="674.5" y1="85" x2="674.5" y2="882" stroke={stroke} strokeWidth={strokeWidth} strokeOpacity="0.42"/>
            <line x1="-526" y1="384.5" x2="1394.1" y2="384.5" stroke={stroke} strokeWidth={strokeWidth} strokeOpacity="0.42"/>
            <line x1="-525.999" y1="284.5" x2="1394" y2="287.5" stroke={stroke} strokeWidth={strokeWidth} strokeOpacity="0.42"/>
            <line x1="-525.997" y1="184.5" x2="1394" y2="194.5" stroke={stroke} strokeWidth={strokeWidth} strokeOpacity="0.42"/>
            <ellipse cx="705.5" cy="711" rx="4.5" ry="4" fill="#D9D9D9"/>
        </g>
        <defs>
            <filter id="filter0_d_18_43" x="0" y="0" width="1400" height="1422" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_43"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_43" result="shape"/>
            </filter>
            <filter id="filter1_d_18_43" x="246" y="555" width="181" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_43"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_43" result="shape"/>
            </filter>
            <clipPath id="clip0_18_43">
                <rect width="1392" height="1414" fill="white" transform="translate(4)"/>
            </clipPath>
        </defs>
    </svg>
);

export default MySVG;
