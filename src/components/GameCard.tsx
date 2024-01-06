import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImmageUrl from "../services/image-urls";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImmageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" color="pink.200">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
