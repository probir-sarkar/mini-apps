import { createFileRoute } from "@tanstack/react-router";
import useTicTacToe, { socket } from "../../hooks/useTicTacToe";
export const Route = createFileRoute("/multiplayer/")({
  component: RouteComponent
});

function RouteComponent() {
  const { createRoom } = useTicTacToe();

  return (
    <div className=" min-w-screen flex justify-center items-center">
      <div className="shadow border rounded p-6 my-6 ">
        <p>Multiplayer Tic Tac Toe {socket.connected ? "Connected" : "Disconnected"}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={createRoom}>Create Room</button>
        {/* join room room id */}
        <input type="text" placeholder="Room ID" className="border rounded p-2 my-2" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join Room</button>
      </div>
    </div>
  );
}
