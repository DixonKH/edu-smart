// import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { LessonLevel } from "@/shared/enums/lesson.enum";
import { LuSettings2 } from "react-icons/lu";


interface LessonFilterProps {
  lessons: any;
  levelChangeHandler: (value: LessonLevel) => void;
}

export default function LessonFilter(props: LessonFilterProps) {
  return (
    <>
      <Menubar className="lg:hidden h-11">
        <MenubarMenu>
          <MenubarTrigger>
          <LuSettings2
            className={`size-6 text-green1 cursor-pointer`}
          />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => props.levelChangeHandler(LessonLevel.BEGINNER)} >Beginner</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => props.levelChangeHandler(LessonLevel.ELEMENTRY)} >Elementary</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => props.levelChangeHandler(LessonLevel.INTERMEDIATE)}>Intermediate</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => props.levelChangeHandler(LessonLevel.ADVANCED)}>Advanced</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
