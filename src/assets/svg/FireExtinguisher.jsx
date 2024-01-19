import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width="60" height="60" viewBox="0 0 900 900" >
        <g>
            <path
                style={{fill: "#fdfbfb", clipPath: "circle(50.0% at 50% 50%)"}}
                d="M 0,396 L 0,0 L 396,0 L 792,0 L 792,396 L 792,792 L 396,792 L 0,792 L 0,396 z "
            />
            <path
                style={{fill: "#fa0032"}}
                d="M 32.893431,789.62563 C 17.685242,784.25699 5.9027919,771.97098 1.5811789,756.97514 C 0.13603323,751.96054 0.012581109,718.43503 0.24449159,393.97514 L 0.5,36.5 L 2.819239,30.756976 C 7.6951664,18.682942 18.696079,7.6946108 30.808121,2.800103 L 36.5,0.5 L 393.97514,0.24449159 C 717.67012,0.013127838 751.97236,0.13868249 756.97514,1.5731609 C 764.26137,3.6623866 770.3378,7.2719837 776.7216,13.303198 C 783.20291,19.42653 787.22705,25.6524 789.9277,33.734755 L 792.01098,39.96951 L 791.75549,397.73475 L 791.5,755.5 L 787.8088,763.22998 C 781.65087,776.12569 771.1844,785.5585 758.16811,789.94337 L 752.06309,792 L 395.78155,791.97891 L 39.5,791.95782 L 32.893431,789.62563 z M 498.72057,491.75 C 498.42054,306.5876 498.21795,284.34719 496.73918,274.22479 C 493.1198,249.44963 489.26045,230.96948 483.90092,212.75 L 481.91531,206 L 457.45765,206 L 433,206 L 433,182.73057 L 433,159.46113 L 440.75,159.77131 C 467.07599,160.82496 495.25759,168.1389 519.25,180.14434 L 527,184.02232 L 527,172.50565 L 527,160.98897 L 512.75,154.05397 C 489.78929,142.87974 462.40793,134.97134 440.95116,133.31671 L 433,132.70357 L 433,126.41306 L 433,120.12255 L 437.25,119.55894 C 439.5875,119.24895 459.05,117.64743 480.5,116 C 501.95,114.35257 521.4125,112.75105 523.75,112.44106 L 528,111.87745 L 528,101.93873 L 528,92 L 442,92 L 356,92 L 356,114 L 356,136 L 327.45784,136 C 296.09291,136 289.09069,136.82275 276.83293,141.94832 C 257.32656,150.10489 240.75447,167.15725 233.40911,186.6306 C 227.86258,201.33506 228,197.47457 228,338.58797 L 228,469 L 240,469 L 252,469 L 252,339.04922 C 252,248.64393 252.33382,207.48583 253.09697,203.79922 C 257.0878,184.52051 273.88236,166.93185 293.58145,161.4005 C 298.224,160.09692 305.59053,159.63488 327.75,159.25742 L 356,158.77622 L 356,182.37033 L 356,205.96444 L 331.75,206.23222 L 307.5,206.5 L 304.20525,218 C 300.18471,232.03335 295.58293,254.54107 293.57368,270 C 290.33443,294.9225 290.01933,315.85395 290.00967,506.75 L 290,698 L 394.52739,698 L 499.05477,698 L 498.72057,491.75 z M 266.68095,557.75 C 266.38622,556.5125 262.89614,539.1875 258.92522,519.25 L 251.70536,483 L 239.85268,483 C 233.33371,483 228,483.1295 228,483.28778 C 228,483.44607 224.625,500.41656 220.5,521 C 216.375,541.58344 213,558.77893 213,559.21222 C 213,559.6455 225.19878,560 240.10841,560 L 267.21682,560 L 266.68095,557.75 z "
            />
        </g>
    </svg>
  );
}

export default SvgComponent;
