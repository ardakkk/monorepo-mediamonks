import { Card, MainTemplate } from '@mediamonks/brand-b';

const cardItems = 10;

const IndexPage = () => (
  <MainTemplate>
    <div className="container">
      <div className="d-flex flex-wrap">
        {Array.from(Array(cardItems)).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  </MainTemplate>
);

export default IndexPage;
