import React from "react";
import { Link } from "react-router-dom";
import fondo from "../../img-pk/fondopoke.jpg";
import ho_oh from "../../img-pk/gifsPokes/electrico.gif";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.containerLanding}>
      <div>
        <div className={style.imagenes}>
          <img src={fondo} alt="pueblo paletta" className={style.fondoPueblo} />
          <Link to="/home" className={style.hooh}>
            <img src={ho_oh} className={style.hooh} alt="ho-oh" />
            <p className={style.atrapaButton}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_2)">
                  <path
                    d="M768.552 244.301C748.409 196.67 719.579 153.884 682.859 117.153C646.114 80.4336 603.319 51.589 555.71 31.4478C506.396 10.5863 454.002 0.00158691 399.999 0.00158691C346.007 0.00158691 293.616 10.5847 244.299 31.4478C196.668 51.589 153.883 80.4352 117.15 117.153C80.432 153.884 51.5874 196.67 31.4447 244.301C10.5847 293.618 0 346.01 0 400.001C0 454.002 10.5831 506.396 31.4462 555.712C51.5874 603.321 80.4336 646.116 117.152 682.836C153.883 719.58 196.668 748.411 244.301 768.552C293.618 789.403 346.009 799.998 400.001 799.998C454.004 799.998 506.398 789.403 555.712 768.552C603.321 748.409 646.116 719.579 682.861 682.836C719.58 646.116 748.411 603.319 768.554 555.712C789.404 506.396 800 454.002 800 400.001C799.998 346.01 789.403 293.618 768.552 244.301Z"
                    fill="#ED5564"
                  />
                  <path
                    d="M0.159363 411.231C1.52659 461.254 12.0238 509.815 31.4462 555.712C51.5874 603.321 80.4336 646.116 117.152 682.836C153.883 719.58 196.668 748.411 244.301 768.552C293.618 789.403 346.009 799.998 400.001 799.998C454.004 799.998 506.398 789.403 555.712 768.552C603.321 748.409 646.116 719.579 682.861 682.836C719.58 646.116 748.411 603.319 768.554 555.712C787.989 509.815 798.486 461.254 799.853 411.231H0.159363Z"
                    fill="#E6E9ED"
                  />
                  <path
                    d="M798.094 439.405C799.363 426.367 799.998 413.232 799.998 400.001C799.998 385.132 799.192 370.386 797.606 355.798C777.732 358.862 749.192 362.854 713.232 366.82C644.967 374.352 535.252 383.336 399.999 383.336C264.758 383.336 155.03 374.352 86.7791 366.82C50.8062 362.853 22.2772 358.862 2.40476 355.798C0.806274 370.386 0 385.133 0 400.001C0 413.232 0.634394 426.369 1.90474 439.405C66.7973 449.171 209.766 466.65 399.999 466.65C590.233 466.65 733.2 449.171 798.094 439.405Z"
                    fill="#434A54"
                  />
                  <path
                    d="M483.349 416.662C483.349 462.693 446.018 499.999 399.999 499.999C353.979 499.999 316.662 462.693 316.662 416.662C316.662 370.641 353.979 333.336 399.999 333.336C446.018 333.338 483.349 370.642 483.349 416.662Z"
                    fill="#E6E9ED"
                  />
                  <path
                    d="M399.999 266.664C317.284 266.664 250 333.961 250 416.664C250 499.366 317.286 566.649 399.999 566.649C482.713 566.649 549.997 499.365 549.997 416.664C549.997 333.961 482.714 266.664 399.999 266.664ZM399.999 483.35C363.245 483.35 333.336 453.418 333.336 416.664C333.336 379.908 363.243 350.001 399.999 350.001C436.767 350.001 466.648 379.908 466.648 416.664C466.648 453.416 436.767 483.35 399.999 483.35Z"
                    fill="#434A54"
                  />
                  <path
                    opacity="0.2"
                    d="M768.552 244.301C748.409 196.67 719.579 153.884 682.859 117.153C646.114 80.4336 603.319 51.589 555.71 31.4478C506.396 10.5863 454.002 0.00158691 399.999 0.00158691C394.421 0.00158691 388.866 0.123465 383.336 0.343784C431.445 2.29697 478.123 12.7348 522.362 31.4478C570.017 51.589 612.791 80.4352 649.508 117.153C686.228 153.884 715.087 196.67 735.225 244.301C756.099 293.618 766.646 346.01 766.646 400.002C766.646 454.004 756.099 506.398 735.225 555.713C715.085 603.322 686.228 646.117 649.508 682.837C612.791 719.582 570.017 748.413 522.362 768.554C478.123 787.256 431.444 797.705 383.336 799.658C388.866 799.878 394.419 800 399.999 800C454.002 800 506.396 789.404 555.71 768.554C603.319 748.411 646.114 719.58 682.859 682.837C719.579 646.117 748.409 603.321 768.552 555.713C789.403 506.398 799.998 454.004 799.998 400.002C799.998 346.01 789.403 293.618 768.552 244.301Z"
                    fill="white"
                  />
                  <path
                    opacity="0.1"
                    d="M31.4462 555.712C51.5874 603.321 80.4336 646.116 117.152 682.836C153.883 719.58 196.668 748.411 244.301 768.552C293.618 789.403 346.009 799.998 400.001 799.998C405.579 799.998 411.134 799.877 416.664 799.656C368.555 797.703 321.864 787.253 277.625 768.552C229.994 748.409 187.221 719.579 150.49 682.836C113.76 646.116 84.9259 603.319 64.7722 555.712C43.9091 506.398 33.3385 454.004 33.3385 400.001C33.3385 346.009 43.9091 293.616 64.7706 244.299C84.9244 196.668 113.758 153.881 150.489 117.164C187.22 80.4336 229.993 51.5875 277.624 31.4463C321.863 12.7332 368.553 2.2954 416.662 0.342222C411.132 0.123465 405.578 0.00158691 399.999 0.00158691C346.007 0.00158691 293.616 10.5847 244.299 31.4478C196.668 51.589 153.883 80.4352 117.15 117.166C80.432 153.884 51.5874 196.67 31.4447 244.301C10.5847 293.618 0 346.01 0 400.001C0 454.002 10.5847 506.398 31.4462 555.712Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2">
                    <rect width="800" height="800" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Welcome!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

