import Image from "next/image";

const Customer = () => {
  return (
    <div className="customer">
      <div className="customerImage">
        <Image src="/tesla.png" width={227} height={227} alt=""></Image>
      </div>
      <div className="customerText">
        <p className="customerDescription">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="customerTitle">Tim Smith</p>
        <p className="customerDescription">
          British Dragon Boat Racing Association
        </p>
        <div className="customerIcons">
          <div className="icons">
            <div className="icon">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.34882 0.807129C11.1931 0.807129 14.3095 3.92354 14.3095 7.76782V0.807129H21.2702C25.1145 0.807129 28.2309 3.92354 28.2309 7.76782C28.2309 11.6121 25.1145 14.7285 21.2702 14.7285C25.1145 14.7285 28.2309 17.845 28.2309 21.6892C28.2309 23.598 27.4625 25.3274 26.2182 26.5849L26.1922 26.6112L26.1691 26.6342C24.9113 27.8803 23.1806 28.6499 21.2702 28.6499C19.3728 28.6499 17.6527 27.8907 16.397 26.6595C16.3807 26.6435 16.3644 26.6273 16.3482 26.6112C16.333 26.5959 16.3178 26.5806 16.3027 26.5653C15.0699 25.3094 14.3095 23.5881 14.3095 21.6892C14.3095 25.5335 11.1931 28.6499 7.34882 28.6499C3.50453 28.6499 0.388123 25.5335 0.388123 21.6892V14.7285H7.34882C3.50453 14.7285 0.388123 11.6121 0.388123 7.76782C0.388123 3.92354 3.50453 0.807129 7.34882 0.807129ZM12.9174 7.76782C12.9174 10.8433 10.4243 13.3364 7.34882 13.3364V2.19927C10.4243 2.19927 12.9174 4.69239 12.9174 7.76782ZM26.8388 21.6892C26.8388 18.6138 24.3457 16.1207 21.2702 16.1207C18.1948 16.1207 15.7017 18.6138 15.7017 21.6892H26.8388ZM1.78026 16.1207V21.6892C1.78026 24.7647 4.27339 27.2578 7.34882 27.2578C10.4243 27.2578 12.9174 24.7647 12.9174 21.6892V16.1207H1.78026ZM15.7017 13.3364V2.19927H21.2702C24.3457 2.19927 26.8388 4.69239 26.8388 7.76782C26.8388 10.8433 24.3457 13.3364 21.2702 13.3364H15.7017Z"
                  fill="#5417D7"
                />
              </svg>
            </div>
            <div className="icon">
              <svg
                width="29"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.12133 3.38994L0.170532 10.2708C1.56082 11.6472 3.14901 12.8071 4.88058 13.7146C5.3592 14.9714 6.10942 16.1501 7.13123 17.1616C10.9755 20.9672 17.2084 20.9672 21.0526 17.1616C22.0744 16.1501 22.8247 14.9714 23.3033 13.7145C25.0348 12.8071 26.6231 11.6472 28.0133 10.2708L21.0681 3.39554C21.063 3.39039 21.0578 3.38525 21.0526 3.38011C17.2084 -0.425532 10.9755 -0.425532 7.13123 3.38011C7.12793 3.38339 7.12463 3.38666 7.12133 3.38994ZM20.3875 14.956C18.362 15.6327 16.2356 15.9793 14.0919 15.9793C11.9482 15.9793 9.82195 15.6327 7.79639 14.956C8.01586 15.2443 8.25816 15.5209 8.52337 15.7834C11.5988 18.828 16.585 18.828 19.6605 15.7834C19.9257 15.5209 20.1681 15.2443 20.3875 14.956ZM8.66613 4.62044C9.18839 4.962 9.74372 5.25429 10.3248 5.49258C11.5191 5.98231 12.7992 6.23437 14.0919 6.23437C15.3847 6.23437 16.6647 5.98231 17.8591 5.49258C18.4401 5.25429 18.9955 4.962 19.5178 4.62042C16.4807 1.75968 11.7032 1.75969 8.66613 4.62044Z"
                  fill="#3B4158"
                />
              </svg>
            </div>
            <div className="icon">
              <svg
                width="39"
                height="22"
                viewBox="0 0 39 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_211_2518)">
                  <path
                    d="M38.3234 8.25665C38.3274 8.22763 38.3274 8.19829 38.3234 8.16926C38.3272 8.14561 38.3272 8.12149 38.3234 8.09779L38.0398 6.05646C37.9989 5.81224 37.8894 5.58398 37.7238 5.39721L37.6752 5.3416L37.5861 5.25423L32.6763 1.10804L32.814 1.24308C32.7014 1.1109 32.5599 1.00518 32.4001 0.933703C32.2402 0.862222 32.0661 0.826797 31.8904 0.830041H30.3996C30.1572 0.825333 29.9204 0.900893 29.7272 1.0445C29.5243 0.901758 29.2801 0.826584 29.0304 0.830041H27.5396C27.3441 0.826932 27.1513 0.874503 26.9805 0.967954C26.8098 1.0614 26.6673 1.19742 26.5674 1.36221C26.4134 1.59759 26.3556 1.88118 26.4054 2.1565L26.5917 3.44325C26.4683 3.37464 26.3285 3.33904 26.1866 3.34H18.9678C18.7088 3.34159 18.4557 3.41602 18.2386 3.55445C18.0286 3.6833 17.86 3.86781 17.7525 4.08662L17.1934 3.61799C16.9734 3.41841 16.683 3.31023 16.3832 3.31617H5.0567C4.79678 3.32081 4.54263 3.392 4.31945 3.52268C4.0141 3.69789 3.79033 3.98278 3.69558 4.31697L0.0983083 16.1122C0.0310945 16.3065 0.0244825 16.5161 0.0793192 16.7142C0.134156 16.9122 0.247958 17.0898 0.406186 17.2242C0.447416 17.2584 0.490707 17.2903 0.535821 17.3195C0.535821 17.3195 0.462891 17.2718 0.422381 17.2321L5.33219 21.3863C5.53989 21.5737 5.81143 21.6785 6.09372 21.6801H17.5094C17.7701 21.6735 18.0245 21.5995 18.2467 21.4657C18.3724 21.3983 18.4849 21.3096 18.5789 21.2035L18.6194 21.1479L18.6842 21.0685L18.7328 20.9811L19.2676 21.4339C19.4723 21.6139 19.7379 21.713 20.0129 21.7119H31.4529C31.7133 21.7034 31.9672 21.6296 32.1902 21.4975C32.313 21.426 32.4249 21.3377 32.5224 21.2353L32.5628 21.1797L32.6277 21.1003C32.6621 21.0501 32.692 20.9969 32.7168 20.9414C32.7433 20.8933 32.7649 20.8428 32.7816 20.7905L36.0629 10.02V9.92466C36.0669 9.8877 36.0669 9.85042 36.0629 9.81346V9.74199C36.0668 9.71829 36.0668 9.69417 36.0629 9.67047C36.0666 9.62025 36.0666 9.56982 36.0629 9.51955H37.1162C37.2078 9.5278 37.3 9.5278 37.3916 9.51955H37.4646C37.5238 9.50222 37.5809 9.4782 37.6347 9.44808H37.7157L37.8615 9.33688L37.9264 9.28922L38.0398 9.14623V9.09862L38.1208 8.96356C38.1163 8.9373 38.1163 8.91042 38.1208 8.88416C38.1165 8.87126 38.1165 8.85732 38.1208 8.84443C38.138 8.79786 38.1516 8.75004 38.1613 8.70144C38.1575 8.68578 38.1575 8.66944 38.1613 8.65378C38.1574 8.63013 38.1574 8.60596 38.1613 8.58231C38.1613 8.58231 38.3234 8.27252 38.3234 8.25665Z"
                    fill="black"
                  />
                  <path
                    d="M16.7154 4.22169C16.7584 4.25982 16.7884 4.30996 16.8015 4.36535C16.8145 4.42074 16.8099 4.47871 16.7883 4.53146L13.1992 16.3187C13.154 16.4474 13.0615 16.555 12.9399 16.6206C12.8409 16.6855 12.7264 16.7238 12.6077 16.7318H1.20015C1.10273 16.7272 1.01043 16.6876 0.940885 16.6206C0.899512 16.583 0.870474 16.5343 0.857484 16.4806C0.844495 16.4268 0.848153 16.3705 0.86797 16.3187L4.46524 4.53146C4.50669 4.40115 4.59625 4.29068 4.7164 4.22169C4.81698 4.16146 4.93097 4.12603 5.04858 4.11843H16.4561C16.5528 4.11934 16.6455 4.15626 16.7154 4.22169ZM10.7604 13.9438L12.9075 6.90638H6.89584L4.7569 13.9438H10.7604ZM27.6044 4.34083C27.6433 4.38517 27.692 4.42034 27.7467 4.44372C27.8014 4.46709 27.8608 4.47808 27.9204 4.47586H29.4031C29.4595 4.4764 29.5151 4.46283 29.5648 4.43642C29.6144 4.41002 29.6563 4.37165 29.6866 4.32494C29.7129 4.28846 29.7316 4.24716 29.7413 4.2035C29.751 4.15984 29.7517 4.11471 29.7433 4.07078L29.4517 1.97385C29.4239 1.8768 29.374 1.78719 29.3059 1.71173C29.2669 1.66739 29.2183 1.63222 29.1636 1.60885C29.1089 1.58547 29.0495 1.57449 28.9899 1.5767H27.5072C27.4507 1.57617 27.3951 1.58974 27.3455 1.61615C27.2959 1.64255 27.2539 1.68092 27.2236 1.72762C27.1669 1.83882 27.1426 1.91031 27.1669 1.97385L27.4667 4.07078C27.4821 4.17288 27.5303 4.26749 27.6044 4.34083ZM32.3117 1.95796C32.2839 1.86091 32.234 1.77129 32.1658 1.69585C32.1286 1.65167 32.0813 1.61651 32.028 1.59309C31.9746 1.56968 31.9164 1.55863 31.858 1.56082H30.3672C30.3117 1.55927 30.2567 1.57248 30.2082 1.59904C30.1598 1.62561 30.1195 1.66456 30.0917 1.71173C30.0378 1.7822 30.0145 1.87071 30.0269 1.95796L30.3267 4.05489C30.3455 4.15591 30.3932 4.24959 30.4644 4.32494C30.504 4.36842 30.5528 4.403 30.6074 4.4263C30.6619 4.4496 30.7209 4.46109 30.7804 4.45997H32.2712C32.3266 4.46069 32.3811 4.44713 32.4295 4.42064C32.4778 4.39415 32.5182 4.35568 32.5466 4.30906C32.5748 4.27353 32.5945 4.23224 32.6043 4.18827C32.6142 4.14429 32.6138 4.09872 32.6033 4.05489L32.3117 1.95796ZM26.3 5.13512L26.1541 4.10254H18.9677C18.8549 4.10864 18.7457 4.1443 18.6517 4.2058C18.5921 4.2377 18.5401 4.28192 18.4996 4.3354C18.459 4.38888 18.4308 4.45035 18.4168 4.51558L17.8173 6.4854C17.7933 6.53463 17.7851 6.58986 17.7938 6.64374C17.8025 6.69761 17.8276 6.74763 17.8659 6.78725C17.9342 6.85021 18.0234 6.88691 18.117 6.89051H26.851L24.7039 13.9279H15.9943C15.882 13.9304 15.7726 13.9634 15.6784 14.0232C15.5638 14.0946 15.4801 14.2049 15.4434 14.333L14.8357 16.3028C14.8159 16.3534 14.8107 16.4083 14.8207 16.4616C14.8307 16.5149 14.8555 16.5643 14.8924 16.6046C14.9586 16.6718 15.0485 16.7116 15.1436 16.7158H26.5836C26.7019 16.7059 26.8159 16.6677 26.9157 16.6046C27.0354 16.5388 27.1251 16.431 27.1669 16.3028L30.4563 5.53227H26.7537C26.695 5.5334 26.6366 5.52271 26.5823 5.50085C26.5279 5.47899 26.4788 5.44642 26.4378 5.40517C26.3708 5.33315 26.3234 5.24573 26.3 5.15101V5.13512Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_211_2518">
                    <rect
                      width="38.2838"
                      height="20.8821"
                      fill="white"
                      transform="translate(0.0425415 0.829834)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="icon">
              <svg
                width="33"
                height="21"
                viewBox="0 0 33 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_211_2522)">
                  <path
                    d="M30.6174 3.0072C30.6174 3.03073 30.6174 3.06016 30.6112 3.07781C30.5806 3.30729 30.5806 3.53677 30.599 3.77214C30.6112 3.83099 30.6235 3.88983 30.6726 3.9369C30.7522 4.02516 30.8748 4.00751 30.9239 3.9016C30.9484 3.84864 30.9484 3.79568 30.9362 3.74272C30.8748 3.51912 30.8626 3.28376 30.8565 3.05427C30.8565 3.0425 30.8565 3.02485 30.8565 3.0072C30.9239 3.00131 30.9852 2.99543 31.0404 2.99543C31.0833 2.98955 31.1201 2.98366 31.1508 2.96601C31.2427 2.91894 31.2427 2.81891 31.1446 2.77183C31.1078 2.75418 31.0588 2.74829 31.0159 2.74829C30.8626 2.75418 30.7093 2.75418 30.556 2.75418C30.5009 2.75418 30.4457 2.76006 30.3905 2.76594C30.3598 2.77183 30.3231 2.77183 30.2986 2.78948C30.2556 2.80713 30.2311 2.83655 30.2311 2.87774C30.2373 2.91894 30.2556 2.94247 30.2986 2.96012C30.3231 2.97778 30.3537 2.98366 30.3844 2.98366C30.4579 2.98955 30.5377 3.00131 30.6174 3.0072ZM32.3033 3.27787C32.3033 3.28376 32.3094 3.28964 32.3094 3.28964C32.334 3.44851 32.3585 3.6015 32.3769 3.75449C32.3831 3.80745 32.3892 3.85452 32.426 3.89571C32.5056 3.99574 32.6283 3.98397 32.6834 3.87806C32.708 3.8251 32.7141 3.77214 32.7018 3.7133C32.6651 3.53677 32.6466 3.36025 32.6099 3.18961C32.5853 3.08369 32.5547 2.98366 32.5241 2.88952C32.5056 2.83067 32.4627 2.78948 32.3892 2.7836C32.3156 2.77183 32.2604 2.80713 32.2298 2.86009C32.193 2.90716 32.1623 2.95424 32.1378 3.0072C32.0949 3.10134 32.0581 3.19549 32.0091 3.28376C32.0029 3.30729 31.9968 3.32495 31.9845 3.34259C31.9784 3.33083 31.9723 3.32495 31.9723 3.32495C31.8926 3.17784 31.819 3.03073 31.7393 2.88952C31.727 2.87774 31.7209 2.86598 31.7148 2.85421C31.678 2.80125 31.6351 2.77183 31.5677 2.77183C31.5063 2.77771 31.4573 2.81302 31.4266 2.86598C31.4144 2.88952 31.4144 2.90716 31.4082 2.9307C31.3837 3.119 31.353 3.30729 31.3285 3.49559C31.3163 3.6015 31.3101 3.70742 31.3101 3.81333C31.304 3.83687 31.3101 3.86629 31.3224 3.88983C31.3347 3.9369 31.3715 3.96632 31.4205 3.97221C31.4818 3.97809 31.5247 3.96044 31.5431 3.91336C31.5615 3.87806 31.5676 3.84864 31.5738 3.81922C31.5983 3.7133 31.6167 3.61327 31.6351 3.51324C31.6473 3.4544 31.6535 3.40732 31.6719 3.34259C31.6841 3.36613 31.6964 3.38379 31.7087 3.40144C31.7638 3.47205 31.819 3.54266 31.8864 3.6015C31.9539 3.64857 32.0091 3.64269 32.0642 3.58973C32.0765 3.57796 32.0826 3.57208 32.0949 3.56031C32.1501 3.47793 32.2175 3.39556 32.2727 3.31317C32.285 3.30141 32.2911 3.28964 32.3033 3.27787Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M18.1771 3.12286C18.1345 3.23469 18.1264 3.31525 18.146 3.38222C18.1678 3.47327 18.2242 3.50309 18.3007 3.47993C19.0208 3.30902 20.5999 3.79413 21.1845 3.92933C21.3224 3.95772 21.4346 3.7869 21.3405 3.63374C21.2032 3.48542 19.6248 2.8504 19.0226 2.81577C18.7865 2.80297 18.3645 2.74487 18.1771 3.12286Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M24.3484 1.06699C24.4252 1.1095 24.4681 1.15006 24.4892 1.19537C24.5208 1.25481 24.5041 1.29593 24.4511 1.31692C23.9751 1.53989 23.3417 2.49983 23.086 2.83091C23.0241 2.90707 22.8811 2.86281 22.8595 2.73756C22.8639 2.59595 23.4254 1.5542 23.7388 1.27046C23.8619 1.15968 24.0654 0.94232 24.3484 1.06699Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M20.5577 0.594601C20.6499 0.527906 20.7458 0.504534 20.7947 0.547878C21.5129 1.13738 21.8937 2.0709 22.1296 2.92552C22.1384 2.94543 22.139 2.97401 22.1319 3.00381C22.129 3.02929 22.1096 3.0562 22.0788 3.07702C22.0459 3.10001 22.0175 3.10701 22.0042 3.0872C21.6894 2.6763 19.8917 1.07752 20.5577 0.594601Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M5.34916 10.815C5.52129 10.692 5.70842 10.5896 5.90644 10.5101C6.11362 10.4533 6.33445 10.4627 6.53556 10.537C6.73662 10.6113 6.90706 10.7464 7.021 10.922C7.12294 11.097 7.1628 11.2992 7.13467 11.4979C7.10653 11.6966 7.01189 11.8812 6.86495 12.0238C6.75106 12.1394 6.62174 12.2401 6.48045 12.3233C5.85073 12.7138 5.2154 13.0828 4.5801 13.4733C4.45011 13.571 4.3122 13.6587 4.16771 13.7354C3.94792 13.8406 3.69675 13.8688 3.4576 13.815C3.21846 13.7614 3.0064 13.6291 2.85809 13.4412C2.74722 13.3082 2.65365 13.1627 2.57944 13.008C1.97758 11.7938 1.35342 10.585 0.773842 9.34943C0.506343 8.81459 0.289003 8.19947 0.0772347 7.60577C-0.0143861 7.43327 -0.0322775 7.23329 0.02737 7.04831C0.0870175 6.86334 0.219498 6.708 0.396631 6.61532C0.573765 6.52265 0.781572 6.49999 0.975863 6.5521C1.17015 6.60422 1.3356 6.72703 1.43701 6.8944C1.74871 7.29197 2.02464 7.71427 2.26179 8.15671C2.86366 9.22643 3.43767 10.2962 4.01724 11.3338C4.05099 11.3912 4.0882 11.4465 4.1287 11.4996C4.56493 11.3236 4.97523 11.0934 5.34916 10.815Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M11.572 10.4418C10.1956 11.9875 7.8884 11.5971 6.72925 9.60736C5.90446 8.1953 5.75957 5.86327 7.55405 4.39238C7.93724 4.08444 8.39544 3.87467 8.88594 3.78263C9.48734 3.69988 10.1006 3.80171 10.6381 4.07357C11.1755 4.34543 11.6097 4.77339 11.8786 5.29632C12.8594 7.00791 12.7201 9.19015 11.572 10.4418ZM11.0148 6.83674C10.8685 6.41614 10.5752 6.05705 10.1844 5.82047C9.9633 5.66921 9.69461 5.59567 9.42364 5.61223C9.15261 5.62879 8.89585 5.73445 8.69647 5.91139C7.89957 6.5907 7.73235 8.20067 8.31193 9.15808C8.38582 9.31421 8.49429 9.45294 8.62987 9.5646C8.76545 9.67627 8.92482 9.75816 9.09681 9.8045C9.2688 9.85088 9.44925 9.8606 9.62558 9.83303C9.80192 9.80541 9.96979 9.74119 10.1176 9.6448C10.5496 9.32334 10.8665 8.88071 11.0243 8.37845C11.1821 7.87614 11.1729 7.33914 10.9981 6.84211L11.0148 6.83674Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M17.1895 7.51085C17.0486 7.53994 16.903 7.54168 16.7614 7.51594C16.6198 7.4902 16.4849 7.43758 16.3648 7.36111C16.2597 7.30339 16.1692 7.22407 16.0998 7.12878C16.0305 7.0335 15.984 6.92467 15.9638 6.81007C15.9435 6.69552 15.95 6.57807 15.9827 6.46618C16.0154 6.35428 16.0736 6.25074 16.153 6.16297C16.2913 5.98662 16.4877 5.86037 16.7103 5.80463C17.2913 5.64277 17.8895 5.54409 18.4936 5.51046C18.6263 5.49564 18.7608 5.50642 18.8891 5.54216C19.0174 5.57795 19.137 5.63791 19.2408 5.71865C19.3446 5.79935 19.4306 5.89918 19.4937 6.01222C19.5567 6.12526 19.5957 6.24927 19.6082 6.37695C19.7823 7.00409 19.8014 7.66165 19.6639 8.29714C19.1623 10.351 17.4347 11.057 15.4954 10.3991C14.951 10.2233 14.4737 9.89551 14.1245 9.45779C13.6587 8.93066 13.3285 8.30595 13.1603 7.63389C13.0242 7.03542 13.0391 6.41443 13.2039 5.82266C13.3687 5.23088 13.6786 4.68552 14.1077 4.23211C14.515 3.73931 15.0436 3.35148 15.6459 3.10354C16.0264 2.9022 16.4718 2.84496 16.8942 2.94308C16.99 2.96853 17.077 3.01812 17.1461 3.08671C17.2152 3.15531 17.264 3.2404 17.2873 3.33317C17.3106 3.42593 17.3076 3.52299 17.2787 3.61429C17.2497 3.70558 17.1959 3.78778 17.1227 3.85235C16.9835 3.97326 16.8323 4.08075 16.6713 4.17328C16.1758 4.4761 15.7447 4.86631 15.4006 5.32324C15.1751 5.61892 15.0198 5.95845 14.9457 6.3179C14.8715 6.67735 14.8804 7.04804 14.9716 7.40391C15.0979 7.88911 15.3784 8.32462 15.774 8.65012C17 9.71989 18.5939 8.68756 18.3152 7.22737C17.9085 7.32367 17.5518 7.42529 17.1895 7.51085Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M24.6795 10.5275C22.8683 11.5972 20.8064 10.5275 20.355 8.28105C20.0262 6.67645 20.6503 4.42998 22.8349 3.57419C23.2997 3.39603 23.8038 3.33347 24.3006 3.39233C24.8973 3.49719 25.4448 3.77916 25.8657 4.19851C26.2866 4.61786 26.5598 5.15341 26.6467 5.72972C27.0145 7.63918 26.1786 9.67705 24.6795 10.5275ZM25.3093 6.92781C25.3087 6.48349 25.1449 6.05353 24.8467 5.71367C24.6873 5.50346 24.4568 5.35284 24.1947 5.28747C23.9324 5.22214 23.6548 5.24608 23.4089 5.35532C22.4281 5.76179 21.737 7.23803 21.9878 8.32386C22.007 8.49424 22.0647 8.65858 22.1569 8.80534C22.2491 8.9521 22.3736 9.07776 22.5217 9.17355C22.6698 9.2693 22.8379 9.33288 23.0142 9.35981C23.1906 9.3867 23.3709 9.37633 23.5426 9.32939C24.0611 9.15556 24.51 8.83071 24.8267 8.40015C25.1434 7.96959 25.3121 7.45485 25.3093 6.92781Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M28.4783 10.9766C28.451 11.1724 28.3438 11.3497 28.1802 11.4696C28.0166 11.5894 27.8101 11.642 27.6062 11.6158C27.4022 11.5896 27.2175 11.4866 27.0926 11.3296C26.9677 11.1727 26.9129 10.9745 26.9402 10.7787C26.9676 10.583 27.0748 10.4057 27.2384 10.2858C27.4019 10.1659 27.6084 10.1133 27.8124 10.1396C28.0163 10.1658 28.2011 10.2687 28.326 10.4257C28.4509 10.5827 28.5057 10.7809 28.4783 10.9766ZM27.9935 3.76123C28.0995 3.60586 28.255 3.48755 28.4368 3.42393C28.6185 3.36032 28.8169 3.3548 29.0022 3.40822C29.1906 3.45346 29.357 3.55944 29.4737 3.70841C29.5904 3.8574 29.6501 4.04032 29.6431 4.22657C29.6185 4.52531 29.5719 4.82201 29.5038 5.11444C29.3198 6.10397 29.1415 7.09345 28.9465 8.07229C28.8573 8.46275 28.7403 8.83715 28.6121 9.23294C28.5675 9.35667 28.493 9.46847 28.3948 9.55922C28.3337 9.62748 28.2557 9.67983 28.1679 9.71144C28.0801 9.74309 27.9855 9.75296 27.8927 9.74016C27.7999 9.72736 27.712 9.69231 27.6371 9.63826C27.5621 9.58417 27.5027 9.51283 27.4641 9.43085C27.3978 9.28377 27.3618 9.12572 27.3582 8.96552C27.3582 8.30227 27.3582 7.6337 27.4028 6.96508C27.4785 6.01093 27.6275 5.06341 27.8486 4.13029C27.8746 4.00527 27.9237 3.88572 27.9935 3.77728V3.76123Z"
                    fill="#3A3B7B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.99459 15.2748C2.92879 15.4158 2.91074 15.573 2.9429 15.7242C2.96429 15.9236 3.01127 16.1198 3.08278 16.3081C3.17205 16.5388 3.27195 16.7669 3.39513 17.048C3.42346 17.1127 3.45306 17.1803 3.48403 17.2513C3.65014 17.6322 3.85857 18.1189 4.13658 18.8234C4.21527 19.0235 4.28514 19.2253 4.35551 19.4284C4.38393 19.5105 4.41246 19.5928 4.44166 19.6754C4.54633 19.9688 4.72643 20.2324 4.96516 20.4413C5.06653 20.5562 5.20099 20.6399 5.35176 20.6817C5.50548 20.7244 5.66896 20.7217 5.82104 20.6739C5.97312 20.6262 6.10669 20.5356 6.20442 20.414C6.30023 20.2948 6.3572 20.1511 6.36827 20.001C6.43043 19.7086 6.40921 19.4053 6.30677 19.1234C6.14417 18.6553 5.95896 18.1866 5.74537 17.7281L5.74439 17.7261C5.39303 17.0087 5.03587 16.2963 4.66182 15.5837L4.65902 15.5787C4.54952 15.393 4.40721 15.227 4.23849 15.0882C4.12896 14.9643 3.97788 14.8807 3.81103 14.8519C3.64062 14.8225 3.46488 14.8521 3.31516 14.9356C3.17353 15.0132 3.06126 15.132 2.99459 15.2748Z"
                    fill="#3A3B7B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.36117 13.5084C7.81024 13.3714 7.23487 13.3515 6.67516 13.4499C6.24164 13.4909 5.81526 13.5869 5.51919 13.777C5.36861 13.8737 5.24686 13.998 5.17914 14.1559C5.11105 14.3147 5.10235 14.4962 5.15816 14.6986C5.26004 15.0692 5.39235 15.4295 5.52419 15.7887L5.54555 15.8468L5.54607 15.8481C5.94304 16.8915 6.3438 17.9314 6.74821 18.9678C6.79537 19.1311 6.86206 19.2886 6.94693 19.4372L6.94852 19.44C7.06064 19.6246 7.20445 19.7897 7.37387 19.9284C7.4586 20.0046 7.56338 20.0574 7.677 20.081C7.79173 20.1047 7.91105 20.0979 8.02196 20.061C8.13291 20.0241 8.23115 19.9588 8.30602 19.872C8.37967 19.7866 8.42791 19.6837 8.44562 19.5743C8.51871 19.2769 8.4953 18.9652 8.37846 18.6809C8.34201 18.5852 8.3134 18.4875 8.28326 18.3846C8.27321 18.3503 8.26302 18.3154 8.25227 18.2798C9.17797 17.9325 10.1629 17.4655 10.5093 16.3791C10.6449 16.0037 10.6562 15.5972 10.5416 15.2153C10.4269 14.833 10.1916 14.4942 9.86813 14.2454C9.42783 13.8972 8.91349 13.6456 8.36117 13.5084ZM6.83406 14.8409C6.85229 14.8358 6.87066 14.8312 6.88907 14.8268C7.49174 14.7359 8.10832 14.857 8.62532 15.1679C8.85316 15.32 8.94649 15.4889 8.96252 15.6515C8.97907 15.8189 8.91564 16.0003 8.78824 16.1747C8.5475 16.5041 8.10819 16.7678 7.71135 16.8169C7.42205 16.1775 7.12827 15.5122 6.83406 14.8409Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M12.0341 12.338C12.6902 12.0472 13.5029 11.997 14.1388 12.2014C14.299 12.2462 14.4379 12.3431 14.5319 12.4754C14.6253 12.6069 14.6684 12.7654 14.654 12.9239C14.6531 13.0268 14.6267 13.128 14.5772 13.2193C14.5269 13.3122 14.4539 13.3921 14.3646 13.4523C14.2752 13.5125 14.172 13.5511 14.0639 13.565C13.9556 13.5788 13.8455 13.5674 13.7429 13.5318L13.7351 13.5291L13.7277 13.5254C13.6752 13.499 13.6194 13.4791 13.5617 13.4662L13.558 13.4654C13.1107 13.3513 12.6887 13.5403 12.5346 13.7725C12.461 13.8832 12.4519 13.995 12.5131 14.0966C12.5787 14.2055 12.7395 14.3277 13.065 14.4147C13.1545 14.4383 13.2462 14.4611 13.3393 14.4842C13.5966 14.5481 13.864 14.6146 14.1226 14.7067L14.1236 14.707C15.3166 15.1427 15.7608 16.0449 15.6087 16.8936C15.4583 17.7328 14.728 18.4966 13.6299 18.6767C13.2303 18.7617 12.8144 18.7452 12.4235 18.6287C12.0315 18.5119 11.6783 18.2987 11.3987 18.0102L11.3914 18.0027C11.3032 17.894 11.2438 17.7663 11.2175 17.6308C11.1933 17.5086 11.2061 17.3822 11.2542 17.2667C11.3021 17.1518 11.383 17.0524 11.4875 16.9799C11.5978 16.8978 11.7308 16.8485 11.8701 16.8383C12.0088 16.828 12.1477 16.857 12.2695 16.9215C12.3912 16.9779 12.5044 17.0499 12.606 17.1355L12.6079 17.1371C12.7877 17.2948 13.0051 17.3359 13.2137 17.2979C13.4253 17.2592 13.6242 17.1391 13.7522 16.9796C13.8793 16.8212 13.9303 16.633 13.8698 16.4504C13.8088 16.2663 13.6256 16.0602 13.2229 15.8878C13.1177 15.8449 13.0086 15.8103 12.895 15.7767C12.8644 15.7676 12.8333 15.7585 12.8018 15.7494C12.7179 15.7249 12.6315 15.6997 12.5468 15.672C12.4885 15.6529 12.4306 15.6348 12.3733 15.6169C12.2167 15.5679 12.064 15.5202 11.9171 15.4562C11.5973 15.3517 11.321 15.151 11.1293 14.8839C10.9368 14.6157 10.84 14.295 10.8532 13.9696C10.8542 13.1767 11.3745 12.6304 12.0341 12.338Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M20.3519 12.2535C20.2247 12.1938 20.084 12.1655 19.9426 12.1711C19.8011 12.1767 19.6633 12.216 19.5417 12.2855C19.4208 12.3545 19.3195 12.4511 19.247 12.5667C19.1805 12.6641 19.1345 12.7731 19.1115 12.8874C19.0886 13.0017 19.0891 13.1191 19.1131 13.2332C19.1368 13.3797 19.1631 13.5222 19.189 13.6627C19.232 13.8953 19.2737 14.1226 19.3013 14.3543L19.3023 14.3602C19.3651 14.7237 19.398 15.0913 19.4009 15.4597L19.4012 15.4649C19.4226 15.8628 19.2814 16.2529 19.0078 16.5525L19.0034 16.5578C18.9144 16.6673 18.7953 16.7509 18.6596 16.7992C18.5239 16.8475 18.3768 16.8586 18.2349 16.8313C18.093 16.8039 17.9618 16.7392 17.856 16.6444C17.7501 16.5496 17.6738 16.428 17.6357 16.294C17.5544 16.0115 17.5073 15.721 17.4954 15.4282L17.6343 13.3058C17.6363 13.2781 17.6387 13.2496 17.6411 13.2209C17.6463 13.1564 17.6518 13.0908 17.654 13.0296C17.6573 12.9394 17.6545 12.8468 17.6326 12.7591C17.6102 12.6694 17.5676 12.5841 17.4921 12.5115C17.4173 12.4396 17.3164 12.3866 17.1894 12.3505C16.9596 12.2867 16.7654 12.2887 16.6036 12.3546C16.4416 12.4205 16.3307 12.5429 16.2522 12.6843C16.1742 12.8245 16.1242 12.9905 16.0863 13.1568C16.0582 13.2801 16.0357 13.4096 16.0142 13.5329C16.0068 13.5754 15.9995 13.6171 15.9922 13.6576L15.992 13.6588C15.8772 14.3349 15.8431 15.0213 15.8902 15.7047C15.899 16.0741 15.9792 16.4387 16.1269 16.7799C16.2935 17.2201 16.5953 17.6015 16.9924 17.8738C17.3904 18.1467 17.8653 18.297 18.3542 18.3049C18.8432 18.3129 19.3231 18.178 19.7304 17.9183C20.1371 17.659 20.4523 17.2873 20.6343 16.8524C20.8889 16.2984 21.0084 15.696 20.9838 15.091C20.9688 14.6492 20.9438 14.2041 20.9188 13.7613C20.9066 13.5441 20.8944 13.3273 20.8835 13.1119C20.878 12.8958 20.8037 12.6866 20.6707 12.5122C20.5884 12.4019 20.4789 12.313 20.3519 12.2535Z"
                    fill="#3A3B7B"
                  />
                  <path
                    d="M24.8545 15.5815C24.8416 15.5972 24.828 15.6135 24.8138 15.6304C24.7103 15.0575 24.6144 14.4848 24.5183 13.9112C24.4839 13.7053 24.4493 13.4987 24.4144 13.2926L24.4105 13.2696L24.3978 13.2497C24.3738 13.2123 24.3714 13.1757 24.3714 13.0975V13.0885L24.37 13.0795C24.344 12.9181 24.2679 12.7678 24.1517 12.6485C24.0358 12.5294 23.8852 12.4466 23.7197 12.4106C23.5544 12.3715 23.3806 12.3801 23.2204 12.4354C23.0605 12.4906 22.9212 12.5898 22.8198 12.7205C22.7355 12.8209 22.6664 12.9322 22.6146 13.0511C22.497 13.3073 22.3785 13.5641 22.2596 13.8216L22.2575 13.826C21.9607 14.4689 21.6619 15.1161 21.3717 15.7684L21.3708 15.7705C21.1927 16.1935 21.0457 16.6391 20.8992 17.0834C20.8699 17.1721 20.8407 17.2607 20.8112 17.3491C20.7583 17.4893 20.7351 17.6382 20.7431 17.7871C20.7335 17.9204 20.7667 18.0533 20.8384 18.168C20.9115 18.285 21.021 18.377 21.1514 18.4312C21.2897 18.4893 21.4442 18.5017 21.5906 18.4663C21.7367 18.4309 21.8665 18.35 21.9594 18.2362C22.0781 18.096 22.1803 17.9432 22.2635 17.7812C22.5093 17.2987 22.7442 16.8103 22.978 16.324C23.0685 16.1359 23.1564 15.9674 23.2565 15.784C23.2633 15.8066 23.2703 15.8286 23.2776 15.8508C23.3824 16.2937 23.5594 16.718 23.8019 17.108C23.8478 17.1906 23.9117 17.2629 23.9893 17.3197C24.0678 17.3772 24.1584 17.4176 24.2548 17.4381C24.3513 17.4586 24.4512 17.4587 24.5476 17.4384C24.644 17.4181 24.7349 17.3777 24.8134 17.3204L24.9689 17.2087L26.1758 16.233L26.1044 16.6696C26.0065 17.2696 25.9092 17.8646 25.806 18.4598C25.7384 18.7236 25.7385 18.9991 25.8062 19.2628C25.8356 19.4112 25.9104 19.5479 26.021 19.6553C26.1326 19.7636 26.2756 19.8372 26.4313 19.8666C26.587 19.8959 26.7483 19.8797 26.8943 19.8199C27.0382 19.761 27.1605 19.6626 27.246 19.5371C27.445 19.3001 27.5689 19.0133 27.6029 18.7106C27.6541 18.2832 27.712 17.85 27.7699 17.4169C27.8366 16.9177 27.9033 16.4187 27.9596 15.9292L27.9598 15.9277C28.014 15.3919 28.0402 14.8539 28.0384 14.3156C28.0503 14.1454 28.0062 13.976 27.9121 13.8311C27.8178 13.6858 27.678 13.5728 27.5129 13.5082C27.3411 13.4332 27.1487 13.4132 26.9642 13.451C26.7808 13.4887 26.6149 13.5814 26.4904 13.7158C26.2678 13.9134 26.0589 14.1248 25.8652 14.3488L25.8639 14.3503C25.6524 14.6032 25.4424 14.8611 25.2337 15.1173C25.1068 15.2731 24.9803 15.4285 24.8545 15.5815Z"
                    fill="#3A3B7B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_211_2522">
                    <rect
                      width="32.7153"
                      height="20.186"
                      fill="white"
                      transform="translate(-0.00726318 0.525879)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="icon">
              <svg
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_211_2538)">
                  <path
                    d="M27.6981 0.809231C27.6981 1.13359 27.9642 1.39654 28.2926 1.39654H28.8872C29.2156 1.39654 29.4817 1.13359 29.4817 0.809231C29.4817 0.484871 29.2156 0.221924 28.8872 0.221924H28.2926C27.9642 0.221924 27.6981 0.484871 27.6981 0.809231Z"
                    fill="#212326"
                  />
                  <path
                    d="M10.4558 19.0158H13.3441L12.5032 18.1852C12.2803 17.9649 11.9778 17.8412 11.6624 17.8412H10.4558C5.85869 17.8412 2.13199 14.1599 2.13199 9.61886C2.13199 5.07779 5.85869 1.39655 10.4558 1.39654H19.9688C24.5659 1.39654 28.2926 5.07779 28.2926 9.61886C28.2926 14.1599 24.5659 17.8412 19.9688 17.8412H16.4102C15.9371 17.8412 15.4834 17.6555 15.1489 17.3251L14.1638 16.352C13.6063 15.8013 12.8501 15.4919 12.0617 15.4919H10.4558C7.17214 15.4919 4.51023 12.8625 4.51023 9.61886C4.51023 6.37523 7.17214 3.74578 10.4558 3.74578H19.9688C23.2525 3.74578 25.9144 6.37523 25.9144 9.61886C25.9144 12.8625 23.2525 15.4919 19.9688 15.4919H17.6838C17.2107 15.4919 16.7571 15.3063 16.4225 14.9759L15.4374 14.0028C14.8799 13.4521 14.1238 13.1427 13.3353 13.1427H10.4558C8.48564 13.1427 6.88846 11.565 6.88846 9.61886C6.88846 7.67271 8.48564 6.09501 10.4558 6.09501H19.9688C21.9389 6.09501 23.5361 7.67271 23.5361 9.61886C23.5361 11.5413 21.9777 13.1042 20.0407 13.142L20.0403 13.1427H19.1702C18.6971 13.1427 18.2435 12.9571 17.9089 12.6267L16.9238 11.6536C16.4664 11.2017 15.8752 10.9123 15.2422 10.823L15.2123 10.7935H10.4558C9.79909 10.7935 9.2667 10.2676 9.2667 9.61886C9.2667 8.97014 9.79909 8.44424 10.4558 8.44424H19.9688C20.6255 8.44424 21.1579 8.97014 21.1579 9.61886C21.1579 10.2676 20.6255 10.7935 19.9688 10.7935H17.5905L18.4314 11.6241C18.6544 11.8443 18.9568 11.9681 19.2722 11.9681H19.9688C21.2822 11.9681 22.347 10.9163 22.347 9.61886C22.347 8.32143 21.2822 7.26963 19.9688 7.26963H10.4558C9.14237 7.26963 8.07758 8.32143 8.07758 9.61886C8.07758 10.9163 9.14237 11.9681 10.4558 11.9681H14.8217C15.2948 11.9681 15.7485 12.1537 16.083 12.4841L17.0681 13.4572C17.6256 14.0079 18.3818 14.3173 19.1702 14.3173H20.2661V14.3083C22.7545 14.1567 24.7252 12.1151 24.7252 9.61886C24.7252 7.02399 22.5957 4.92039 19.9688 4.92039H10.4558C7.82891 4.92039 5.69935 7.02399 5.69935 9.61886C5.69935 12.2138 7.82891 14.3173 10.4558 14.3173H13.3353C13.8084 14.3173 14.2621 14.503 14.5966 14.8334L15.5817 15.8065C16.1392 16.3572 16.8954 16.6666 17.6838 16.6666H19.9688C23.9092 16.6666 27.1035 13.5112 27.1035 9.61886C27.1035 5.72651 23.9092 2.57116 19.9688 2.57116H10.4558C6.51541 2.57116 3.32111 5.72651 3.32111 9.61886C3.32111 13.5112 6.51541 16.6666 10.4558 16.6666H12.0617C12.5348 16.6666 12.9885 16.8522 13.323 17.1826L14.3081 18.1557C14.8656 18.7064 15.6217 19.0158 16.4102 19.0158H19.9688C25.2226 19.0158 29.4817 14.8086 29.4817 9.61886C29.4817 4.42907 25.2226 0.221923 19.9688 0.221924L10.4558 0.221926C5.20196 0.221926 0.942871 4.42908 0.942871 9.61886C0.942872 14.8086 5.20197 19.0158 10.4558 19.0158Z"
                    fill="#212326"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_211_2538">
                    <rect
                      width="28.5388"
                      height="18.7939"
                      fill="white"
                      transform="translate(0.942871 0.221924)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="icon">
              <svg
                width="38"
                height="35"
                viewBox="0 0 38 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.893066"
                  y="0.671875"
                  width="33.4113"
                  height="33.4113"
                  rx="5.56856"
                  fill="#F5F7FA"
                />
                <g clip-path="url(#clip0_211_2541)">
                  <path
                    d="M9.48474 10.3103C8.07121 10.3103 6.71559 10.8718 5.71609 11.8713L2.4541 15.1333C1.45459 16.1328 0.893066 17.4884 0.893066 18.902C0.893066 21.8455 3.27926 24.2317 6.22278 24.2317C7.63631 24.2317 8.99193 23.6701 9.99144 22.6706L12.2478 20.4143C12.2478 20.4143 12.2478 20.4144 12.2478 20.4143L18.822 13.8401C19.2993 13.3628 19.9468 13.0946 20.6219 13.0946C21.7521 13.0946 22.7103 13.8312 23.0425 14.8506L25.1173 12.7758C24.1708 11.2933 22.5111 10.3103 20.6219 10.3103C19.2083 10.3103 17.8527 10.8718 16.8532 11.8713L8.02267 20.7019C7.54531 21.1792 6.89787 21.4474 6.22278 21.4474C4.81697 21.4474 3.67734 20.3078 3.67734 18.902C3.67734 18.2269 3.94552 17.5794 4.42288 17.1021L7.68485 13.8401C8.16221 13.3628 8.80965 13.0946 9.48474 13.0946C10.615 13.0946 11.5732 13.8312 11.9054 14.8506L13.9802 12.7758C13.0337 11.2933 11.3741 10.3103 9.48474 10.3103Z"
                    fill="#394149"
                  />
                  <path
                    d="M19.1598 20.7019C18.6825 21.1792 18.035 21.4474 17.3599 21.4474C16.2299 21.4474 15.2717 20.711 14.9394 19.6918L12.8647 21.7665C13.8112 23.2488 15.4708 24.2317 17.3599 24.2317C18.7735 24.2317 20.1291 23.6701 21.1286 22.6706L29.9591 13.8401C30.4365 13.3628 31.0839 13.0946 31.759 13.0946C33.1649 13.0946 34.3045 14.2342 34.3045 15.64C34.3045 16.3151 34.0363 16.9625 33.5589 17.4399L30.297 20.7019C29.8196 21.1792 29.1722 21.4474 28.4971 21.4474C27.3669 21.4474 26.4087 20.7108 26.0765 19.6916L24.0017 21.7664C24.9482 23.2487 26.6078 24.2317 28.4971 24.2317C29.9106 24.2317 31.2662 23.6701 32.2657 22.6706L35.5277 19.4087C36.5272 18.4092 37.0887 17.0535 37.0887 15.64C37.0887 12.6965 34.7026 10.3103 31.759 10.3103C30.3455 10.3103 28.9899 10.8718 27.9904 11.8713L19.1598 20.7019Z"
                    fill="#394149"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_211_2541">
                    <rect
                      width="36.1956"
                      height="13.9214"
                      fill="white"
                      transform="translate(0.893066 10.3103)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="customerButton">
            <button>
              Meet all customers{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52569 8.45996L10.2448 6.74085C10.4487 6.53697 10.4487 6.20642 10.2448 6.00254L8.52569 4.28344M10.0919 6.3717L2.43494 6.3717"
                  stroke="white"
                  stroke-width="0.765676"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
