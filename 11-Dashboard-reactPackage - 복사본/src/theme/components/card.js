import { mode } from "@chakra-ui/theme-tools";

export const cardstyles = {
    components: {
        Card: {
            baseStyle: {
                container: {
                    borderRadius: "20px",
                    bg: 'white',
                    boxShadow: 'none',
                    padding: '20px',
                },
            },

            variants: {
                cardPrimary: (props) => ({
                    container: {
                        borderRadius: "10px",
                        bg: mode('white', 'gray.700')(props),
                        boxShadow: 'none',
                        padding: '20px'
                    }
                })
            }
        }
    }
}