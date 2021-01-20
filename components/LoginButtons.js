import { Button, Flex } from '@chakra-ui/react';
import Router from 'next/router';

const LoginButtons = () => {
  return (
    <Flex direction={['column', 'row']}>
      <Button
        onClick={() => Router.push('/signin')}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        mt={4}
        mr={2}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Continue to Sign-in
      </Button>
    </Flex>
  );
};

export default LoginButtons;
