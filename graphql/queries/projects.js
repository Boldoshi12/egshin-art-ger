import { gql } from '@apollo/client/core';

// Бүх төслүүдийг авах query
export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      description
      category
      images
      completedDate
    }
  }
`;

// Нэг төслийг ID-ээр авах query
export const GET_PROJECT_BY_ID = gql`
  query GetProjectById($id: ID!) {
    project(id: $id) {
      id
      title
      description
      category
      images
      completedDate
    }
  }
`;

// Төслүүдийг ангиллаар шүүх query
export const GET_PROJECTS_BY_CATEGORY = gql`
  query GetProjectsByCategory($category: String!) {
    projectsByCategory(category: $category) {
      id
      title
      description
      category
      images
      completedDate
    }
  }
`;
