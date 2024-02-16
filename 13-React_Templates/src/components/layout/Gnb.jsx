import { ListItem, UnorderedList } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Gnb = () => {
    return (
        <UnorderedList display={{sm : 'none', lg: 'flex'}} gap={'20px'}  fontSize={'16px'}>
            <ListItem>
                <Link to="/marketplace" >Main Dashboard</Link>
            </ListItem>
            <ListItem>
            <Link to="/datatables">Datatables Dashboard</Link>
            </ListItem>
            <ListItem>
                <Link to="/profile">Profile Dashboard</Link>
            </ListItem>
            <ListItem>
                <Link to="/signin">signin Dashboard</Link>
            </ListItem>
            <ListItem>
                <Link to="/rtl">Rtl Dashboard</Link>
            </ListItem>
        </UnorderedList>
    )
}

export default Gnb