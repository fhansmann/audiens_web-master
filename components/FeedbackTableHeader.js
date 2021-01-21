import React from 'react';
import NextLink from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box,
  Button
} from '@chakra-ui/react';

const FeedbackTableHeader = () => (
  <Box mx={4}>
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/feedback" passHref>
          <BreadcrumbLink>Applications</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>All Applications</Heading>
      <Button fontWeight="medium" colorScheme="teal" mr={4}>
        + Add Position
      </Button>
    </Flex>
  </Box>
);

export default FeedbackTableHeader;
