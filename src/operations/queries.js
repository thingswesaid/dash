import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

export const VIDEO_PAGE_QUERY = gql` 
  query VideoPageQuery($id: ID!, $ip: String, $email: String, $showAll: Boolean) {
    videoPage(id: $id, ip: $ip, email: $email, showAll: $showAll) {
      video {
        id
        # name
        link
        preview
        image
        placeholder
        published
        price
        start
        type
        familyId
        options
        users {
          id
          email
          ips
          active
        }
      }
      latestVideos {
        id
        title
        # name
        image
        placeholder
        published
      } 
      promoVideo {
        link
        title
        description
        image
        placeholder
        banner
        bannerMobile
      }
      userActive
      sitePromo {
        promoOffer
        type
        title
        subtitle
        description
        newPrice
        startDate
        endDate
      }
    }
  }
`;

export const SEARCH_QUERY = gql` 
  query SearchQuery($keywords: String, $id: ID, $type: String) {
    videos(keywords: $keywords, id: $id, type: $type) {
      id
      link
      image
      title
      placeholder
      # maybe description for pick a card readings
    }
  }
`;

export const USER_QUERY = gql` 
  query userQuery($id: ID!) {
    userPage(id: $id) {
      email
      promos {
        code
        createdAt
        valid
      }
      orders {
        createdAt
        video {
          id
          title
          image
          placeholder
        }
      }
    }
  }
`;

export const USERIP_QUERY = gql` 
  query UserIpQuery {
    userIp
  }
`;

export const PRODUCT_QUERY = gql` 
  query ProductsQuery($type: String) {
    products(type: $type) {
      types
      items {
        link
        name
        description
        image
        placeholder
        type
      }
    }
  }
`;

const PROMO_CODE_QUERY = gql` 
  query PromoCodeQuery($code: String) {
    promoCode(code: $code) {
      id
      code
      valid
      endDate
      type
      user {
        email
      }
    }
  }
`;

export const videoPageQuery = ({
  render, id, ip, email, showAll,
}) => (
  <Query
    query={VIDEO_PAGE_QUERY}
    variables={{
      id, ip, email, showAll,
    }}
  >
    {render}
  </Query>
);

export const searchQuery = ({ render, keywords = '' }) => (
  <Query query={SEARCH_QUERY} variables={{ keywords }}>
    {render}
  </Query>
);

export const productsQuery = ({ render, type }) => (
  <Query query={PRODUCT_QUERY} variables={{ type }}>
    {render}
  </Query>
);

export const promoCodeQuery = ({ render, code }) => (
  <Query query={PROMO_CODE_QUERY} variables={{ code }}>
    {render}
  </Query>
);
