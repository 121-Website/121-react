import { useState } from "react";

export default function AnimatedHeader2() {
    const [trigger, setTrigger] = useState(false);

    return (
        <div onMouseEnter={() => { setTrigger(true) }} onMouseLeave={() => { setTrigger(false) }}>
            <svg width="649" height="382" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    className={`draw stroke-60 ${trigger ? "animate-redraw" : "animate-draw"}`}
                    d="M532.99 71.2204C553.671 71.2204 572.622 71.2204 587.944 71.2204C608.967 71.2204 625.997 54.1768 625.997 33.1534C625.997 18.7972 625.997 4.78754 625.997 0.0820312V381.505"
                    stroke="#D481AA" strokeWidth="45.6794" />
                <path
                    d="M352.648 310.079C355.028 310.181 356.709 309.415 358.336 307.721C395.151 269.403 432.137 231.248 468.834 192.817C490.321 170.315 498.686 142.97 494.06 111.468C490.678 88.4352 480.162 68.6411 462.853 52.6649C438.863 30.5207 410.748 21.4602 379.094 25.7885C354.912 29.0949 335.167 40.4447 319.821 58.9135C305.441 76.2196 298.539 96.5583 298.223 119.387C298.215 120.057 298.164 121.36 298.16 122.554H310.482C310.513 121.469 310.534 120.321 310.592 119.74C311.137 114.225 311.256 108.61 312.32 103.215C321.136 58.5095 363.875 29.9784 409.57 38.4878C457.722 47.4555 491.663 94.608 481.01 144.649C477.676 160.308 470.066 173.613 459.091 184.998C420.199 225.341 381.34 265.714 342.471 306.079C341.517 307.071 340.594 308.093 339.231 309.557C340.354 309.821 340.76 309.994 341.161 309.997C344.99 310.027 348.82 309.916 352.648 310.079Z"
                    fill="#F1EDE5" />
                <path
                    d="M440.794 167.866C396.544 213.761 352.335 259.693 308.111 305.612C307.442 306.308 306.739 306.974 306.117 307.71C305.673 308.235 305.338 308.855 304.717 309.792C306.107 309.896 307.056 310.019 308.002 310.028C310.955 310.055 313.915 309.859 316.859 310.088C319.967 310.33 322.102 309.236 324.216 307.035C364.653 264.918 405.17 222.88 445.67 180.825C447.755 178.66 449.872 176.526 451.899 174.308C464.869 160.117 471.154 143.153 470.682 123.636C470.344 109.671 466.421 96.4628 458.373 84.6807C441.009 59.2644 416.973 47.4433 386.963 49.7048C368.028 51.1318 352.333 59.6003 340.088 73.7532C329.108 86.4454 323.417 101.445 322.965 118.537C322.945 119.288 322.954 121.09 322.967 122.554H335.231C335.301 119.957 335.274 117.146 335.489 114.982C338.928 80.4145 370.005 56.8758 404.749 62.4874C440.885 68.3238 465.414 104.87 456.664 139.822C453.943 150.69 448.477 159.898 440.794 167.866Z" fill="#F1EDE5" />
                <path
                    d="M411.499 297.894C409.641 297.893 407.779 297.837 405.92 297.734C405.229 297.696 404.542 297.447 403.344 297.18C404.52 295.908 405.358 294.971 406.229 294.066C431.319 268.008 456.414 241.957 481.501 215.897C484.478 212.804 487.549 209.789 490.35 206.54C512.842 180.449 522.641 149.92 519.226 114.822C517.532 97.4201 512.419 80.9153 503.371 65.7138C480.061 26.5485 445.876 4.42559 401.009 0.467486C376.234 -1.71825 353.045 3.81295 331.931 16.1935C309.637 29.2659 293.372 47.7696 283.124 71.5785C277.389 84.9 274.402 98.9376 273.72 113.552C273.607 115.948 273.497 120.742 273.457 122.554H285.891C285.964 121.187 286.033 120.076 286.075 118.967C286.19 115.918 286.167 112.853 286.419 109.821C288.511 84.7184 297.994 62.929 315.3 45.242C342.31 17.6359 375.803 7.25122 414.672 14.7109C474.361 26.1659 516.526 84.4357 506.048 145.872C502.33 167.674 492.586 186.327 477.449 202.051C444.174 236.617 410.887 271.172 377.605 305.731C376.935 306.427 376.22 307.087 375.613 307.834C375.192 308.352 374.52 309.685 374.52 309.685L530.865 309.367L530.866 297.9C530.866 297.9 449.673 297.902 411.499 297.894Z" fill="#F1EDE5" />
                <path
                    d="M482.033 322.411H457.42H432.479H407.866H383.253H358.312H333.699C325.385 322.411 317.072 322.426 308.757 322.406C300.592 322.387 292.428 322.496 283.779 322.323C283.918 320.247 283.869 318.629 284.158 317.086C284.982 312.684 287.282 309.117 290.335 305.959C302.573 293.303 314.769 280.606 326.981 267.925C362.128 231.427 397.277 194.932 432.421 158.432C441.888 148.599 446.519 136.781 445.956 122.816C444.775 93.5294 418.369 70.8589 389.381 74.2682C365.719 77.0512 348.243 96.1191 347.527 119.968C347.511 120.534 347.563 121.613 347.631 122.553H359.665C359.737 121.589 359.832 120.274 359.897 119.524C361.787 97.7661 380.501 83.1253 401.74 86.7853C429.327 91.5406 443.044 123.977 426.677 145.841C425.075 147.982 423.211 149.938 421.353 151.868C374.23 200.826 327.107 249.786 279.935 298.696C273.865 304.989 270.887 312.377 271.333 321.303C271.692 328.519 272.366 381.413 272.366 381.413H530.867V371.561H285.645C285.503 367.744 285.367 364.485 285.266 361.227C285.224 359.854 286.037 359.31 287.318 359.295C288.193 359.285 289.067 359.262 289.942 359.262C300.224 359.259 310.507 359.26 320.79 359.26C389.933 359.26 530.867 359.054 530.867 359.054V347.129C530.867 347.129 410.276 347.127 351.643 347.127C330.968 347.127 310.293 347.134 289.617 347.115C288.124 347.113 286.623 346.929 284.875 346.814C284.478 342.753 284.121 339.006 284.655 334.788H334.316H383.87H433.096C449.615 334.788 466.133 334.795 482.65 334.786C499.131 334.776 530.867 334.748 530.867 334.748V322.411H506.974H482.033Z" fill="#F1EDE5" />
                <path

                    d="M244.388 42.0078C247.715 42.0333 250.918 38.8357 250.897 35.511C250.875 32.2944 247.835 29.1956 244.578 29.0726C241.306 28.949 238.018 32.1076 237.944 35.4465C237.87 38.7493 241.046 41.9824 244.388 42.0078ZM252.495 49.9099C252.503 53.5256 255.295 56.337 258.861 56.3204C262.228 56.305 265.153 53.412 265.204 50.0465C265.259 46.4763 262.456 43.6294 258.865 43.6064C255.108 43.5827 252.487 46.1765 252.495 49.9099ZM171.434 187.497C156.493 175.508 139.95 166.901 120.881 163.687C109.88 161.833 98.8375 161.964 87.8331 163.532C74.4585 165.438 61.8715 169.586 50.7294 177.478C34.4782 188.988 24.8352 204.679 22.2 224.331C20.0249 240.552 23.2373 255.757 33.0169 269.242C33.1612 269.441 33.2198 269.703 33.3179 269.935C33.1949 270.036 33.0737 270.138 32.9543 270.243C27.8506 266.23 23.9002 261.158 20.1609 255.95C10.4304 242.399 4.12686 227.339 1.87075 210.824C-2.30085 180.286 5.08076 152.717 24.8819 128.968C38.489 112.649 55.3457 100.018 73.4224 89.003C91.8196 77.7928 111.504 69.2261 131.328 60.9503C149.891 53.2009 168.561 45.6791 186.016 35.5452C197.612 28.8136 208.464 21.1032 217.972 11.5749C225.67 3.86031 234.892 -0.291756 245.945 0.0163529C262.452 0.476446 277.281 13.9262 279.526 30.2293C281.255 42.7814 277.073 53.1453 268.401 61.9586C247.002 83.706 233.963 109.696 228.579 139.661C227.018 148.344 226.348 157.087 226.308 165.859C226.276 173.023 226.914 180.19 227.934 187.301C222.25 188.414 216.569 189.526 210.887 190.639C205.011 184.4 197.944 182.327 189.545 184.167C183.553 185.48 177.474 186.401 171.434 187.497Z" fill="#2B1A18" />
                <path d="M171.436 187.496C177.475 186.4 183.554 185.479 189.546 184.166C197.945 182.326 205.012 184.399 210.887 190.637C215.876 197.229 216.468 204.325 214.015 212.134C209.982 224.971 206.306 237.922 202.555 250.848C200.706 257.22 198.517 263.498 197.138 270.004L197.196 269.99C196.835 269.96 196.813 270.201 196.821 270.463C196.595 271.186 196.359 271.907 196.145 272.634C191.242 289.269 186.319 305.898 181.475 322.551C180.974 324.273 180.27 324.958 178.38 324.895C174.083 324.753 169.777 324.893 165.476 324.918C158.776 324.876 152.077 324.835 145.378 324.793C148.171 314.464 150.964 304.136 153.759 293.808C154.815 289.903 155.873 285.998 156.93 282.096C157.792 279.101 158.77 276.132 159.492 273.101C160.528 268.751 157.089 265.525 152.809 266.846C139.282 271.023 125.779 275.276 112.267 279.5C102.879 281.709 93.4089 283.319 83.7671 284.016C73.4428 284.762 63.5076 284.041 54.4607 278.305C40.8956 269.706 33.8239 253.55 36.9328 238.034C40.1327 222.066 52.4186 210.078 68.3953 207.084C102.515 200.689 136.619 194.206 170.728 187.754C170.971 187.708 171.2 187.584 171.436 187.496Z" fill="#F2BF57" />
                <path d="M197.136 270.003C198.515 263.497 200.704 257.219 202.553 250.847C206.304 237.922 209.981 224.971 214.013 212.132C216.466 204.324 215.875 197.228 210.886 190.636C216.568 189.524 222.25 188.412 227.934 187.299C234.146 186.592 240.242 185.22 246.357 183.999C262.303 180.816 274.974 194.541 270.382 210.122C266.06 224.783 261.746 239.447 257.441 254.113C257.276 254.673 257.228 255.266 257.125 255.843C255.058 261.835 253.314 267.922 251.763 274.065C249.276 280.887 247.525 287.933 245.44 294.878C242.627 304.25 239.885 313.646 237.162 323.045C236.766 324.409 236.077 324.907 234.643 324.873C230.841 324.782 227.035 324.887 223.232 324.821C221.792 324.795 221.208 325.216 220.971 326.758C219.86 333.999 224.617 339.876 231.947 340.054C235.519 340.141 238.8 341.068 241.618 343.289C243.822 345.027 245.06 347.219 244.192 350.153C241.838 350.195 239.483 350.277 237.128 350.273C222.719 350.248 208.31 350.204 193.9 350.165C193.664 349.366 194.099 348.675 194.31 347.969C201.641 323.504 208.19 298.82 215.034 274.218C215.647 272.014 215.972 269.84 214.154 268.063C212.235 266.187 210.021 266.349 207.561 267.091C204.11 268.132 200.805 269.737 197.136 270.003Z" fill="#D481AA" />
                <path d="M92.2968 360.399H223.891L229.13 360.289C235.116 360.289 240.659 360.351 246.183 360.351C258.262 360.351 267.798 356.691 277.539 351.249C279.766 350.005 280.422 347.766 279.436 345.618C278.432 343.43 276.073 342.443 273.687 343.364C272.277 343.908 270.898 344.589 269.608 345.379C261.735 350.205 253.688 350.154 244.194 350.154C241.84 350.197 239.485 350.278 237.13 350.274C222.72 350.249 208.311 350.204 193.902 350.166C193.147 350.21 192.383 350.201 191.636 350.307C189.625 350.592 188.471 350.334 188.545 347.721C188.611 345.395 186.741 343.846 184.871 342.581C182.579 341.03 180.013 340.042 177.285 340.119C168.555 340.366 163.379 333.689 165.475 324.918C158.776 324.877 152.077 324.835 145.378 324.793C143.054 332.512 140.631 340.204 138.474 347.968C137.922 349.954 137.075 350.344 135.194 350.339C113.133 350.273 91.0715 350.298 69.0106 350.29C68.1715 350.29 55.1114 349.548 49.8582 346.971C47.5152 345.821 45.2224 344.563 42.8439 343.494C40.3813 342.388 37.894 343.281 36.8118 345.489C35.7343 347.686 36.4209 350.051 38.7426 351.306C47.4383 356.006 56.2351 360.447 66.4878 360.437H86.7911" fill="#2B1A18" />
                <path d="M112.266 279.501C125.778 275.277 139.281 271.024 152.808 266.847C157.088 265.525 160.527 268.752 159.491 273.102C158.769 276.132 157.791 279.102 156.928 282.097C149.306 282.933 141.719 284.066 134.024 284.275C126.34 284.484 119.09 283.048 112.266 279.501Z" fill="#D481AA" />
                <path d="M251.764 274.067C253.315 267.923 255.059 261.836 257.126 255.845C261.196 260.561 265.185 265.343 269.591 269.764C271.304 271.483 271.828 273.689 270.637 276.049C269.469 278.364 267.531 279.322 265.037 279.124C260.131 278.734 255.715 276.993 251.764 274.067Z" fill="#2B1A18" />
                <path
                    d="M197.194 269.99C197.07 270.148 196.945 270.306 196.82 270.463C196.812 270.2 196.833 269.96 197.194 269.99Z" fill="#336848" />
                <path d="M235.392 371.214C235.392 376.897 230.785 381.505 225.102 381.505C219.418 381.505 214.811 376.897 214.811 371.214C214.811 365.531 219.418 360.924 225.102 360.924C230.785 360.924 235.392 365.531 235.392 371.214Z" fill="#2B1A18" />
                <path d="M91.322 371.214C91.322 376.897 86.7146 381.505 81.0314 381.505C75.3477 381.505 70.7402 376.897 70.7402 371.214C70.7402 365.531 75.3477 360.924 81.0314 360.924C86.7146 360.924 91.322 365.531 91.322 371.214Z" fill="#2B1A18" />
            </svg>
        </div>
    )
}