const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        _id: ID
        category: String
        name: String
        abv: Int
        package: [Package]
    }    

    type Package {
        _id: ID
        size: Int
        perCase: Int
        inStock: Int
        price: Float
    }

    type Query {
        product: [Product]
    }
    `

module.exports = typeDefs;