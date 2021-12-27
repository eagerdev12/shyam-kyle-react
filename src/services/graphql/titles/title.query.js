import { gql } from "@apollo/client";

export const GET_TITLES = gql`
    query GetTitles {
        getTitles {
            title
            thumbnail
        }
    }
`;