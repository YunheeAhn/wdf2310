import { ListItem, UnorderedList } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Gnb = () => {
    return (
        <UnorderedList w={'100%'} display={'flex'} flexDirection={'column'} gap={'20px'}  fontSize={'16px'} margin={0}>
            <ListItem>
                <Link to="/marketplace" >Main Dashboard</Link>
            </ListItem>
            <ListItem>
                <Link to="/datatables">NFT Marketplace</Link>
            </ListItem>
            <ListItem>
                <Link to="/datatables">Data tables</Link>
            </ListItem>
            <ListItem>
                <Link to="/profile">Profile</Link>
            </ListItem>
            <ListItem>
                <Link to="/signin">signin</Link>
            </ListItem>
            <ListItem>
                <Link to="/rtl">Rtl</Link>
            </ListItem>


        

        </UnorderedList>
    )
}

export default Gnb