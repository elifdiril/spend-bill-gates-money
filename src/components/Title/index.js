import { Box, Image, Text } from '@chakra-ui/react';

function Title() {
    return (
        <Box alignItems='center'>
            <Image src='https://neal.fun/spend/billgates.jpg' m={'auto'} borderRadius='full' />
            <Text fontSize={40} mt={3} m={'auto'}  fontWeight={700}>Spend Bill Gates' Money</Text>
        </Box>
    );
}

export default Title;