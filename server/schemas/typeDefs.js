const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Spirits {
        _id: ID
        name: String
        size: Int
        category: String
        abv: Int
    }

    type Query {
        spirits: [Spirits]
    }
    `

module.exports = typeDefs;