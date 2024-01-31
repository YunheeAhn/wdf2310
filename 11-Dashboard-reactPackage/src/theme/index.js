// chakra-ui 컴포넌트 스타일 변경

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        brand: {
          100: "#f7fafc",
          900: "#1a202c",
        },
      },
});

export default theme;