/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      FirstName
      LastName
      login
      email
      password
      productCart {
        id
        title
        price
        description
        category
        image
        rating
        ratecount
        __typename
      }
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
      productCart {
        id
        title
        price
        description
        category
        image
        rating
        ratecount
        __typename
      }
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
      productCart {
        id
        title
        price
        description
        category
        image
        rating
        ratecount
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
