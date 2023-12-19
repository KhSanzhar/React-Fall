/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProductUser = /* GraphQL */ `
  mutation CreateProductUser(
    $input: CreateProductUserInput!
    $condition: ModelProductUserConditionInput
  ) {
    createProductUser(input: $input, condition: $condition) {
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
export const updateProductUser = /* GraphQL */ `
  mutation UpdateProductUser(
    $input: UpdateProductUserInput!
    $condition: ModelProductUserConditionInput
  ) {
    updateProductUser(input: $input, condition: $condition) {
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
export const deleteProductUser = /* GraphQL */ `
  mutation DeleteProductUser(
    $input: DeleteProductUserInput!
    $condition: ModelProductUserConditionInput
  ) {
    deleteProductUser(input: $input, condition: $condition) {
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
