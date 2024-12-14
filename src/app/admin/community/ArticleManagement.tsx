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

interface Article {
    id: string;
    title: string;
    articleType: "FREE" | "RECOMMENDED" | "NEWS";
    author: string;
    articleStatus: "ACTIVE" | "DELETED" | "BLOCKED";
    createdAt: string;
    updatedAt: string;
}

const initialArticles: Article[] = [
    {
        id: '1',
        title: 'Article 1',
        articleType: 'FREE',
        author: 'Alijon',
        articleStatus: 'ACTIVE',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },
    {
        id: '2',
        title: 'Article 2',
        articleType: 'RECOMMENDED',
        author: 'John Doe',
        articleStatus: 'ACTIVE',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },
    {
        id: '3',
        title: 'Article 3',
        articleType: 'NEWS',
        author: 'Jane Doe',
        articleStatus: 'ACTIVE',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },
    {
        id: '4',
        title: 'Article 4',
        articleType: 'NEWS',
        author: 'Joseph',
        articleStatus: 'ACTIVE',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },
    {
        id: '5',
        title: 'Article 5',
        articleType: 'RECOMMENDED',
        author: 'Max',
        articleStatus: 'ACTIVE',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },

]

export default function ArticleManagement() {
    const [activeTab, setActiveTab] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [filterValue, setFilterValue] = useState('all')
    const [articles, setArticles] = useState(initialArticles);

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesFilter = filterValue === 'all' || article.articleType.toLowerCase() === filterValue
        const matchesTab = activeTab === 'All' || article.articleStatus === activeTab.toUpperCase()
        return matchesSearch && matchesFilter && matchesTab
      });

      const handleStateChange = (articleId: string, newState: 'ACTIVE' | 'BLOCKED' | 'DELETED') => {
        setArticles(prevArticles =>
          prevArticles.map(article =>
            article.id === articleId ? { ...article, articleStatus: newState } : article
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
              <SelectItem value="free" className="text-lg">Free</SelectItem>
              <SelectItem value="recommended" className="text-lg">Recommended</SelectItem>
              <SelectItem value="news" className="text-lg">News</SelectItem>
            </SelectContent>
          </Select>
        </div>
  
        {/* Table */}
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="text-lg h-14">
                <TableHead>ARTICLE ID</TableHead>
                <TableHead>AUTHOR</TableHead>
                <TableHead>TITLE</TableHead>
                <TableHead>TYPE</TableHead>
                <TableHead>STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredArticles.map((article) => (
                <TableRow key={article.id} className="hover:bg-gray-100 cursor-pointer">
                  <TableCell className="font-mono text-lg">{article.id}</TableCell>
                  <TableCell>
                    <div className="flex text-lg items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={article.author} alt={article.author} />
                        <AvatarFallback className="text-lg">{article.author[0]}</AvatarFallback>
                      </Avatar>
                      {article.author}
                    </div>
                  </TableCell>
                  <TableCell className="text-lg">{article.title}</TableCell>
                  <TableCell>
                    <Badge variant={article.articleType === 'FREE' ? 'secondary' : 'outline'} className="text-lg">
                      {article.articleType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                  <Badge 
                    variant={
                        article.articleStatus === 'ACTIVE' ? 'secondary' : 
                        article.articleStatus === 'BLOCKED' ? 'destructive' :
                        'deleted'
                      }
                        className={article.articleStatus === 'ACTIVE' ? 'bg-bgGreen text-white hover:bg-bgGreen text-lg' : 'text-lg'}
                  >
                    {article.articleStatus}
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
                      {article.articleStatus !== 'ACTIVE' && (
                        <DropdownMenuItem onClick={() => handleStateChange(article.id, 'ACTIVE')} className="text-lg">
                          Set to Active
                        </DropdownMenuItem>
                      )}
                      {article.articleStatus !== 'BLOCKED' && (
                        <DropdownMenuItem onClick={() => handleStateChange(article.id, 'BLOCKED')} className="text-lg">
                          Block Article
                        </DropdownMenuItem>
                      )}
                      {article.articleStatus !== 'DELETED' && (
                        <DropdownMenuItem onClick={() => handleStateChange(article.id, 'DELETED')} className="text-lg">
                          Delete Article
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