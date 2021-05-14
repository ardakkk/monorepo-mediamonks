import { MainTemplate, Card } from "@mediamonks/brand-a";

const cardItems = 10;

export default function App() {
  return (
    <MainTemplate>
      <div className="container">
       <div className="d-flex flex-wrap">
         {Array.from(Array(cardItems)).map((_, index) => (
           <Card key={index}/>
         ))}
       </div>
      </div>
    </MainTemplate>
  );
}
