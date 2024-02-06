const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Cars {
    id: ID
    make: String
    model: String
    sold: Boolean
  }

  type Query {
    allCars: [Cars],
    getCarById(id: ID!): Cars,
    getSoldCars(sold:Boolean!): [Cars]
  }

  type Mutation {
    addCar(id: Int!, make: String!, model: String!, price: Int!, image: String!, sold: Boolean!): Cars
  }
`;

module.exports = typeDefs;
