import { gql } from '@apollo/client/core';

// Бүх хөтөлбөрүүдийг авах query
export const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      title
      description
      date
      duration
      capacity
      images
    }
  }
`;

// Нэг хөтөлбөрийг ID-ээр авах query
export const GET_PROGRAM_BY_ID = gql`
  query GetProgramById($id: ID!) {
    program(id: $id) {
      id
      title
      description
      date
      duration
      capacity
      images
    }
  }
`;
