/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      price
      description
      category
      image
      Users {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        description
        category
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      FirstName
      LastName
      login
      email
      password
      products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FirstName
        LastName
        login
        email
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProductUser = /* GraphQL */ `
  query GetProductUser($id: ID!) {
    getProductUser(id: $id) {
      id
      productId
      userId
      product {
        id
        title
        price
        description
        category
        image
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        FirstName
        LastName
        login
        email
        password
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProductUsers = /* GraphQL */ `
  query ListProductUsers(
    $filter: ModelProductUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productUsersByProductId = /* GraphQL */ `
  query ProductUsersByProductId(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productUsersByProductId(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productUsersByUserId = /* GraphQL */ `
  query ProductUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
