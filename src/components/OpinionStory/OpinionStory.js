import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <AuthorInfoWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </AuthorInfoWrapper>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "info img";
  gap: 8px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "img"
      "info"
    ;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr auto;
    grid-template-areas: "info img";
  }

  @media ${QUERIES.tabletOnly} {
    border-bottom: none !important;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: img;
`;

const AuthorInfoWrapper = styled.div`
  grid-area: info;
`

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
