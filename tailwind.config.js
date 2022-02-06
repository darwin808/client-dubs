const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
   content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
   media: false, // or 'media' or 'class'
   theme: {
      maxHeight: {
         0: "0",
         96: "24rem",
         "1/4": "25%",
         "1/2": "50%",
         "3/4": "75%",
         full: "100%"
      },
      minWidth: {
         0: "0",
         "7rem": "8rem",
         "1/2": "50%",
         "3/4": "75%",
         full: "100%"
      },
      minHeight: {
         "10rem": "10rem",
         "100vh": "100vh"
      },
      maxWidth: {
         "20rem": "20rem"
      },
      screens: {
         xs: "240px",
         ...defaultTheme.screens,
         "2xl": "1536px"
      },
      extend: {
         zIndex: {
            1: 1
         },
         top: {
            top30rem: "30rem",
            top5rem: "5rem"
         },
         height: {
            "20rem": "20rem",
            "21rem": "21rem",
            "22rem": "22rem",
            "28rem": "28rem",
            "29rem": "29rem",
            "25rem": "25rem",
            "26rem": "26rem"
         },
         cursor: {
            pointer: "pointer",
            notAllowed: "not-allowed"
         },
         zIndex: {
            1000: 1000,
            500: 500,
            100: 100,
            3000: 3000,
            4000: 4000,
            2000: 2000,
            6666: 6666,
            5555: 5555,
            7777: 7777,
            8888: 8888,
            9999: 9999
         },
         inset: {
            "28%": "28%",
            "40%": "40%",
            "42%": "42%",
            "18%": "15.8%",
            "21%": "21%",
            "22%": "22%",
            "22rem": "22rem",
            "23rem": "23rem",
            "30rem": "30rem",
            "28rem": "28rem",
            "27rem": "27rem",
            "26rem": "26rem",
            "25rem": "25rem",
            "-5rem": "-4.5rem"
         },
         bg: {
            white: "#FFFFFF",
            lightGray: "rgb(238, 238, 238)"
         },
         colors: {
            primary: "#FFCB05",
            secondary: "#005A9C",
            tertiary: "#FAFAFA",
            smsBlack: "#00000",
            smsGrey: "#E9E9E9",
            smsDarkGrey: "#b3b7bc",
            BgMain: "#FFF4DE",
            MainColor: "#FFBFE0;",
            SecondaryColor: " #FEC0E0",
            DarkPink: "#E04E99",
            WhiteColor: "#FFFFFF;",
            GreenColor: "#7ACA2E;",
            BlueColor: "#00395D",
            DarkBlueColor: "#073355",
            serinoBlue: "#203D5D",
            BeigeColor: "#FFE0C1",
            Gradien1: "#CC9337",
            Gradien2: "#E8D0A7",
            OrangeColor: "#FB8C00",
            RedColor: "#E05468",
            GreyColor: "#757A88",
            serinoGrey: "#C3CCDA",
            LightGreyColor: "#B7B7B7",
            DarkRedColor: "#F95e5e",
            LightGreyColor: "#EDEDED",
            CartCardBgColor: "#FAF8f8",
            LightOrangeColor: "#FD7843",
            LightGreenColor: "#41CC6C",
            SkyBlueColor: "#42A8C4",
            LightVioletColor: "#5E79F9",
            PinkRedColor: "#DB3088",
            VoucherColor: "#D93588",
            VoucherBgColor: "#FFEFF7",
            FullfillmentCartGrey: "#F7F7F7",
            FadedBlueColor: "#EBEBEB",
            FbColor: "#3B5999",
            GoogleColor: "#E0492F",
            BlueDownyColor: "#EBEBEB",
            serinoDark: "#141620",
            serinoDarkBLue: "#212732",
            serinoLightBlue: "#F4F8FC",
            adminBlue: "#2962FF",
            serinoAqua: "#058CB1",
            serinoGray: "#f4f4f4",
            yellowGreen: "#5b8e55"
         },
         fontFamily: {
            FiraSans: ["Fira Sans"],
            PoppinsMedium: ["Poppins Medium"],
            PoppinsLight: ["Poppins Light"],
            PoppinsRegular: ["Poppins Regular"],
            Nunito: ["Nunito Sans"],
            Gotham: ["Gotham"],
            NunitoBold: ["Nunito Sans Bold"],
            Quicksand: ["Quicksand"],
            QuicksandRegular: ["QuicksandRegular"],
            OpenSans: ["OpenSans"],
            OpenSansExtraBold: ["OpenSansExtraBold"],
            OpenSansSemiBold: ["OpenSansSemiBold"],
            QuicksandLight: ["QuicksandLight"]
         },
         boxShadow: {
            OgalaShadow: "0px 3px 6px #E2C391",
            InputShadow: "0px 3px 6px #E7D2AF",
            CarouselControleShadow: "0px 3px 6px #00000029",
            CookiesShadow: "0px -3px 6px #00000029"
         },
         fontSize: {
            NavFont: "17px",
            CollectionFontSize: "22px",
            CollectionDescFontSize: "16px",
            FifteenPx: "15px",
            twelvePx: "12px",
            ElevenPx: "11px",
            TenPx: "10px",
            NinePx: "9px"
         },
         padding: {
            Padding2XL: "18rem",
            Padding28rem: "28rem",
            Padding35rem: "35rem",
            Padding22rem: "22rem",
            Padding30: "18%",
            Padding8Px: "8px"
         },
         scale: {
            Scale60: ".65",
            Scale2: "2",
            Scale21: "2.1",
            Scale23: "2.3",
            Scale25: "2.5"
         },

         margin: {
            "65vh": "65vh",
            "50vh": "50vh",
            "35vh": "35vh"
         },
         width: {
            "30%": "30%",
            "38%": "38%"
         }
         // screens: {
         // xs: "240px",

         // ...defaultTheme.screens,
         // sm: "640px",
         // => @media (min-width: 640px) { ... }
         //  md: "767px",
         // => @media (min-width: 768px) { ... }
         //  lg: "1023px",
         // => @media (min-width: 1024px) { ... }
         //  xl: "1281px",
         // => @media (min-width: 1280px) { ... }
         // "2xl": "1537px",
         // => @media (min-width: 1536px) { ... }
         //  },
      }
   },

   variants: {
      extend: { backgroundColor: ["active"], scale: ["active"] }
   },
   plugins: [require("@tailwindcss/line-clamp")]
}
