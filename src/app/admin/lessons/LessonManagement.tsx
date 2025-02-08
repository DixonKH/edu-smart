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
import { useLessonStore } from "@/features/lessons/model/store";
import { Direction } from "@/shared/enums/common.enum";
import { LessonLevel, LessonStatus } from "@/shared/enums/lesson.enum";
import { AllLessonAdminInquiry, LessonUpdate } from "@/shared/types/lesson";
import { serverApi } from "@/shared/lib/config";

export default function LessonManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState("all");
  const allLessons = useLessonStore((state) => state.lessons);
  const getAllLessons = useLessonStore((state) => state.getLessonsByAdmin);
  const updateLesson = useLessonStore((state) => state.updateLessonByAdmin);
  const [lessonInquiry, setLessonInquiry] = useState<AllLessonAdminInquiry>({
    page: 1,
    limit: 10,
    sort: "createdAt",
    direction: Direction.DESC,
    search: {
      text: "",
      lessonStatus: undefined,
      lessonLevel: undefined,
    },
  });

  useEffect(() => {
    const fetchLessons = async () => {
      await getAllLessons(lessonInquiry);
    };
    fetchLessons();
  }, [lessonInquiry]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setLessonInquiry((prev) => ({ ...prev, search: { text: "" } }));
    }
  }, [searchQuery]);

  const lessonStatusHandler = async (value: any) => {
    const updateInquiry = {
      ...lessonInquiry,
      page: 1,
      search: {
        ...lessonInquiry?.search,
        lessonStatus: value === "ALL" ? undefined : value,
      },
    };
    await getAllLessons(updateInquiry);
  };

  const LessonLevelChangeHandler = (value: any) => {
    setLessonInquiry((prev) => ({
      ...prev,
      page: 1,
      search: {
        ...prev.search,
        lessonLevel: value === "ALL" ? undefined : value,
      },
    }));
  };

  const handleStateChange = async (lessonId: string, newState: LessonStatus) => {
    const updatedLesson = allLessons.find((l) => l._id === lessonId);
    
    if (updatedLesson) {
      const updatedLessonData: LessonUpdate = {
        ...updatedLesson,
        lessonStatus: newState,
      }
      
     await updateLesson(updatedLessonData);
    }
    await getAllLessons(lessonInquiry);
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
              lessonStatusHandler("ALL");
              setActive("all");
            }}
          >
            ALL
          </button>
          <button
            className={`p-2 px-5 rounded-md ${
              active === LessonStatus.ACTIVE
                ? "text-white bg-bgGreen"
                : "text-primary"
            }`}
            onClick={() => {
              lessonStatusHandler(LessonStatus.ACTIVE);
              setActive(LessonStatus.ACTIVE);
            }}
          >
            ACTIVE
          </button>
          <button
            className={`p-2 px-5 rounded-md ${
              active === LessonStatus.BLOCKED
                ? "text-white bg-bgGreen"
                : "text-primary"
            }`}
            onClick={() => {
              lessonStatusHandler(LessonStatus.BLOCKED);
              setActive(LessonStatus.BLOCKED);
            }}
          >
            BLOCK
          </button>
          <button
            className={`p-2 px-5 rounded-md ${
              active === LessonStatus.DELETE
                ? "text-white bg-bgGreen"
                : "text-primary"
            }`}
            onClick={() => {
              lessonStatusHandler(LessonStatus.DELETE);
              setActive(LessonStatus.DELETE);
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
            className="pl-10 h-12 text-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setLessonInquiry((prev) => ({
                  ...prev,
                  search: { text: searchQuery },
                }));
              }
            }}
          />
        </div>
        <Select
          defaultValue={lessonInquiry?.search?.lessonLevel}
          onValueChange={LessonLevelChangeHandler}
        >
          <SelectTrigger className="w-32 h-12 text-lg">
            <SelectValue placeholder="All Levels" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL" className="text-lg">
              All
            </SelectItem>
            <SelectItem value={LessonLevel.BEGINNER} className="text-lg">
              Beginner
            </SelectItem>
            <SelectItem value={LessonLevel.ELEMENTRY} className="text-lg">
              Elementary
            </SelectItem>
            <SelectItem value={LessonLevel.INTERMEDIATE} className="text-lg">
              Intermediate
            </SelectItem>
            <SelectItem value={LessonLevel.ADVANCED} className="text-lg">
              Advanced
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="text-lg h-14">
              <TableHead>LESSON TITLE</TableHead>
              <TableHead>OWNER</TableHead>
              <TableHead>LESSON ID</TableHead>
              <TableHead>LEVEL</TableHead>
              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allLessons.map((lesson) => {
                  const imgPath = `${serverApi}/${lesson?.memberData?.memberImage}`;
              return (
                <TableRow
                  key={lesson._id}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <TableCell className="text-lg w-[560px]">
                    {lesson.lessonTitle}
                  </TableCell>
                  <TableCell>
                    <div className="flex text-lg items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={imgPath}
                          alt={lesson?.memberData?.memberNick}
                        />
                        <AvatarFallback className="text-lg">
                          {lesson?.memberData?.memberNick}
                        </AvatarFallback>
                      </Avatar>
                      {lesson?.memberData?.memberNick}
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-lg">
                    {lesson._id}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        lesson.lessonLevel === "BEGINNER"
                          ? "primary"
                          : lesson.lessonLevel === "ELEMENTRY" ? "ghost" 
                          : lesson.lessonLevel === "INTERMEDIATE" ? "default" 
                          : lesson.lessonLevel === "ADVANCED" ? "outline" : "outline"
                          
                      }
                      className="text-lg"
                    >
                      {lesson.lessonLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        lesson.lessonStatus === "ACTIVE"
                          ? "secondary"
                          : lesson.lessonStatus === "BLOCKED"
                          ? "destructive"
                          : "outline"
                      }
                      className={
                        lesson.lessonStatus === "ACTIVE"
                          ? "bg-bgGreen text-white hover:bg-bgGreen text-lg"
                          : "text-lg"
                      }
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
                        {lesson?.lessonStatus !== LessonStatus.ACTIVE && (
                          <DropdownMenuItem
                            onClick={() =>
                              lesson._id && handleStateChange(lesson._id, LessonStatus.ACTIVE)
                            }
                            className="text-lg"
                          >
                            Set to Active
                          </DropdownMenuItem>
                        )}
                        {lesson.lessonStatus !== LessonStatus.BLOCKED && (
                          <DropdownMenuItem
                            onClick={() =>
                             lesson._id &&  handleStateChange(lesson._id, LessonStatus.BLOCKED)
                            }
                            className="text-lg"
                          >
                            Block User
                          </DropdownMenuItem>
                        )}
                        {lesson.lessonStatus !== LessonStatus.DELETE && (
                          <DropdownMenuItem
                            onClick={() =>
                             lesson._id && handleStateChange(lesson._id, LessonStatus.DELETE)
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
    </div>
  );
}
