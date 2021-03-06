import React from 'react';
import { Subscription } from 'react-apollo';
import { gql } from 'apollo-boost';

export const USER_SUBSCRIPTION = gql` 
  subscription userSubscription($id: ID, $email: String) {
    user(id: $id, email: $email) {
      id
      email
      active
    }
  }
`;

export const userSubscription = ({ render, id = '', email = '' }) => {
  return (
  <Subscription subscription={USER_SUBSCRIPTION} variables={{ id, email }}>
    {render}
  </Subscription>
)};