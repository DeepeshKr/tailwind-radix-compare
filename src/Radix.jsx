// App.jsx
import React from 'react';
import { styled } from '@stitches/react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const StyledTabs = styled(Tabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto'
});

const StyledList = styled(Tabs.List, {
  display: 'flex',
  borderBottom: '1px solid #ccc',
  marginBottom: '20px'
});

const StyledTrigger = styled(Tabs.Trigger, {
  padding: '10px 20px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  '&[data-state="active"]': {
    borderBottom: '2px solid blue'
  }
});

const StyledContent = styled(Tabs.Content, {
  padding: '20px'
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: '6px',
  padding: '20px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '450px',
  maxHeight: '85vh'
});

const CloseButton = styled('button', {
  position: 'absolute',
  top: '10px',
  right: '10px',
  border: 'none',
  background: 'none',
  cursor: 'pointer'
});

export default function App() {
  return (
    <div>
      <StyledTabs defaultValue="tab1">
        <StyledList>
          <StyledTrigger value="tab1">Dashboard</StyledTrigger>
          <StyledTrigger value="tab2">Reports</StyledTrigger>
          <StyledTrigger value="tab3">Settings</StyledTrigger>
        </StyledList>

        <StyledContent value="tab1">
          <h2>Dashboard Content</h2>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Open Dialog</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <DialogOverlay />
              <DialogContent>
                <h2>Dialog Title</h2>
                <p>Dialog content goes here.</p>
                <CloseButton aria-label="Close">
                  <Cross2Icon />
                </CloseButton>
              </DialogContent>
            </Dialog.Portal>
          </Dialog.Root>
        </StyledContent>

        <StyledContent value="tab2">
          <h2>Reports Content</h2>
        </StyledContent>

        <StyledContent value="tab3">
          <h2>Settings Content</h2>
        </StyledContent>
      </StyledTabs>
    </div>
  );
}