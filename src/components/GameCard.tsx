import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl" color="pink.200">
          {game.name}
        </Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCards;
