// 메인, 여기에 다 모으기

import Routers from "./Routers";
import './assets/scss/style.scss'
import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from "./theme";


function App() {
  return (
  // <Layout title="dashboard children Layout에서 보이게 하기,Home">메인컨텐츠</Layout>
  <ChakraBaseProvider theme={theme}>
    <Routers />
  </ChakraBaseProvider>
  )
     
}

export default App;
