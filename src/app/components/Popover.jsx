"use client";
import * as Popover from "@radix-ui/react-popover";

const PopoverComponent = () => (
  <Popover.Root>
    <Popover.Trigger className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
      More info
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="p-4 bg-white border border-gray-300 rounded shadow-lg max-w-xs">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2">Popover Title</h2>
          <p className="text-sm text-gray-700 mb-4">
            Check me out! I am a popover with more interesting content.
          </p>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            onClick={() => alert("You just had to click me!")}
          >
            Click me!
          </button>
        </div>
        <Popover.Arrow className="fill-current text-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverComponent;
