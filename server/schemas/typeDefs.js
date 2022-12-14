const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
        
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input SavedBookInput {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String
        
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookData: SavedBookInput): User
        removeBook(bookId: ID!): User
    }
    `;

    module.exports = typeDefs;