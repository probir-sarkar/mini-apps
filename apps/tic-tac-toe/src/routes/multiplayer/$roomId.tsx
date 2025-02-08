import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/multiplayer/$roomId")({
  component: RouteComponent
});

function RouteComponent() {
  const { roomId } = Route.useParams();
  async function fetchData() {
    const response = await fetch(`http://localhost:8080/tic-tac-toe/game/${roomId}`);
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, [roomId]);
  return <div>Hello "/multiplayer/ {roomId}"</div>;
}
