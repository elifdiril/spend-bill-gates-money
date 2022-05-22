import Product from "../Product";
import { useSelector } from "react-redux";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

function Products() {
  const items = useSelector((state) => state.product.items);
  const currentMoney = useSelector((state) => state.product.currentMoney);

  return (
    <div>
      <Box
        mt={2}
        mb={4}
        bg="green.400"
        color="white"
        height="80px"
        zIndex="sticky"
        opacity={1}
        sx={{
          position: "-webkit-sticky",
          /* Safari */ position: "sticky",
          top: "0",
        }}
      >
        <Text fontSize={40} fontWeight={500}>
          {" "}
          $ {currentMoney}
        </Text>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {items.map((item) => (
          <GridItem key={item.id}>
            <Product id={item.id} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
