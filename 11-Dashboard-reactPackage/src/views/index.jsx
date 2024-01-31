// 첫페이지

import Title, { TitleH4 } from "../components/comm/Title";
import Layout from "../components/layout/Layout"

const Home = () => {
    return (
        <Layout title="home"> 
        {/* childeren . 메인컨텐츠 */}

            <section>
                <Title>회사소개</Title>
                Lorem ipsum dolor sit amet.

                <TitleH4>대표이사 한 마디</TitleH4>
                Lorem ipsum dolor sit amet consectetur.

                <TitleH4>회사의 발자취</TitleH4>
                Lorem ipsum dolor, sit amet consectetur adipisicing.

            </section>

            <section>
                <Title>회사비전</Title>
                    Lorem ipsum dolor sit amet.

                <TitleH4>회사 슬로건</TitleH4>
                Lorem ipsum.

                <TitleH4>회사의 연혁</TitleH4>
                Lorem ipsum dolor, sit amet consectetur adipisicing.
                Lorem ipsum dolor, sit amet consectetur adipisicing.
                Lorem ipsum dolor, sit amet consectetur adipisicing.
                Lorem ipsum dolor, sit amet consectetur adipisicing.
            </section>

        </Layout>
    )
}



export default Home;