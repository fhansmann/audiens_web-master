import React from 'react';
import { Box, Button } from '@chakra-ui/react';

import { Table, Tr, Th, Td } from './Table';

const FeedbackTable = (props) => {
  return (
    <Box overflowX="scroll">
      <Table w="full">
        <thead>
          <Tr>
            <Th minW="150px">Position</Th>
            <Th>Created at</Th>
            <Th>Submissions</Th>
            <Th>Status</Th>
            <Th>Settings</Th>
            <Th>View Applicants</Th>
          </Tr>
        </thead>
        <Box as="tr">
          <Td fontWeight="medium">Business Development Mananger</Td>
          <Td>5 Jan 2021</Td>
          <Td>7 Applicants</Td>
          <Td>Active</Td>
          <Td>
            <Button fontWeight="medium">Settings</Button>
          </Td>
          <Td>
            <Button fontWeight="medium" colorScheme="teal">
              View Apps
            </Button>
          </Td>
        </Box>
        <Box as="tr">
          <Td fontWeight="medium">Senior Data Scientist</Td>
          <Td>3 Jan 2021</Td>
          <Td>5 Applicants</Td>
          <Td>Inactive</Td>
          <Td>
            <Button fontWeight="medium">Settings</Button>
          </Td>
          <Td>
            <Button fontWeight="medium" colorScheme="teal">
              View Apps
            </Button>
          </Td>
        </Box>
      </Table>
    </Box>
  );
};

export default FeedbackTable;
