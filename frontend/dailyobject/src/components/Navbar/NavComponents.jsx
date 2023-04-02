import { HStack, List, ListItem, Text, VStack } from "@chakra-ui/react"

const style = {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left"
}
export const Dz = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Deal Zone") }}>
            <VStack style={style}>
                <Text>NEW ARRIVALS</Text>
                <List>
                    <ListItem>Desks</ListItem>
                    <ListItem>Charging Solutions</ListItem>
                    <ListItem>Collections</ListItem>
                    <ListItem>Macbook Sleeves</ListItem>
                    <ListItem>Messenger Bags</ListItem>
                    <ListItem>Eyewear Cases</ListItem>
                    <ListItem>Watchbands</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}
export const Sr = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Sofas & Recliners") }}>
            <VStack style={style}>
                <Text>CASES & SLEEVES</Text>
                <List>
                    <ListItem>Apple</ListItem>
                    <ListItem>Samsung</ListItem>
                    <ListItem>Wooden Sofa Sets</ListItem>
                    <ListItem>Leather Sofa Sets</ListItem>
                    <ListItem>Leatherette Sofa Sets</ListItem>
                    <ListItem>L Shaped Sofa Sets</ListItem>
                    <ListItem>Diwans</ListItem>
                    <ListItem>Loveseats</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Recliners</Text>
                <List>
                    <ListItem>All Recliners</ListItem>
                    <ListItem>1 Seater Recliners</ListItem>
                    <ListItem>2 Seater Recliners</ListItem>
                    <ListItem>3 Seater Recliners</ListItem>
                    <ListItem>Fabric Recliners</ListItem>
                    <ListItem>Leatherette Recliners</ListItem>
                    <ListItem>Motorized Recliners</ListItem>
                    <ListItem>Manual Recliners</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Sofa Bed</Text>
                <List>
                    <ListItem>All Sofa Beds</ListItem>
                    <ListItem>Fabric Sofa Beds</ListItem>
                    <ListItem>Wooden Sofa Beds</ListItem>
                    <ListItem>Futons</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Seating & Chairs</Text>
                <List>
                    <ListItem>Lounge Chairs</ListItem>
                    <ListItem>Accent Chairs</ListItem>
                    <ListItem>Ottomans & Stools</ListItem>
                    <ListItem>Bean Bags</ListItem>
                    <ListItem>Benches</ListItem>
                    <ListItem>Bar Stools</ListItem>
                    <ListItem>Rocking Chairs</ListItem>
                    <ListItem>Gaming Chairs</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}
export const Li = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Living") }}>
            <VStack style={style}>
                <Text>Seating & Chairs</Text>
                <List>
                    <ListItem>Lounge Chairs</ListItem>
                    <ListItem>Accent Chairs</ListItem>
                    <ListItem>Recliners</ListItem>
                    <ListItem>Sofa Cum Bed</ListItem>
                    <ListItem>Ottomans & Stools</ListItem>
                    <ListItem>Bean Bags</ListItem>
                    <ListItem>Benches</ListItem>
                    <ListItem>Bar Stools</ListItem>
                    <ListItem>Rocking Chairs</ListItem>
                    <ListItem>Gaming Chairs</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Tables</Text>
                <List>
                    <ListItem>Coffee Tables</ListItem>
                    <ListItem>Side & End Tables</ListItem>
                    <ListItem>Console Table</ListItem>
                    <ListItem>Nested Tables</ListItem>
                    <ListItem>Coffee Table Sets</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Living Storage</Text>
                <List>
                    <ListItem>TV Units</ListItem>
                    <ListItem>Bookshelves</ListItem>
                    <ListItem>Shoe Racks</ListItem>
                    <ListItem>Prayer Units</ListItem>
                    <ListItem>Showcases</ListItem>
                    <ListItem>Wall Shelves</ListItem>
                    <ListItem>Entryway & Foyer</ListItem>
                    <ListItem>Corner Storage</ListItem>
                    <ListItem>Room Divider</ListItem>
                    <ListItem>Living Room Sets</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}
export const Bm = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Bedroom & Mattresses") }}>
            <VStack style={style}>
                <Text>Beds</Text>
                <List>
                    <ListItem>All Beds</ListItem>
                    <ListItem>Beds with Storage</ListItem>
                    <ListItem>Beds without Storage</ListItem>
                    <ListItem>King Size Beds</ListItem>
                    <ListItem>Queen Size Beds</ListItem>
                    <ListItem>Single Beds</ListItem>
                    <ListItem>Double Beds</ListItem>
                    <ListItem>Bed-Mattress Sets</ListItem>
                    <ListItem>Upholstered Beds</ListItem>
                    <ListItem>Trundle Beds</ListItem>
                    <ListItem>Sofa cum Beds</ListItem>
                    <ListItem>Bedroom Sets</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Mattresses</Text>
                <List>
                    <ListItem>All Mattresses</ListItem>
                    <ListItem>King Size Mattress</ListItem>
                    <ListItem>Queen Size Mattress</ListItem>
                    <ListItem>Single Bed Mattress</ListItem>
                    <ListItem>Double Bed Mattress</ListItem>
                    <ListItem>Mattress By Material</ListItem>
                    <ListItem>Mattress by Brand</ListItem>
                    <ListItem>Mattress By Range</ListItem>
                    <ListItem>Mattress By Firmness</ListItem>
                    <ListItem>Mattress Protectors</ListItem>
                    <ListItem>Pillows</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Storage & Accessories</Text>
                <List>
                    <ListItem>Wardrobes</ListItem>
                    <ListItem>Bedside Tables</ListItem>
                    <ListItem>Chest of Drawers</ListItem>
                    <ListItem>Dressers & Mirrors</ListItem>
                    <ListItem>Modular Wardrobes</ListItem>
                    <ListItem>Bedroom Benches</ListItem>
                    <ListItem>Storage Chests</ListItem>
                    <ListItem>Bedroom Chairs</ListItem>
                    <ListItem>Plastic Storage</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Kids Room</Text>
                <List>
                    <ListItem>Kids Beds</ListItem>
                    <ListItem>Kids Tables</ListItem>
                    <ListItem>Bunk Beds</ListItem>
                    <ListItem>Kids Seating</ListItem>
                    <ListItem>Kids Decor</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}
export const Di = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Dining") }}>
            <VStack style={style}>
                <Text>Dining Tables & Chairs</Text>
                <List>
                    <ListItem>6 Seater Dining Table Sets</ListItem>
                    <ListItem>4 Seater Dining Table Sets</ListItem>
                    <ListItem>All 2 & 3 Seater Dining Table Sets</ListItem>
                    <ListItem>All 8 Seater Dining Table Sets</ListItem>
                    <ListItem>All Dining Table Sets</ListItem>
                    <ListItem>Dining Tables</ListItem>
                    <ListItem>Dining Chairs</ListItem>
                    <ListItem>Dining Benches</ListItem>
                    <ListItem>Folding Dining Table Sets</ListItem>
                    <ListItem>Chair Pads</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Storage & Bar Furniture</Text>
                <List>
                    <ListItem>Crockery Units</ListItem>
                    <ListItem>Kitchen Cabinets & Racks</ListItem>
                    <ListItem>Bar Stools</ListItem>
                    <ListItem>Bar Cabinets</ListItem>
                    <ListItem>Modular Kitchen</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}
export const Se = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Storage") }}>
            <VStack style={style}>
                <Text>Living Storage</Text>
                <List>
                    <ListItem>Shoe Racks</ListItem>
                    <ListItem>Bookshelves</ListItem>
                    <ListItem>Showcases</ListItem>
                    <ListItem>Prayer Units</ListItem>
                    <ListItem>TV Units</ListItem>
                    <ListItem>Wall Shelves</ListItem>
                    <ListItem>Entryway & Foyer</ListItem>
                    <ListItem>Living Room Sets</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Bedroom Storage</Text>
                <List>
                    <ListItem>Cupboards</ListItem>
                    <ListItem>Chest of Drawers</ListItem>
                    <ListItem>Bedside Tables</ListItem>
                    <ListItem>Dressers & Mirrors</ListItem>
                    <ListItem>Storage Chests</ListItem>
                    <ListItem>Modular Wardrobes</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Dining Storage</Text>
                <List>
                    <ListItem>Crockery Units</ListItem>
                    <ListItem>Kitchen Cabinets & Racks</ListItem>
                    <ListItem>Bar Cabinets</ListItem>
                    <ListItem>Modular-Kitchen</ListItem>
                </List>
            </VStack>
            <VStack style={style}>
                <Text>Kids Storage</Text>
                <List>
                    <ListItem>Kids Bookshelves</ListItem>
                    <ListItem>Kids Bedside Tables</ListItem>
                    <ListItem>Kids Storage Cabinets</ListItem>
                    <ListItem>Kids Chest of Drawers</ListItem>
                    <ListItem>Kids Wardrobes</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}