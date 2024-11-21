import React from 'react';
import GridLayout from 'react-grid-layout';

function MyGridLayout() {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    { i: 'e', x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="a">Item A</div>
      <div key="b">Item B</div>
      <div key="c">Item C</div>
      <div key="e">Item C</div>
      
    </GridLayout>
  );
}

export default MyGridLayout;
