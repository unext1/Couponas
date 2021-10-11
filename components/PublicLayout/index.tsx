import Navbar from "./navbar";
export const PublicLayout = ({ children, user }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar user={user} />
      <main className="flex-1 bg-gray-100">
        <h1>ok</h1>
      </main>
    </div>
  );
};
