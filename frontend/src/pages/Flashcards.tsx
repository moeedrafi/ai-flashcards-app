import { useParams } from "react-router";

const Flashcards = () => {
  const { flashcardId } = useParams();
  console.log(flashcardId);

  return <div>Flashcards</div>;
};

export default Flashcards;
