// import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { LuSettings2 } from "react-icons/lu";

export default function LessonFilter() {
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
            <MenubarItem>Beginner</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Elementary</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Intermediate</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Advanced</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
