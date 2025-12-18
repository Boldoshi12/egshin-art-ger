import { gql } from '@apollo/client/core';

// Бүх үзэсгэлэнгүүдийг авах query
export const GET_EXHIBITIONS = gql`
  query GetExhibitions {
    exhibitions {
      id
      title
      description
      startDate
      endDate
      images
      artist
      location
    }
  }
`;

// Нэг үзэсгэлэнг ID-ээр авах query
export const GET_EXHIBITION_BY_ID = gql`
  query GetExhibitionById($id: ID!) {
    exhibition(id: $id) {
      id
      title
      description
      startDate
      endDate
      images
      artist
      location
    }
  }
`;
