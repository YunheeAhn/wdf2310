// 메인, 여기에 다 모으기

import { ChakraBaseProvider } from "@chakra-ui/react";
import Routers from "./Routers";
import './assets/scss/style.scss'
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";

// gsap 라이브러리 임포트, 제일 상위에 붙이기
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';







gsap.registerPlugin(ScrollTrigger);


function App() {
  return (
  // <Layout title="dashboard children Layout에서 보이게 하기,Home">메인컨텐츠</Layout>
    <ChakraBaseProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </ChakraBaseProvider>
  
  )
}

export default App;
