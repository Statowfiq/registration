import gql from "graphql-tag";

export const USERNAME = gql`
query username {
  username @client
}
`;
export const EMAIL = gql`
query email {
email @client
}
`;
export const PASSWORD = gql`
query password {
password @client
}
`;

export const NAME = gql`
query name {
name @client
}
`;