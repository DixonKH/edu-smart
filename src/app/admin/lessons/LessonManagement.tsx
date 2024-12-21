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

interface Lesson {
    id: string;
    title: string;
    lessonType: "BEGINNER" | "ELEMENTARY" | "INTERMEDIATE" | "ADVANCED";
    lessonOwner: string;
    lessonStatus: "ACTIVE" | "DELETED" | "BLOCKED";
    lessonCreatedAt: string;
    lessonUpdatedAt: string;

}

const initialLessons: Lesson[] = [
    {
      id: '6756a97e14219a6ae58bfb83',
      title: 'Lesson 1',
      lessonType: 'BEGINNER',
      lessonOwner: 'Martin',
      lessonStatus: 'ACTIVE',
      lessonCreatedAt: '2024-01-01',
      lessonUpdatedAt: '2024-01-01',
    },
    {
      id: '673d898f14219a6ae58bf85d',
      title: 'Lesson 2',
      lessonType: 'ELEMENTARY',
      lessonOwner: 'Ulugbek',
      lessonStatus: 'ACTIVE',
      lessonCreatedAt: '2024-01-01',
      lessonUpdatedAt: '2024-01-01',
    },          
    {
      id: '66d069dacbeae903015aff8f',
      title: 'Lesson 3',
      lessonType: 'INTERMEDIATE',
      lessonOwner: 'Alijon',
      lessonStatus: 'DELETED',
      lessonCreatedAt: '2024-01-01',
      lessonUpdatedAt: '2024-01-01',
    },
    {
      id: '66cec677cbeae903015aff2b',
      title: 'Lesson 4',
      lessonType: 'ADVANCED',
      lessonOwner: 'Adamsa',
      lessonStatus: 'BLOCKED',
      lessonCreatedAt: '2024-01-01',
      lessonUpdatedAt: '2024-01-01',
    },
    {
      id: '66cec662cbeae903015aff1e',
      title: 'Lesson 5',
      lessonType: 'BEGINNER',
      lessonOwner: 'Dilshod',
      lessonStatus: 'ACTIVE',
      lessonCreatedAt: '2024-01-01',
      lessonUpdatedAt: '2024-01-01',
    },
  ];

export default function LessonManagement() {
    const [activeTab, setActiveTab] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [filterValue, setFilterValue] = useState('all')
    const [lessons, setLessons] = useState(initialLessons);

    const filteredLessons = lessons.filter(lesson => {
        const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesFilter = filterValue === 'all' || lesson.lessonType.toLowerCase() === filterValue
        const matchesTab = activeTab === 'All' || lesson.lessonStatus === activeTab.toUpperCase()
        return matchesSearch && matchesFilter && matchesTab
      });

      const handleStateChange = (lessonId: string, newState: 'ACTIVE' | 'BLOCKED' | 'DELETED') => {
        setLessons(prevLessons =>
          prevLessons.map(lesson =>
            lesson.id === lessonId ? { ...lesson, lessonStatus: newState } : lesson
          )
        )
      }

  return (
    <div className="container mx-auto py-6">
        {/* Tabs */}
        <div className="border-b mb-6">
          <nav className="flex gap-6">
            {['All', 'Active', 'Blocked', 'Deleted'].map((tab) => (
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
              <SelectItem value="beginner" className="text-lg">Beginner</SelectItem>
              <SelectItem value="elementary" className="text-lg">Elementary</SelectItem>
              <SelectItem value="intermediate" className="text-lg">Intermediate</SelectItem>
              <SelectItem value="advanced" className="text-lg">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
  
        {/* Table */}
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="text-lg h-14">
                <TableHead>LESSON ID</TableHead>
                <TableHead>OWNER</TableHead>
                <TableHead>TITLE</TableHead>
                <TableHead>TYPE</TableHead>
                <TableHead>STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLessons.map((lesson) => (
                <TableRow key={lesson.id} className="hover:bg-gray-100 cursor-pointer">
                  <TableCell className="font-mono text-lg">{lesson.id}</TableCell>
                  <TableCell>
                    <div className="flex text-lg items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={lesson.lessonOwner} alt={lesson.lessonOwner} />
                        <AvatarFallback className="text-lg">{lesson.lessonOwner[0]}</AvatarFallback>
                      </Avatar>
                      {lesson.lessonOwner}
                    </div>
                  </TableCell>
                  <TableCell className="text-lg">{lesson.title}</TableCell>
                  <TableCell>
                    <Badge variant={lesson.lessonType === 'BEGINNER' ? 'secondary' : 'outline'} className="text-lg">
                      {lesson.lessonType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                  <Badge 
                    variant={
                        lesson.lessonStatus === 'ACTIVE' ? 'secondary' : 
                        lesson.lessonStatus === 'BLOCKED' ? 'destructive' :
                        'deleted'
                      }
                        className={lesson.lessonStatus === 'ACTIVE' ? 'bg-bgGreen text-white hover:bg-bgGreen text-lg' : 'text-lg'}
                  >
                    {lesson.lessonStatus}
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
                      {lesson.lessonStatus !== 'ACTIVE' && (
                        <DropdownMenuItem onClick={() => handleStateChange(lesson.id, 'ACTIVE')} className="text-lg">
                          Set to Active
                        </DropdownMenuItem>
                      )}
                      {lesson.lessonStatus !== 'BLOCKED' && (
                        <DropdownMenuItem onClick={() => handleStateChange(lesson.id, 'BLOCKED')} className="text-lg">
                          Block User
                        </DropdownMenuItem>
                      )}
                      {lesson.lessonStatus !== 'DELETED' && (
                        <DropdownMenuItem onClick={() => handleStateChange(lesson.id, 'DELETED')} className="text-lg">
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
