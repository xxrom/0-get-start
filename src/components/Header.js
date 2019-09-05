import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";

const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

const Header = props => {
  const { loading, error, data } = useQuery(BOOKS);
  console.log("data", data);
  const books =
    Array.isArray(data.books) &&
    data.books.map((item, index) => (
      <Wrapper key={index}>
        <Title>{item.title}</Title>
        <Author>{item.author}</Author>
      </Wrapper>
    ));
  return (
    <div>
      <h1>Header</h1>
      <h2>{loading ? "loading" : "ready!"}</h2>
      <div>{error ? <h1>error</h1> : ""}</div>
      {books}
    </div>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 1rem;
  border-left: 1px solid red;
`;
const Title = styled.div`
  color: green;
  font-size: 1.2rem;
`;
const Author = styled.div`
  color: gray;
  font-size: 0.8rem;
`;

export { Header };
