const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        _id: ID
        name: String
        abv: Int
        category: [Category]
        package: [Package]
    }    

    type Package {
        _id: ID
        size: Int
        perCase: Int
        inStock: Int
        price: Float
    }

    type Category {
        _id: ID
        name: String
        subCategory: String
    }

    type Query {
        product: [Product]
        category: [Category]
        package: [Package]
    }
    `

module.exports = typeDefs;