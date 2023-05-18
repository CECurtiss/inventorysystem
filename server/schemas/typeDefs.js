const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        _id: ID
        category: String
        name: String
        size: Int
        abv: Int
    }    


    type Query {
        product: [Product]
    }
    `

module.exports = typeDefs;