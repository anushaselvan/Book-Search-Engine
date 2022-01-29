import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      username
      bookCount
      savedBooks {
          authors
          description
          bookId
          title
          link
          image
      }
    }
  }
`;
// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  };
  