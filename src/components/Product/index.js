import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { updateCount } from "../../redux/Product/productSlice";
import controlSellable from "../../helpers/controlSellable";

function Product({ id }) {
  const items = useSelector((state) => state.product.items);
  const currentMoney = useSelector((state) => state.product.currentMoney);

  const item = items.find((tmp) => tmp.id === id);

  const [count, setCount] = useState(item.count);
  const [isBuyable, setIsBuyable] = useState(true);
  const [isSellable, setIsSellable] = useState(false);

  const dispatch = useDispatch();

  let maximumBuy = Math.floor(currentMoney / item.productPrice);
  let maximum = Number(count) + Number(maximumBuy);

  useEffect(() => {
    dispatch(updateCount({ id: item.id, count: count }));

    setIsSellable(controlSellable(count));
  }, [count]);

  useEffect(() => {
    if (item.productPrice <= currentMoney) {
      setIsBuyable(true);
    }else{
      setIsBuyable(false);
    }
  }, [currentMoney]);

  const buy = () => {
    handleChange(Number(count) + 1);
  };

  const sell = () => {
    handleChange(Number(count) - 1);
  };

  const handleChange = (value) => {
    if (value > maximum && currentMoney > 0) {
      setCount(maximum);
    } else if (value < 0) {
      setCount(0);
    } else if (currentMoney === 0 && value < count) {
      setCount(value);
    } else {
      setCount(value);
    }
  };

  return (
    <Box
      w="100%"
      h="100%"
      bg="#EBF8FF"
      p={4}
      color="black"
      borderWidth="1px"
      alignItems="center"
    >
      <Image src={item.image} m="auto" />
      <Text fontSize={25} fontWeight={700}>
        {item.productName}
      </Text>
      <Text>${item.productPrice}</Text>
      <Box alignItems="center" m="auto">
        <Button
          colorScheme="red"
          isDisabled={!isSellable}
          width="100px"
          height="40px"
          ms={4}
          onClick={() => sell()}
        >
          Sell
        </Button>

        <Input
          type="number"
          textAlign="center"
          value={count}
          onChange={(e) => handleChange(e.target.value)}
          width="80px"
          height="40px"
        />
        <Button
          colorScheme="green"
          isDisabled={!isBuyable}
          width="80px"
          height="40px"
          me={4}
          onClick={() => buy()}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
}

export default Product;
