import React from 'react';
import styles from "./Lama.module.scss"
import Link from "next/link";

const Lama = () => {
  return (
    <>
      <div className={styles.lama}>
          <svg className={styles.lama__position_1} fill='yellow' viewBox="54.524 30.559 89.57 140.482" height="25"
               width="29"
               xmlns="http://www.w3.org/2000/svg"
               data-type="shape" role="presentation" aria-hidden="true">
            <g>
              <path
                d="M133.575 171.041c-9.224 0-23.331-2.656-37.532-15.53-12.247-11.101-12.913-19.843-11.314-25.221a16.399 16.399 0 0 1 1.819-4.017c-5.922-.54-11.936-2.363-17.254-6.207-11.119-8.035-12.739-17.474-12.14-23.976.351-3.81 1.59-7.668 3.56-11.381-11.78-13.412-3.206-52.265-2.78-54.15l3.902.88c-2.603 11.543-6.458 39.173 1.07 49.634C67.51 74.28 74.534 68.24 82.91 64.277c5.551-2.629 9.437-2.785 11.547-.469 2.118 2.327 1.663 6.475-1.25 11.381-2.478 4.173-6.26 8.034-10.377 10.594-5.122 3.185-10.462 4.226-15.443 3.01a12.643 12.643 0 0 1-3.555-1.454c-1.482 2.999-2.416 6.08-2.695 9.117-.722 7.838 2.909 14.881 10.5 20.367 5.775 4.174 12.38 5.473 18.122 5.567 5.134-4.853 12.92-7.677 19.884-8.791 3.148-.506 6.504-.717 7.513 1.537.429.958.48 2.476-1.714 4.26-3.604 2.933-13.266 6.829-23.995 7.044-1.375 1.549-2.359 3.226-2.882 4.987-1.823 6.135 1.692 13.438 10.166 21.119 21.988 19.933 43.96 13.437 44.179 13.371l1.184 3.82c-.396.124-4.374 1.303-10.519 1.304zm-22.332-53.63c-.293.037-.616.082-.969.139-4.972.796-9.414 2.309-12.991 4.324.913-.137 1.757-.29 2.518-.446 5.269-1.081 9.171-2.728 11.442-4.017zM65.821 83.86a8.664 8.664 0 0 0 2.514 1.048c8.199 2.001 17.162-4.566 21.433-11.76 2.119-3.569 2.288-6.035 1.731-6.646-.41-.45-2.375-.739-6.878 1.391-7.989 3.781-14.625 9.554-18.8 15.967z"></path>
            </g>
          </svg>
          <svg className={styles.lama__position_2} fill='#F80DB4' xmlns="http://www.w3.org/2000/svg" width="7"
               height="7" viewBox="0 0 200 200">
            <g>
              <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
            </g>
          </svg>
          <svg className={styles.lama__position_3} fill='#4BDDF7' xmlns="http://www.w3.org/2000/svg" width="6"
               height="6" viewBox="0 0 200 200">
            <g>
              <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
            </g>
          </svg>
          <svg className={styles.lama__position_4} fill='yellow' xmlns="http://www.w3.org/2000/svg" width="8"
               height="8" viewBox="0 0 200 200">
            <g>
              <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
            </g>
          </svg>
          <svg className={styles.lama__position_5} xmlns="http://www.w3.org/2000/svg" fill='#F80DB4' width="11"
               height="11"
               viewBox="0 0 334.805 289.949">
            <g>
              <path d="M167.402 0l167.403 289.949H0L167.402 0z"></path>
            </g>
          </svg>


                  <svg className={styles.lama__position_6} fill='#F80DB4' viewBox="54.524 30.559 89.57 140.482" height="25"
               width="29"
               xmlns="http://www.w3.org/2000/svg"
               data-type="shape" role="presentation" aria-hidden="true">
            <g>
              <path
                d="M133.575 171.041c-9.224 0-23.331-2.656-37.532-15.53-12.247-11.101-12.913-19.843-11.314-25.221a16.399 16.399 0 0 1 1.819-4.017c-5.922-.54-11.936-2.363-17.254-6.207-11.119-8.035-12.739-17.474-12.14-23.976.351-3.81 1.59-7.668 3.56-11.381-11.78-13.412-3.206-52.265-2.78-54.15l3.902.88c-2.603 11.543-6.458 39.173 1.07 49.634C67.51 74.28 74.534 68.24 82.91 64.277c5.551-2.629 9.437-2.785 11.547-.469 2.118 2.327 1.663 6.475-1.25 11.381-2.478 4.173-6.26 8.034-10.377 10.594-5.122 3.185-10.462 4.226-15.443 3.01a12.643 12.643 0 0 1-3.555-1.454c-1.482 2.999-2.416 6.08-2.695 9.117-.722 7.838 2.909 14.881 10.5 20.367 5.775 4.174 12.38 5.473 18.122 5.567 5.134-4.853 12.92-7.677 19.884-8.791 3.148-.506 6.504-.717 7.513 1.537.429.958.48 2.476-1.714 4.26-3.604 2.933-13.266 6.829-23.995 7.044-1.375 1.549-2.359 3.226-2.882 4.987-1.823 6.135 1.692 13.438 10.166 21.119 21.988 19.933 43.96 13.437 44.179 13.371l1.184 3.82c-.396.124-4.374 1.303-10.519 1.304zm-22.332-53.63c-.293.037-.616.082-.969.139-4.972.796-9.414 2.309-12.991 4.324.913-.137 1.757-.29 2.518-.446 5.269-1.081 9.171-2.728 11.442-4.017zM65.821 83.86a8.664 8.664 0 0 0 2.514 1.048c8.199 2.001 17.162-4.566 21.433-11.76 2.119-3.569 2.288-6.035 1.731-6.646-.41-.45-2.375-.739-6.878 1.391-7.989 3.781-14.625 9.554-18.8 15.967z"></path>
            </g>
          </svg>
<svg className={styles.lama__position_7} xmlns="http://www.w3.org/2000/svg" fill='#4BDDF7' width="11"
               height="11"
               viewBox="0 0 334.805 289.949">
            <g>
              <path d="M167.402 0l167.403 289.949H0L167.402 0z"></path>
            </g>
          </svg>
<svg className={styles.lama__position_8} xmlns="http://www.w3.org/2000/svg" fill='#F80DB4' width="11"
               height="11"
               viewBox="0 0 334.805 289.949">
            <g>
              <path d="M167.402 0l167.403 289.949H0L167.402 0z"></path>
            </g>
          </svg>
          <svg className={styles.lama__position_9} fill='#4BDDF7' xmlns="http://www.w3.org/2000/svg" width="7"
               height="7" viewBox="0 0 200 200">
            <g>
              <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
            </g>
          </svg>
          <svg className={styles.lama__position_10} fill='yellow' xmlns="http://www.w3.org/2000/svg" width="7"
               height="7" viewBox="0 0 200 200">
            <g>
              <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
            </g>
          </svg>




        <Link href={'/'}>
          <div>
            <svg className={styles.lama__img}
                 viewBox="34.653 21.75 130.596 156.501" height="120" width="120" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M157.345 70.974c2.471.866 7.679 5.48 7.065 8.914h-47.983c2.382-6.649 3.421-12.355 4.423-12.355.01-.031.213-.922 1.472-2.258h24.447c2.684 1.002 3.241 1.551 5.925 2.856 1.405.688 3.32 2.029 4.651 2.843z"
                  fill="#FFF766"></path>
                <path
                  d="M139.227 111.723H56.958l.563-.458.173-.478c1.352-2.004 2.927-3.334 5.028-4.545 0 .031 1.799-.828 1.799-.87 1.956-.835 4.177-1.296 6.372-1.348l2.644-.065c1.716 0 3.638.098 5.396.109 3.027.021 6.014.02 8.864-.022a59.016 59.016 0 0 1 3.836.065c1.3.073 2.656.053 3.988.022 2.133-.042 4.198-.306 6.372-1.131.01.125 1.365-.935 1.365-.935.364-.209.837-.304 1.17-.544 1.862-1.357 2.93-2.409 4.335-4.413h30.363c-.094.47-.111 1.019-.173 1.52-.28 4.593-.096 8.751.174 13.093z"
                  fill="#FFF766"></path>
                <path
                  d="M142.847 140.949H53.816c.073-6.701.131-12.598.152-14.613h87.254c.239 1.848.307 3.778.567 5.814.322 2.422.488 5 .831 7.776.041.313.185.647.227 1.023z"
                  fill="#FFF766"></path>
                <path
                  d="M72.66 154.8l.157 11.45c0 1.117.283 2.181-.092 3.163H53.968c-.375-.981-.293-2.046-.293-3.163 0-1.138-.182-5.73-.13-11.45H72.66z"
                  fill="#FFF766"></path>
                <path
                  d="M93.986 169.653H76.399c-.114-.271-.144-.416-.228-.708l-.358-1.011c-.302-1.106-.235-1.165-1.723-6.948l-.254-2.992V154.8h18.036l2.438 9.382c.5 1.837.352 3.728-.324 5.471z"
                  fill="#FFF766"></path>
                <path
                  d="M123.471 154.8l-1.008 13.068c-.042.543-.06 1.044-.195 1.545h-18.855c-.239-.908-.113-1.966-.04-2.947.125-1.806.516-5.653 1.015-11.666h19.083z"
                  fill="#FFF766"></path>
                <path
                  d="M144.732 166.172c0 1.117.052 2.26-.322 3.241h-17.947a8.576 8.576 0 0 1-.585-3.11V154.8h18.432c.499 5.187.422 9.827.422 11.372z"
                  fill="#FFF766"></path>
                <path
                  d="M141.948 69.216l-3.076 2.34c.423.708.645 1.469.645 2.215v.25h-2.362v-.25c0-1.102-1.225-2.433-2.746-2.433-1.515 0-2.735 1.331-2.735 2.433v.25h-2.373v-.25c0-.77.249-1.586.705-2.323l-2.907-2.246 1.45-1.878 3.146 2.434c.471-.3.983-.52 1.528-.654v-3.683h2.373v3.681a5.006 5.006 0 0 1 1.636.717l3.28-2.494 1.436 1.891zm22.718 13.88c-1.037 2.725-3.225 4.895-5.853 5.806-2.213.786-4.482.591-6.676.402-1.028-.095-3.034-.216-3.054-.218l-.084-.005a6.753 6.753 0 0 0-4.566 1.339c-2.027 1.525-3.303 4.254-3.793 8.11-.642 10.811.511 19.676 2.256 33.094l.068.531c.293 2.271.603 4.68.932 7.259.686 5.457 2.52 23.342 2.52 26.836 0 6.089-4.933 11.043-10.996 11.043-6.069 0-11.007-4.954-11.007-11.043v-5.743l-.541 7.494a10.98 10.98 0 0 1-3.779 7.553 10.91 10.91 0 0 1-7.994 2.667 10.913 10.913 0 0 1-7.515-3.785 10.97 10.97 0 0 1-2.662-8.027c.136-1.98.513-6.544 1.083-13.454l.393-4.763H91.886l4.076 15.185a11.051 11.051 0 0 1-1.085 8.382 10.963 10.963 0 0 1-6.685 5.149 11.01 11.01 0 0 1-8.346-1.089 10.942 10.942 0 0 1-5.131-6.708l-.239-.875a78.616 78.616 0 0 1-.302-1.118c-.443 5.679-5.195 10.164-10.973 10.164-6.063 0-10.996-4.949-10.996-11.032 0-3.667.381-40.782.385-40.923l.104-4.716c.131-3.121.96-6.157 2.401-8.802-.673-.322-2.127-.901-3.173-.49-.729.292-1.249 1.103-1.543 2.411-.353 1.581-.514 3.28-.494 5.193.022 3.478-1.598 4.989-2.961 5.645-1.432.687-3.138.386-4.643.123-1.1-.198-2.413-.434-2.898-.066-.053.041-.227.217-.266.83-.039.857.241 1.764.537 2.724l.024.078c.402 1.263.818 2.57.623 4.042-.27 2.077-1.803 4.099-4.208 5.546l-.214.129-1.226-2.037.215-.129c.657-.392 2.819-1.825 3.084-3.816.119-.948-.197-1.956-.532-3.023-.343-1.083-.732-2.312-.666-3.636.055-1.151.467-2.053 1.189-2.607 1.317-.994 3.121-.668 4.711-.382l.077.014c1.192.207 2.427.423 3.17.06 1.078-.512 1.618-1.682 1.607-3.479-.02-2.055.159-3.927.547-5.722.479-2.13 1.489-3.51 3.003-4.105 1.916-.757 4.083.06 5.319.693a17.91 17.91 0 0 1 6.34-5.463c.179-.11.373-.208.579-.306l.061-.024a18.786 18.786 0 0 1 7.624-1.785l2.654-.052a76.615 76.615 0 0 1 1.915-.016c-2.255-1.717-4.708-4.065-4.905-6.266-.101-1.074.303-2.036 1.168-2.78.864-.744 1.935-1.05 3.101-.882 2.813.403 5.818 3.663 7.6 5.931V21.75h2.373v76.391c2.051-2.605 4.9-5.525 7.6-5.913 1.167-.169 2.236.137 3.101.882.865.753 1.269 1.715 1.168 2.781-.207 2.254-2.773 4.666-5.105 6.415l.049.002c1.188.07 2.529.147 3.823.115 2.298-.041 4.722-.235 6.892-1.37a9.009 9.009 0 0 0 1.31-.815c3.222-2.365 5.768-5.917 7.361-10.27 3.25-8.852 6.765-18.844 8.125-22.729l.104-.296c.011-.033.331-.992 1.24-2.223.244-.628 1.36-3.413 2.729-6.828 2.374-5.921 5.509-13.74 6.175-15.421l.174-.475a4.195 4.195 0 0 1 3.813-2.47c2.295 0 4.162 1.882 4.162 4.196l.087 1.64a4.172 4.172 0 0 1 3.138-1.441c2.3 0 4.172 1.882 4.172 4.195l-.104 14.93c2.654.99 5.419 2.18 8.222 3.539 1.995.968 3.466 1.774 4.77 2.613.069.04.149.097.229.154 2.649 1.711 4.55 3.583 5.801 5.713 1.458 2.463 1.727 5.391.743 8.031zM93.67 163.999l-4.237-15.806H74.208v9.53l.772 3.007c1.487 5.781 1.487 5.781 1.788 6.885l.23.891c1.243 4.601 5.992 7.341 10.584 6.104a8.585 8.585 0 0 0 5.237-4.038 8.63 8.63 0 0 0 .851-6.573zm12.102-15.807l-.65 7.917c-.437 5.298-.725 8.798-.839 10.471-.345 4.764 3.238 8.918 7.987 9.263a8.555 8.555 0 0 0 6.273-2.089 8.607 8.607 0 0 0 2.967-5.925l1.417-19.637h-17.155zm47.993-61.15c1.409.094 2.893.098 4.27-.386 1.979-.685 3.63-2.331 4.416-4.403.734-1.957.528-4.135-.563-5.974-.857-1.455-2.085-2.773-3.749-4.028-3.453 3.357-4.681 6.372-4.681 11.426-.001 1.345.091 2.365.307 3.365zm-80.391 7.876c-.35.301-.38.553-.363.76.158 1.652 3.605 4.58 6.792 6.516.913.009 1.815.017 2.716.012v-.253c-.546-.717-5.406-7.005-7.941-7.372-.484-.072-.854.032-1.204.337zm5.289 9.653c-1.679-.01-3.356-.02-4.996-.02l-2.626.052c-2.092.05-4.104.469-5.981 1.245.962 9.831 8.827 17.22 18.366 17.22 10.17 0 18.444-8.606 18.444-19.185v-.012c-2.14.749-4.289.891-6.299.93-1.373.031-2.766-.046-3.993-.115l-.306-.016c-1.102-.058-2.242-.121-3.348-.099-2.912.042-6.159.021-9.025 0h-.236zm14.172-9.99c-2.546.368-7.398 6.656-7.943 7.373v.261c.922 0 1.826-.001 2.706-.02 3.192-1.932 6.646-4.859 6.803-6.518.017-.205-.013-.458-.362-.758-.351-.306-.723-.41-1.204-.338zm45.099-43.703a756.389 756.389 0 0 0-3.03 9.146c.89.154 1.74.346 2.59.584 1.668.462 3.363.994 5.042 1.58l.102-14.075c0-1-.807-1.814-1.799-1.814a1.82 1.82 0 0 0-1.627 1.028l-.014.042c-.016.044-.033.095-.054.145l-.079.209a77.391 77.391 0 0 0-1.1 3.082l-.268-.007.237.08zm12.942 32.799c0-5.529 1.429-9.173 5.081-12.894-1.363-.815-2.768-1.523-3.859-2.058-5.091-2.466-10.218-4.424-15.239-5.819-12.21-3.374-15.271 4.729-15.299 4.812-.022.067-4.285 12.277-8.243 23.069-1.766 4.81-4.595 8.741-8.18 11.367-.33.238-.634.439-.928.614.021.318.031.678.031 1.115 0 11.891-9.338 21.564-20.816 21.564-10.342 0-19.137-7.905-20.609-18.452-4.641 2.833-7.528 7.922-7.749 13.692l-.104 4.682c-.004.139-.385 37.162-.385 40.879 0 4.771 3.869 8.653 8.624 8.653 4.761 0 8.634-3.882 8.634-8.653v-20.437h54.948v20.437c0 4.777 3.874 8.664 8.634 8.664 4.755 0 8.624-3.887 8.624-8.664 0-3.266-1.738-20.461-2.505-26.533a800.932 800.932 0 0 0-.999-7.774c-1.764-13.58-2.926-22.527-2.259-33.637.58-4.596 2.181-7.894 4.76-9.819 2.546-1.901 5.214-1.789 6.089-1.756l.372.015c.541.024 1.064.048 1.597.083-.151-.956-.22-1.944-.22-3.15zm-23.258-30.203a9583.03 9583.03 0 0 0-3.122 7.791c2.261-1.213 4.95-1.726 8.009-1.533a703.406 703.406 0 0 1 3.078-9.312l-.331-6.633c0-1.042-.808-1.881-1.8-1.881-.695 0-1.333.402-1.625 1.025l-.15.403c-.481 1.215-2.232 5.583-4.059 10.14z"
                  fill="#161416"></path>
              </g>
            </svg>
          </div>
        </Link>
        <span className={styles.lama__title}>Wish Lister</span>
      </div>
    </>

  )

};

export default Lama;
