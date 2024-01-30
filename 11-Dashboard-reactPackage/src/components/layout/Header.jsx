// 헤더컴포넌트

const Header = () => {
    return (
        <div>
            <h1><a href="/">Dashboard</a></h1>
            <nav>
                <ul>
                    <li><a href="/marketplace">Main Dashboard</a></li>
                </ul>
                <ul>
                    <li><a href="/datatables">Datatables Dashboard</a></li>
                </ul>
                <ul>
                    <li><a href="/profile">Profile Dashboard</a></li>
                </ul>
                <ul>
                    <li><a href="/signin">signin Dashboard</a></li>
                </ul>
                <ul>
                    <li><a href="/rtl">Rtl Dashboard</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;