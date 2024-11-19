// App.jsx
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function App() {
  return (
    <div className="p-4">
      <Tabs.Root 
        defaultValue="tab1" 
        className="flex flex-col w-full max-w-[600px] mx-auto"
      >
        <Tabs.List className="flex border-b border-gray-200 mb-5">
          <Tabs.Trigger 
            value="tab1"
            className="px-5 py-2.5 border-none bg-none cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            Dashboard
          </Tabs.Trigger>
          <Tabs.Trigger 
            value="tab2"
            className="px-5 py-2.5 border-none bg-none cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            Reports
          </Tabs.Trigger>
          <Tabs.Trigger 
            value="tab3"
            className="px-5 py-2.5 border-none bg-none cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
          >
            Settings
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="tab1" className="p-5">
          <h2 className="text-xl font-bold mb-4">Dashboard Content</h2>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Open Dialog
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-[90%] max-w-[450px] max-h-[85vh] shadow-xl">
                <h2 className="text-xl font-bold mb-4">Dialog Title</h2>
                <p className="mb-4">Dialog content goes here.</p>
                <button 
                  className="absolute top-2.5 right-2.5 border-none bg-none cursor-pointer hover:opacity-70"
                  aria-label="Close"
                >
                  <Cross2Icon />
                </button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </Tabs.Content>

        <Tabs.Content value="tab2" className="p-5">
          <h2 className="text-xl font-bold">Reports Content</h2>
        </Tabs.Content>

        <Tabs.Content value="tab3" className="p-5">
          <h2 className="text-xl font-bold">Settings Content</h2>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}