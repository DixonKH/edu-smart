import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FiSearch } from 'react-icons/fi'
import { MoreHorizontal } from 'lucide-react'

interface User { 
  id: string
  nickname: string
  avatar?: string
  fullName: string
  phone: string
  memberType: 'USER' | 'AGENT'
  state: 'ACTIVE' | 'BLOCKED' | 'DELETE'
}

const initialUsers: User[] = [
  {
    id: '6756a97e14219a6ae58bfb83',
    nickname: 'Martin',
    avatar: '/placeholder.svg?height=32&width=32',
    fullName: 'Martin Smith',
    phone: '+12345678',
    memberType: 'USER',
    state: 'ACTIVE'
  },
  {
    id: '673d898f14219a6ae58bf85d',
    nickname: 'Ulugbek',
    avatar: '/placeholder.svg?height=32&width=32',
    fullName: 'Ulugbek Umarov',
    phone: '+998947018798',
    memberType: 'AGENT',
    state: 'ACTIVE'
  },
  {
    id: '66d069dacbeae903015aff8f',
    nickname: 'ali',
    avatar: '/placeholder.svg?height=32&width=32',
    fullName: 'Alijon Alijonov',
    phone: '010000000000000',
    memberType: 'USER',
    state: 'DELETE'
  },
  {
    id: '66cec677cbeae903015aff2b',
    nickname: 'Adamsa',
    avatar: '/placeholder.svg?height=32&width=32',
    fullName: 'Adamsa Adamsaev',
    phone: '0984545432',
    memberType: 'USER',
    state: 'BLOCKED'
  },
  {
    id: '66cec662cbeae903015aff1e',
    nickname: 'Dilshod',
    avatar: '/placeholder.svg?height=32&width=32',
    fullName: 'Dilshod Dilshodov',
    phone: '01068734499',
    memberType: 'USER',
    state: 'ACTIVE'
  },
];

export default function UserManagement() {
    const [activeTab, setActiveTab] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [filterValue, setFilterValue] = useState('all')
    const [users, setUsers] = useState(initialUsers);
  
    const filteredUsers = users.filter(user => {
      const matchesSearch = user.nickname.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesFilter = filterValue === 'all' || user.memberType.toLowerCase() === filterValue
      const matchesTab = activeTab === 'All' || user.state === activeTab.toUpperCase()
      return matchesSearch && matchesFilter && matchesTab
    });

    const handleStateChange = (userId: string, newState: 'ACTIVE' | 'BLOCKED' | 'DELETE') => {
        setUsers(prevUsers =>
          prevUsers.map(user =>
            user.id === userId ? { ...user, state: newState } : user
          )
        )
      }
  
    return (
      <div className="container mx-auto py-6">
        {/* Tabs */}
        <div className="border-b mb-6">
          <nav className="flex gap-6">
            {['All', 'Active', 'Blocked', 'Delete'].map((tab) => (
              <Button
                key={tab}
                variant={tab === activeTab ? "primary" : "ghost"}
                className={tab === activeTab ? "text-white text-lg" : "text-muted-foreground text-lg"}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
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
          <Select value={filterValue} onValueChange={setFilterValue}>
            <SelectTrigger className="w-32 h-12 text-lg">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="text-lg">All</SelectItem>
              <SelectItem value="user" className="text-lg">Users</SelectItem>
              <SelectItem value="agent" className="text-lg">Agents</SelectItem>
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
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-100 cursor-pointer">
                  <TableCell className="font-mono text-lg">{user.id}</TableCell>
                  <TableCell>
                    <div className="flex text-lg items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.nickname} />
                        <AvatarFallback className="text-lg">{user.nickname[0]}</AvatarFallback>
                      </Avatar>
                      {user.nickname}
                    </div>
                  </TableCell>
                  <TableCell className="text-lg">{user.fullName}</TableCell>
                  <TableCell className="text-lg">{user.phone}</TableCell>
                  <TableCell>
                    <Badge variant={user.memberType === 'AGENT' ? 'secondary' : 'outline'} className="text-lg">
                      {user.memberType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                  <Badge 
                    variant={
                        user.state === 'ACTIVE' ? 'secondary' : 
                        user.state === 'BLOCKED' ? 'destructive' :
                        'deleted'
                      }
                        className={user.state === 'ACTIVE' ? 'bg-bgGreen text-white hover:bg-bgGreen text-lg' : 'text-lg'}
                  >
                    {user.state}
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
                      {user.state !== 'ACTIVE' && (
                        <DropdownMenuItem onClick={() => handleStateChange(user.id, 'ACTIVE')} className="text-lg">
                          Set to Active
                        </DropdownMenuItem>
                      )}
                      {user.state !== 'BLOCKED' && (
                        <DropdownMenuItem onClick={() => handleStateChange(user.id, 'BLOCKED')} className="text-lg">
                          Block User
                        </DropdownMenuItem>
                      )}
                      {user.state !== 'DELETE' && (
                        <DropdownMenuItem onClick={() => handleStateChange(user.id, 'DELETE')} className="text-lg">
                          Delete User
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }