// TailwindApp.jsx - Using Tailwind
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';


export function TailwindApp() {
  return (
    <div>
      <Tabs.Root defaultValue="tab1" className="flex flex-col w-full max-w-[600px] mx-auto">
        <Tabs.List className="flex border-b border-gray-200 mb-5">
          <Tabs.Trigger 
            value="tab1"
            className="px-5 py-2.5 border-none cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            Tailwind Tab 1
          </Tabs.Trigger>
          <Tabs.Trigger 
            value="tab2"
            className="px-5 py-2.5 border-none cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            Tailwind Tab 2
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1" className="p-5">
          <h2>Tailwind Content 1</h2>
        </Tabs.Content>
        <Tabs.Content value="tab2" className="p-5">
          <h2>Tailwind Content 2</h2>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}