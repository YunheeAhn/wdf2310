import { mode } from "@chakra-ui/theme-tools";
const Card = {
  baseStyle: (props) => ({
    p: "20px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    borderRadius: "20px",
    minWidth: "0px",
    wordWrap: "break-word",
    bg: mode("#ffffff", "navy.800")(props),
    backgroundClip: "border-box",
  }),
};

export const CardComponent = {
  components: {
    Card: {
      variants: {
        cardPrimary: (props) => ({
          borderRadius: "10px",
          bg: mode('white', 'gray.700')(props),
          boxShadow: 'none',
          padding: '20px'
      })
      }
    }
  },
};
