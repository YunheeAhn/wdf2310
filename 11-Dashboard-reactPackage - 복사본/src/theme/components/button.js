import { mode } from "@chakra-ui/theme-tools";
export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "16px",
        // boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
      },
      variants: {
        ghost: () => ({
          bg: "rgba(256,256,256,0.6)",
          color : "white",

        }),
        icon: () => ({
          bg: "#fff",
          color : "#D1D5DB",
          with: "22px",
          height : "22px",
          padding : "none"
        }),
        link12: () => ({
          fontSize: "12px",
          color: "white",
          padding: 0
        }),
        outline: () => ({
          borderRadius: "16px",
          bg : [
            'red.100', 'red.500', 'red.600', 'white'
          ],
          color : {sm : 'white', xl : 'red.500'}
        }),
        brand: (props) => ({
          bg: mode("brand.500", "brand.400")(props),
          color: "white",
          _focus: {
            bg: mode("brand.500", "brand.400")(props),
          },
          _active: {
            bg: mode("brand.500", "brand.400")(props),
          },
          _hover: {
            bg: mode("brand.600", "brand.400")(props),
          },
        }),
        darkBrand: (props) => ({
          bg: mode("brand.900", "brand.400")(props),
          color: "white",
          _focus: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _active: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _hover: {
            bg: mode("brand.800", "brand.400")(props),
          },
        }),
        lightBrand: (props) => ({
          bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        light: (props) => ({
          bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        action: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("secondaryGray.300", "brand.400")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "brand.400")(props),
          },
          _active: { bg: mode("secondaryGray.300", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.200", "brand.400")(props),
          },
        }),
        setup: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("transparent", "brand.400")(props),
          border: mode("1px solid", "0px solid")(props),
          borderColor: mode("secondaryGray.400", "transparent")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("transparent", "brand.400")(props),
          },
          _active: { bg: mode("transparent", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.100", "brand.400")(props),
          },
        }),
      },
    },
  },
};
