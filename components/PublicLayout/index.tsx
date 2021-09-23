import Navbar from "./navbar";
export const PublicLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-100">{children}</main>
    </div>
  );
};
