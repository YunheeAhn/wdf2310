
// 유저 컴포넌트
const User = ({user}) => {
    // const {user} = props
    // 구조분해 할당을 한 {user}
    return (
        <>
            <img
                src={user.img}
                alt={user.alt}
                style={{ width: '100px', height: '100px', objectFit: 'cover', display: 'flex' }}
            />
            <strong>{user.name}</strong>
        </>
            
    );
}

export default User