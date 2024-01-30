// 레이아웃 컴포넌트

import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    return (
        <div className="wrap">
            <Header />
            <main id="main">
                <h2>{props.title}</h2>
                {props.children}
                {/* props.children : App.jsx의 Layout태그 안에 있는 내용 */}
                </main>
            <Footer />
        </div>
    )
}

export default Layout;