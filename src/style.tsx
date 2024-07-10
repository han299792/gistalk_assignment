import styled from "styled-components";

export const PostTitle = styled.h1`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  color: pink;
`;

export const PostBody = styled.p`
  font-size: 1em;
  color: beige;
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

export const PhotoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotoImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
