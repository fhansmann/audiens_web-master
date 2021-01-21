import { Box, Flex, Text, Heading } from '@chakra-ui/react';

import LoginButtons from '@/components/LoginButtons';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Heading as="h1" fontWeight="bold" display="inline" mb={4}>
            audiens
          </Heading>
          <Text as="span" fontWeight="medium" display="inline">
            Audio burns with human information. Leverage it to hire the best
            talent.
          </Text>
          <LoginButtons />
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
