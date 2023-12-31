import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";


function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Bdugets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",
        gap:"1rem",
        alignItems: "flex-start"
      }}>
        <BudgetCard name="A name" amount={15} max={200} gray />
        <BudgetCard name="Another name" amount={201} max={200} />
      </div>
    </Container>
  );
}

export default App;
