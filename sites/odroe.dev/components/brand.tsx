type Props = Omit<React.SVGProps<SVGSVGElement>, 'xmlns' | 'viewBox'>;

export const BrandIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" {...props}>
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M140 70C140 108.66 108.66 140 70 140C31.3401 140 0 108.66 0 70C0 31.3401 31.3401 0 70 0C76.5853 0 82.9582 0.909344 89 2.60931V44.2486C83.6864 40.3216 77.1143 38 70 38C52.3269 38 38 52.3269 38 70C38 87.6731 52.3269 102 70 102C77.1143 102 83.6864 99.6784 89 95.7514V102H109V11.8621C127.697 24.4295 140 45.778 140 70ZM70.9999 84.9997C75.9068 84.9997 80.2634 82.6436 83 79.0009V60.9988C80.2634 57.3561 75.9068 55 70.9999 55C62.7157 55 56 61.7157 56 69.9999C56 78.2841 62.7157 84.9997 70.9999 84.9997Z"
      />
    </svg>
  );
};

export const BrandLogo = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 597 140" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.9991 140C108.658 140 139.998 108.66 139.998 69.9998C139.998 45.7779 127.696 24.4293 108.999 11.8619V102H88.9988V95.7512C83.6853 99.6782 77.1133 102 69.9991 102C52.3262 102 37.9995 87.6729 37.9995 69.9998C37.9995 52.3267 52.3262 37.9998 69.9991 37.9998C77.1133 37.9998 83.6853 40.3215 88.9988 44.2485V2.60913C82.9571 0.909161 76.5843 -0.000183105 69.9991 -0.000183105C31.3396 -0.000183105 0 31.3399 0 69.9998C0 108.66 31.3396 140 69.9991 140ZM82.9989 79.0007C80.2623 82.6434 75.9057 84.9995 70.9989 84.9995C62.7148 84.9995 55.9992 78.2839 55.9992 69.9997C55.9992 61.7155 62.7148 54.9998 70.9989 54.9998C75.9057 54.9998 80.2623 57.356 82.9989 60.9986V79.0007ZM257.634 100.657C262.037 92.2763 264.239 82.2088 264.239 70.4545C264.239 58.7003 262.037 48.6506 257.634 40.3054C253.266 31.9247 247.3 25.5149 239.736 21.076C232.207 16.6371 223.667 14.4176 214.114 14.4176C204.562 14.4176 196.004 16.6371 188.44 21.076C180.911 25.5149 174.945 31.9247 170.542 40.3054C166.174 48.6506 163.99 58.7003 163.99 70.4545C163.99 82.1733 166.174 92.223 170.542 100.604C174.945 108.949 180.911 115.359 188.44 119.833C196.004 124.272 204.562 126.491 214.114 126.491C223.667 126.491 232.207 124.272 239.736 119.833C247.3 115.394 253.266 109.002 257.634 100.657ZM240.482 49.5206C243.074 55.2024 244.37 62.1804 244.37 70.4545C244.37 78.7287 243.074 85.7244 240.482 91.4418C237.925 97.1236 234.374 101.438 229.828 104.386C225.283 107.298 220.045 108.754 214.114 108.754C208.184 108.754 202.946 107.298 198.401 104.386C193.855 101.438 190.286 97.1236 187.694 91.4418C185.137 85.7244 183.859 78.7287 183.859 70.4545C183.859 62.1804 185.137 55.2024 187.694 49.5206C190.286 43.8033 193.855 39.4886 198.401 36.5767C202.946 33.6293 208.184 32.1555 214.114 32.1555C220.045 32.1555 225.283 33.6293 229.828 36.5767C234.374 39.4886 237.925 43.8033 240.482 49.5206ZM295.173 121.484C300.252 124.787 306.004 126.438 312.432 126.438C317.12 126.438 321.008 125.657 324.097 124.094C327.187 122.532 329.673 120.65 331.555 118.448C333.437 116.211 334.875 114.098 335.87 112.109H337.041V125H356.004V15.9091H336.669V56.7116H335.87C334.875 54.723 333.472 52.6101 331.661 50.3729C329.85 48.1001 327.4 46.1648 324.311 44.5668C321.221 42.9332 317.279 42.1165 312.485 42.1165C306.2 42.1165 300.5 43.7322 295.387 46.9638C290.273 50.1598 286.207 54.9006 283.188 61.1861C280.205 67.4361 278.714 75.1065 278.714 84.1974C278.714 93.1818 280.188 100.817 283.135 107.102C286.083 113.388 290.095 118.182 295.173 121.484ZM328.252 107.315C325.376 109.517 321.896 110.618 317.812 110.618C313.586 110.618 310.017 109.482 307.105 107.209C304.229 104.901 302.045 101.758 300.553 97.7805C299.097 93.7678 298.37 89.2045 298.37 84.0909C298.37 79.0128 299.097 74.5028 300.553 70.5611C302.009 66.6193 304.176 63.5298 307.052 61.2926C309.928 59.0554 313.515 57.9368 317.812 57.9368C321.967 57.9368 325.465 59.0199 328.306 61.1861C331.182 63.3523 333.348 66.3885 334.804 70.2947C336.296 74.201 337.041 78.7997 337.041 84.0909C337.041 89.3821 336.296 94.0163 334.804 97.9936C333.313 101.971 331.129 105.078 328.252 107.315ZM376.552 43.1818V125H395.835V76.8999C395.835 73.4197 396.634 70.348 398.232 67.6847C399.83 65.0213 402.014 62.9439 404.784 61.4524C407.589 59.9254 410.75 59.1619 414.265 59.1619C415.899 59.1619 417.586 59.2862 419.326 59.5348C421.101 59.7479 422.397 59.9964 423.214 60.2805V42.5426C422.326 42.3651 421.208 42.2408 419.858 42.1697C418.544 42.0632 417.355 42.0099 416.289 42.0099C411.602 42.0099 407.429 43.3061 403.772 45.8984C400.15 48.4553 397.593 52.0952 396.101 56.8182H395.249V43.1818H376.552ZM447.57 121.325C453.43 124.84 460.355 126.598 468.345 126.598C476.335 126.598 483.259 124.84 489.119 121.325C494.978 117.809 499.506 112.891 502.702 106.57C505.933 100.249 507.549 92.8622 507.549 84.4105C507.549 75.9588 505.933 68.5547 502.702 62.1982C499.506 55.8416 494.978 50.9055 489.119 47.3899C483.259 43.8743 476.335 42.1165 468.345 42.1165C460.355 42.1165 453.43 43.8743 447.57 47.3899C441.711 50.9055 437.166 55.8416 433.934 62.1982C430.738 68.5547 429.14 75.9588 429.14 84.4105C429.14 92.8622 430.738 100.249 433.934 106.57C437.166 112.891 441.711 117.809 447.57 121.325ZM479.318 107.582C476.406 109.961 472.784 111.151 468.451 111.151C464.012 111.151 460.319 109.961 457.372 107.582C454.46 105.167 452.276 101.935 450.82 97.8871C449.399 93.8388 448.689 89.3288 448.689 84.3572C448.689 79.3501 449.399 74.8224 450.82 70.7741C452.276 66.6903 454.46 63.4411 457.372 61.0263C460.319 58.6115 464.012 57.4041 468.451 57.4041C472.784 57.4041 476.406 58.6115 479.318 61.0263C482.23 63.4411 484.396 66.6903 485.816 70.7741C487.272 74.8224 488 79.3501 488 84.3572C488 89.3288 487.272 93.8388 485.816 97.8871C484.396 101.935 482.23 105.167 479.318 107.582ZM538.884 121.484C544.849 124.893 551.934 126.598 560.137 126.598C566.494 126.598 572.14 125.639 577.076 123.722C582.012 121.768 586.06 119.034 589.221 115.518C592.417 111.967 594.583 107.812 595.719 103.054L577.715 101.03C576.863 103.338 575.602 105.273 573.933 106.836C572.264 108.398 570.293 109.588 568.021 110.405C565.748 111.186 563.209 111.577 560.403 111.577C556.213 111.577 552.555 110.689 549.43 108.913C546.305 107.102 543.873 104.51 542.133 101.136C540.451 97.8423 539.582 93.9183 539.526 89.3643H596.518V83.4517C596.518 76.2784 595.524 70.0994 593.536 64.9148C591.547 59.6946 588.812 55.3977 585.332 52.0241C581.888 48.6506 577.911 46.1648 573.401 44.5668C568.926 42.9332 564.168 42.1165 559.125 42.1165C551.312 42.1165 544.512 43.9098 538.724 47.4964C532.935 51.0476 528.425 56.0192 525.194 62.4112C521.998 68.7678 520.4 76.1541 520.4 84.5703C520.4 93.1285 521.998 100.568 525.194 106.889C528.39 113.175 532.953 118.04 538.884 121.484ZM539.562 76.3672C539.747 73.1617 540.569 70.1965 542.026 67.4716C543.695 64.3821 546.021 61.8963 549.004 60.0142C551.987 58.0966 555.45 57.1378 559.391 57.1378C563.085 57.1378 566.316 57.9723 569.086 59.6413C571.891 61.3104 574.075 63.6009 575.638 66.5128C577.2 69.3892 577.999 72.674 578.035 76.3672H539.562Z"
      />
    </svg>
  );
};
