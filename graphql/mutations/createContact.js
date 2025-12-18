import { gql } from '@apollo/client/core';

// Холбоо барих хүсэлт илгээх mutation
export const CREATE_CONTACT = gql`
  mutation CreateContact($input: ContactInput!) {
    createContact(input: $input) {
      success
      message
    }
  }
`;
