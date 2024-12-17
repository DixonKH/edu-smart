import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[50%] sm:w-full text-xs lg:text-xl sm:text-sm rounded-sm border border-gray-300 focus:outline-none focus:border-1 focus:border-green">
          <SelectValue placeholder="Choose Grade" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-xs lg:text-xl sm:text-sm">Choose Grade</SelectLabel>
            <SelectItem
              className="text-xs lg:text-xl sm:text-sm"
              value="beginner"
            >
              Beginner
            </SelectItem>
            <SelectItem
              className="text-xs lg:text-xl sm:text-sm"
              value="elementary"
            >
              Elementary
            </SelectItem>
            <SelectItem
              className="text-xs lg:text-xl sm:text-sm"
              value="intermediate"
            >
              Intermediate
            </SelectItem>
            <SelectItem
              className="text-xs lg:text-xl sm:text-sm"
              value="advanced"
            >
              Advanced
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
