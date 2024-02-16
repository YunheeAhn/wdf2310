// chakra-ui 컴포넌트 스타일 변경

import { lighten } from "polished";

const BasicTheme = ({
    colors: {
      primary : '#1b254b',
      brand: {
        100: "#f7fafc",
        200: "#A3AED0",
        900: "#1a202c",
      },
      key: {
        base: "#1B254B",
      },
      red : {
        base: "ff0000",
        100: "#ff9999",
        200: lighten(0.10, "#ff9999"),
        900: "#ff2626"
      }
    },
    
});

export default BasicTheme;

// polished 라이브러리 설치 하면 lighten 설정 가능
// npm install polished
// 예시 -> 100: lighten(0.2, '#ff9999'),
