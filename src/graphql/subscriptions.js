/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProductUser = /* GraphQL */ `
  subscription OnCreateProductUser(
    $filter: ModelSubscriptionProductUserFilterInput
  ) {
    onCreateProductUser(filter: $filter) {
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
        userId
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
export const onUpdateProductUser = /* GraphQL */ `
  subscription OnUpdateProductUser(
    $filter: ModelSubscriptionProductUserFilterInput
  ) {
    onUpdateProductUser(filter: $filter) {
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
        userId
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
export const onDeleteProductUser = /* GraphQL */ `
  subscription OnDeleteProductUser(
    $filter: ModelSubscriptionProductUserFilterInput
  ) {
    onDeleteProductUser(filter: $filter) {
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
        userId
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
