import { Box, Code, Switch, Button } from '@chakra-ui/react';
import { Td } from './Table';

import DeleteFeedbackButton from './DeleteFeedbackButton';

const FeedbackRow = ({ id, author, text, route, status }) => {
  return (
    <Box as="tr" key={id}>
      <Td fontWeight="medium">{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code
          maxW="150px"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
          display="inherit"
        >
          {route || '/'}
        </Code>
      </Td>
      <Td>
        <Switch color="green" />
      </Td>
      <Td>
        <Button fontWeight="bold" variantColor="red" ml={3}>
          Delete
        </Button>
      </Td>
    </Box>
  );
};

export default FeedbackRow;
