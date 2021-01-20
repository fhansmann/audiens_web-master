import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  Link
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Router from 'next/router';

const Signin = () => {
  const { handleSubmit, register, errors } = useForm();
  return (
    <Flex align="center" justify="center" h="100vh">
      <Stack
        as="form"
        borderRadius={8}
        errors={errors}
        maxWidth="400px"
        px={8}
        py={12}
        register={register}
        shadow={[null, 'lg']}
        spacing={3}
        w="100%"
      >
        <FormControl isInvalid={errors.email && errors.email.message}>
          <FormLabel>Email Address</FormLabel>
          <Input
            autoFocus
            aria-label="Email Address"
            name="email"
            ref={register({
              required: 'Please enter your email.'
            })}
            placeholder="tim@audiens.com"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.pass && errors.pass.message}>
          <FormLabel>Password</FormLabel>
          <Input
            aria-label="Password"
            name="pass"
            type="password"
            ref={register({
              required: 'Please enter a password.'
            })}
          />
          <FormErrorMessage>
            {errors.pass && errors.pass.message}
          </FormErrorMessage>
        </FormControl>

        <Text fontSize="sm">
          <Link href="/"> Reset Password </Link>
        </Text>

        <Button
          onClick={() => Router.push('/dashboard')}
          mt={4}
          variantColor="teal"
          variant="solid"
        >
          Sign-in
        </Button>
      </Stack>
    </Flex>
  );
};

export default Signin;
