import { Component } from "react";
import Modal from "react-modal";
import {
  CardContainer,
  InitialLetter,
  DetailsCard,
  NormalHeading,
  NormalDescription,
} from "./styledComponent";

const MoviesCard = (props) => {
  const { details, openModal } = props;
  const { description, genres, title, uuid } = details;

  const cardClick = () => {
    openModal(uuid);
  };

  return (
    <CardContainer onClick={cardClick}>
      <InitialLetter>{title[0]}</InitialLetter>
      <DetailsCard>
        <NormalHeading>
          Name: <NormalDescription>{title}...</NormalDescription>
        </NormalHeading>
        <NormalHeading>
          description:{" "}
          <NormalDescription>{description.slice(0, 250)}...</NormalDescription>
        </NormalHeading>
        <NormalHeading>
          Genre: <NormalDescription>{genres}...</NormalDescription>
        </NormalHeading>
      </DetailsCard>
    </CardContainer>
  );
};

export default MoviesCard;
