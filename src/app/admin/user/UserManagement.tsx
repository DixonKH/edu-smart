import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiSearch } from "react-icons/fi";
import { MoreHorizontal } from "lucide-react";
import { MemberInquery, MemberUpdate } from "@/shared/types/member";
import { Direction } from "@/shared/enums/common.enum";
import { serverApi } from "@/shared/lib/config";
import { MemberStatus, MemberType } from "@/shared/enums/member.enum";
import { useMemberStore } from "@/features/teachers/model/store";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function UserManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<MemberStatus | "all">("all");
  const allMembers = useMemberStore((state) => state.members);
  const getAllMembers = useMemberStore((state) => state.getAllMembersByAdmin);
  const updateMemberByAdmin = useMemberStore(
    (state) => state.updateMemberbyAdmin
  );
  const total = useMemberStore((state) =>
    state.metaCounter.length > 0 ? state.metaCounter[0].total : 0
  );
  const [users, setUsers] = useState(allMembers);
  const [active, setActive] = useState("all");
  const [allUsers, setAllUsers] = useState<MemberInquery>({
    page: 1,
    limit: 10,
    sort: "createdAt",
    direction: Direction.DESC,
    search: {
      text: "",
      memberStatus: undefined,
      memberType: undefined,
    },
  });

  useEffect(() => {
    const fetchUsers = async () => {
      await getAllMembers(allUsers);
    };
    fetchUsers();
  }, [allUsers, setAllUsers]);

  useEffect(() => {
    let updatedUsers = allMembers;
    if (statusFilter !== undefined) {
      updatedUsers = updatedUsers.filter(
        (u) => u.memberStatus === statusFilter
      );
    }
    if (statusFilter === "all") {
      updatedUsers = allMembers;
    }
    if (searchQuery) {
      updatedUsers = updatedUsers.filter((user) =>
        user.memberNick.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setUsers(updatedUsers);
  }, [allMembers, statusFilter, searchQuery]);

  const TypeChangeHandler = (value: any) => {
    setAllUsers((prev) => ({
      ...prev,
      page: 1,
      search: {
        ...prev.search,
        memberType: value === "ALL" ? undefined : value,
      },
    }));
  };

  const handleStateChange = async (userId: string, newState: MemberStatus) => {
    const updatedUser = users.find((u) => u._id === userId);

    if (updatedUser) {
      const updatedUserData: MemberUpdate = {
        ...updatedUser,
        memberStatus: newState,
      };  

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, memberStatus: newState } : user
        )
      );

      await updateMemberByAdmin(updatedUserData);
      await getAllMembers(allUsers);
    }
  };

  const handlePageChange = (newPage: number) => {
    setAllUsers((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const totalPages = Math.ceil(total / allUsers.limit);

  return (
    <div className="container mx-auto py-6">
      <div className="border-b mb-6">
        <nav className="flex gap-6">
          <button
            className={`p-2 px-5 rounded-md ${
              active === "all" ? "text-white bg-bgGreen" : "text-primary"
            }`}
            onClick={() => {
              setStatusFilter("all");
              setActive("all");
            }}
          >
            ALL
          </button>
          <button
            className={`p-2 px-5 rounded-md ${
              active === MemberStatus.ACTIVE
                ? "text-white bg-bgGreen"
                : "text-primary"
            }`}
            onClick={() => {
              setStatusFilter(MemberStatus.ACTIVE);
              setActive(MemberStatus.ACTIVE);
            }}
          >
            ACTIVE
          </button>
          <button
            className={`p-2 px-5 rounded-md ${
              active === MemberStatus.BLOCK
                ? "text-white bg-bgGreen"
                : "text-primary"
            }`}
            onClick={() => {
              setStatusFilter(MemberStatus.BLOCK);
              setActive(MemberStatus.BLOCK);
            }}
          >
            BLOCK
          </button>
          <button
            className={`p-2 px-5 rounded-md ${
              active === MemberStatus.DELETE
                ? "text-white bg-bgGreen"
                : "text-primary"
            }`}
            onClick={() => {
              setStatusFilter(MemberStatus.DELETE);
              setActive(MemberStatus.DELETE);
            }}
          >
            DELETE
          </button>
        </nav>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search user name"
            className="pl-10 h-12 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select
          defaultValue={allUsers?.search?.memberType}
          onValueChange={TypeChangeHandler}
        >
          <SelectTrigger className="w-32 h-12 text-lg">
            <SelectValue placeholder="All Users" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL" className="text-lg">
              All Users
            </SelectItem>
            <SelectItem value={MemberType.TEACHER} className="text-lg">
              Teachers
            </SelectItem>
            <SelectItem value={MemberType.STUDENT} className="text-lg">
              Students
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-x-scroll w-full">
        <Table>
          <TableHeader>
            <TableRow className="text-lg h-14">
              <TableHead>MB ID</TableHead>
              <TableHead>NICK NAME</TableHead>
              <TableHead>FULL NAME</TableHead>
              <TableHead>PHONE NUM</TableHead>
              <TableHead>MEMBER TYPE</TableHead>
              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((member) => {
              const imgPath = `${serverApi}/${member?.memberImage}`;
              return (
                <TableRow
                  key={member._id}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <TableCell className="font-mono text-lg">
                    {member._id}
                  </TableCell>
                  <TableCell>
                    <div className="flex text-lg items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={imgPath} alt={""} />
                        <AvatarFallback className="text-lg">
                          {member.memberNick[0]}
                        </AvatarFallback>
                      </Avatar>
                      {member.memberNick}
                    </div>
                  </TableCell>
                  <TableCell className="text-lg">
                    {member.memberFullName}
                  </TableCell>
                  <TableCell className="text-lg">
                    {member.memberPhone}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        member.memberType === MemberType.TEACHER
                          ? "primary"
                          : member.memberType === MemberType.ADMIN
                          ? "destructive"
                          : "ghost"
                      }
                      className="text-lg"
                    >
                      {member.memberType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        member?.memberStatus === MemberStatus.ACTIVE
                          ? "secondary"
                          : member?.memberStatus === MemberStatus.BLOCK
                          ? "destructive"
                          : "outline"
                      }
                      className={
                        member?.memberStatus === MemberStatus.ACTIVE
                          ? "bg-bgGreen text-white hover:bg-bgGreen text-lg"
                          : "text-lg"
                      }
                    >
                      {member?.memberStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 text-lg">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4 text-lg" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {member?.memberStatus !== MemberStatus.ACTIVE && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleStateChange(member._id, MemberStatus.ACTIVE)
                            }
                            className="text-lg"
                          >
                            Set to Active
                          </DropdownMenuItem>
                        )}
                        {member?.memberStatus !== MemberStatus.BLOCK && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleStateChange(member._id, MemberStatus.BLOCK)
                            }
                            className="text-lg"
                          >
                            Block User
                          </DropdownMenuItem>
                        )}
                        {member?.memberStatus !== MemberStatus.DELETE && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleStateChange(member._id, MemberStatus.DELETE)
                            }
                            className="text-lg"
                          >
                            Delete User
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      {totalPages > 1 && (
            <div className="my-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (allUsers.page > 1) {
                          handlePageChange(allUsers.page - 1);
                        }
                      }}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        className="hidden md:flex"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(i + 1);
                        }}
                        isActive={allUsers.page === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (allUsers.page < totalPages) {
                          handlePageChange(allUsers.page + 1);
                        }
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
    </div>
  );
}
