import { FC } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Separator from "../Separator/Separator";
import SectionHeading from "../Typography/SectionHeading";

interface ICard {
  src: string;
  title: string;
  body: string;
}

const cards: ICard[] = [
  {
    src: "/images/birthday-cake.svg",
    title: "Birthday Party",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, at? Aspernatur aliquam deserunt eum odio veniam. Ipsa quo, quisquam cupiditate dolores ab doloremque expedita dolore obcaecati incidunt. Voluptas, inventore dolorum.",
  },
  {
    src: "/images/glass-cheers.svg",
    title: "Wedding Party",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, at? Aspernatur aliquam deserunt eum odio veniam. Ipsa quo, quisquam cupiditate dolores ab doloremque expedita dolore obcaecati incidunt. Voluptas, inventore dolorum.",
  },
  {
    src: "/images/pizza-slice.svg",
    title: "Business Meetings",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, at? Aspernatur aliquam deserunt eum odio veniam. Ipsa quo, quisquam cupiditate dolores ab doloremque expedita dolore obcaecati incidunt. Voluptas, inventore dolorum.",
  },
];

const Services = () => {
  return (
    <div id="service" className="py-5 bg-light">
      <Container className="pt-5 pb-4 px-lg-5 px-xl-0">
        <SectionHeading>Special Services</SectionHeading>
        <Separator />
        <Row className="mt-5">
          {cards.map((card) => {
            return (
              <Col lg="4" className="mt-5" key={card.title}>
                <ServiceCard cardDetail={card} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

interface IServiceCard {
  cardDetail: ICard;
}
const ServiceCard: FC<IServiceCard> = ({ cardDetail }) => {
  return (
    <Card className="border-0 bg-light text-center">
      <Card.Img
        variant="top"
        src={cardDetail.src}
        className="d-inline-block mx-auto"
        style={{ width: "2rem" }}
      />
      <Card.Body>
        <Card.Title className="mb-3">{cardDetail.title}</Card.Title>
        <Card.Text>{cardDetail.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Services;
