import UserManagement from "./UserManagement";

interface UsersProps {
  setShowComponent: (title: number) => void;
  showComponent: number;
}

export default function Users(props: UsersProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-600 w-full border-b border-bgGreen pb-4">Member List</h1>
      <div>
        <UserManagement />
      </div>
    </div>
  );
}
