import { mode } from "@chakra-ui/theme-tools";
import { lighten } from "polished";


export const maxWidth = {
  maxW : '1280px'
}

export const globalStyles = {
  colors: {
    brand: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#11047A",
    },
    brandScheme: {
      100: "#E9E3FF",
      200: "#7551FF",
      300: "#7551FF",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    brandTabs: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#422AFB",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      300: "#ff2323",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      650: "#422AFB",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437",
    },


    primay: '#422AFB',

    pirmaryLight: lighten(0.1, '#422AFB'),

    secondary: '#83D9FB',

    secondaryLight: lighten(0.1, '#83D9FB'),

    tertiary: '#22C55F',

    tertiaryLight: lighten(0.1, '#22C55F'),

    bgDefault: '#F5F7FF',

    white: '#FFF',

    black: '#000',

    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
  },

    back: {
      tnb: "rgba(0,0,0,6)"
    }
  },

  // 글로벌 설정 변경 (폰트 등등)
  styles: {
    global: (props) => ({
        body: {
            minW: '330px',
            // overflowX: 'hidden',
            fontFamily: '"DM Sans", "sans-serif"',
            letterSpacing: '-0.5px',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '1.5',
            color: mode('gray.900', 'white')(props),
            bg: mode('bgDefault', 'navy.900')(props),
            // bg: 'url("/bg-/m.png") no-repeat 50% 0 / 420px auto',
        },
        '#root': {
            // opacity: 0.7,
        },
        input: {
            color: 'gray.700',
        },
        html: {
            fontFamily: '"DM Sans", "sans-serif"',
        },
        'ul > li': {
            listStyle: 'none',
        },
        '.chakra-container': {
            maxWidth: 'calc(1280px + var(--chakra-space-4) * 2) !important',
        },
        '.blind': {
            position: 'absolute',
            width: 0,
            height: 0,
            margin: -1,
            padding: 0,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            border: 0,
            lineHeight: 0,
        },
    }),
  },
};
