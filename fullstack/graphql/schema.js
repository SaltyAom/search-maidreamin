const { gql } = require("apollo-server")

const typeDefs = gql`
    type Query {
        getMenu: [Menu]
        getMenuBy(name: String, price: Int): [Menu]
    }

    type Menu @cacheControl(maxAge: 3600){
        name: MenuName
        subMenu: [String]
        price: Int!
    }

    type MenuName @cacheControl(maxAge: 3600){
        th: String
        en: String
        jp: String
    }
`

module.exports = typeDefs