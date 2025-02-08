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
import { useArticleStore } from "@/features/community/model/store";
import {
  AllBoardArticleAdminInquiry,
  BoardArticleUpdate,
} from "@/shared/types/article";
import { Direction } from "@/shared/enums/common.enum";
import { serverApi } from "@/shared/lib/config";
import {
  BoardArticleCategory,
  BoardArticleStatus,
} from "@/shared/enums/article.enum";

export default function ArticleManagement() {
  const [active, setActive] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const allArticles = useArticleStore((state) => state.articles);
  const updateArticleByAdmin = useArticleStore(
    (state) => state.updateArticleByAdmin
  );
  const getArticlesByAdmin = useArticleStore(
    (state) => state.getArticlesByAdmin
  );
  const [articleQuery, setArticleQuery] = useState<AllBoardArticleAdminInquiry>(
    {
      page: 1,
      limit: 10,
      sort: "createdAt",
      direction: Direction.DESC,
      search: {
        text: "",
        articleStatus: undefined,
        articleCategory: undefined,
      },
    }
  );

  useEffect(() => {
    const fetchArticles = async () => {
      await getArticlesByAdmin(articleQuery);
    };
    fetchArticles();
  }, [articleQuery]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setArticleQuery((prev) => ({ ...prev, search: { text: "" } }));
    }
  }, [searchQuery]);

  const articleStatusHandler = async (value: any) => {
    const updateInquiry = {
      ...articleQuery,
      page: 1,
      search: {
        ...articleQuery?.search,
        articleStatus: value === "ALL" ? undefined : value,
      },
    };
    await getArticlesByAdmin(updateInquiry);
  };

  const articleCategoryHandler = (value: any) => {
    setArticleQuery((prev) => ({
      ...prev,
      page: 1,
      search: {
        ...prev.search,
        articleCategory: value === "ALL" ? undefined : value,
      },
    }));
  };

  const handleStateChange = async (
    articleId: string,
    newState: BoardArticleStatus
  ) => {
    const updatedArticle = allArticles.find((a) => a._id === articleId);
    if (updatedArticle) {
      const updatedArticleData: BoardArticleUpdate = {
        ...updatedArticle,
        articleStatus: newState,
      };
      console.log("Updated article data:", updatedArticleData);
       await updateArticleByAdmin(updatedArticleData);
    }
    await getArticlesByAdmin(articleQuery);
  };

  return (
    <div className="container mx-auto py-6">
      {/* Tabs */}
      <div className="border-b mb-6">
        <nav className="flex gap-6">
          <button
            className={`p-2 px-5 rounded-md ${
              active === "all" ? "text-white bg-bgGreen" : "text-primary"
            }`}
            onClick={() => {
              articleStatusHandler("ALL");
              setActive("all");
            }}
          >
            ALL
          </button>
          <button
            className={`p-2 px-5 rounded-md ${
              active === BoardArticleStatus.ACTIVE
                ? "text-white bg-bgGreen"
                : "text-primary"
            }`}
            onClick={() => {
              articleStatusHandler(BoardArticleStatus.ACTIVE);
              setActive(BoardArticleStatus.ACTIVE);
            }}
          >
            ACTIVE
          </button>
          <button
            className={`p-2 px-5 rounded-md ${
              active === BoardArticleStatus.BLOCKED
                ? "text-white bg-bgGreen"
                : "text-primary"
            }`}
            onClick={() => {
              articleStatusHandler(BoardArticleStatus.BLOCKED);
              setActive(BoardArticleStatus.BLOCKED);
            }}
          >
            BLOCK
          </button>
          <button
            className={`p-2 px-5 rounded-md ${
              active === BoardArticleStatus.DELETE
                ? "text-white bg-bgGreen"
                : "text-primary"
            }`}
            onClick={() => {
              articleStatusHandler(BoardArticleStatus.DELETE);
              setActive(BoardArticleStatus.DELETE);
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
            className="pl-10 h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setArticleQuery((prev) => ({
                  ...prev,
                  search: { text: searchQuery },
                }))
              }
            }}
          />
        </div>
        <Select defaultValue={articleQuery?.search?.articleCategory} onValueChange={articleCategoryHandler}>
          <SelectTrigger className="w-42 h-12 text-lg">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL" className="text-lg">
              All
            </SelectItem>
            <SelectItem value={BoardArticleCategory.FREE} className="text-lg">
              Free
            </SelectItem>
            <SelectItem value={BoardArticleCategory.RECOMMEND} className="text-lg">
              Recommended
            </SelectItem>
            <SelectItem value={BoardArticleCategory.NEWS} className="text-lg">
              News
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="text-lg h-14">
              <TableHead>TITLE</TableHead>
              <TableHead>AUTHOR</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>CATEGORY</TableHead>
              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allArticles.map((article) => {
              const imgPath = `${serverApi}/${article?.memberData?.memberImage}`;
              return (
                <TableRow
                  key={article._id}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <TableCell className="font-mono text-lg">
                    {article.articleTitle}
                  </TableCell>
                  <TableCell>
                    <div className="flex text-lg items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={imgPath} alt="" />
                        <AvatarFallback className="text-lg">
                          {article?.memberData?.memberNick}
                        </AvatarFallback>
                      </Avatar>
                      {article?.memberData?.memberNick}
                    </div>
                  </TableCell>
                  <TableCell className="text-lg">{article._id}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        article.articleCategory === BoardArticleCategory.FREE
                          ? "primary"
                          : BoardArticleCategory.RECOMMEND
                          ? "destructive"
                          : BoardArticleCategory.NEWS
                          ? "ghost"
                          : "outline"
                      }
                      className="text-lg"
                    >
                      {article.articleCategory}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        article.articleStatus === BoardArticleStatus.ACTIVE
                          ? "primary"
                          : article.articleStatus === BoardArticleStatus.BLOCKED
                          ? "destructive"
                          : article.articleStatus === BoardArticleStatus.DELETE
                          ? "ghost"
                          : "outline"
                      }
                      className={
                        article.articleStatus === BoardArticleStatus.ACTIVE
                          ? "bg-bgGreen text-white hover:bg-bgGreen text-lg"
                          : "text-lg"
                      }
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
                        {article.articleStatus !==
                          BoardArticleStatus.ACTIVE && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleStateChange(
                                article._id,
                                BoardArticleStatus.ACTIVE
                              )
                            }
                            className="text-lg"
                          >
                            Set to Active
                          </DropdownMenuItem>
                        )}
                        {article.articleStatus !==
                          BoardArticleStatus.BLOCKED && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleStateChange(
                                article._id,
                                BoardArticleStatus.BLOCKED
                              )
                            }
                            className="text-lg"
                          >
                            Block Article
                          </DropdownMenuItem>
                        )}
                        {article.articleStatus !==
                          BoardArticleStatus.DELETE && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleStateChange(
                                article._id,
                                BoardArticleStatus.DELETE
                              )
                            }
                            className="text-lg"
                          >
                            Delete Article
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
    </div>
  );
}
