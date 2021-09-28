import Navbar from "./navbar";
export const PublicLayout = ({ children, user }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar user={user} />
      <main className="flex-1 bg-gray-100">{children}</main>
    </div>
  );
};
