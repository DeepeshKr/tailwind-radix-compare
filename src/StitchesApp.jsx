// StitchesApp.jsx - Using Stitches
import React from 'react';
import { styled } from '@stitches/react';
import * as Tabs from '@radix-ui/react-tabs';

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


export function StitchesApp() {
  return (
    <div>
      <StyledTabs defaultValue="tab1">
        <StyledList>
          <StyledTrigger value="tab1">Stitches Tab 1</StyledTrigger>
          <StyledTrigger value="tab2">Stitches Tab 2</StyledTrigger>
        </StyledList>
        <StyledContent value="tab1">
          <h2>Stitches Content 1</h2>
        </StyledContent>
        <StyledContent value="tab2">
          <h2>Stitches Content 2</h2>
        </StyledContent>
      </StyledTabs>
    </div>
  );
}
