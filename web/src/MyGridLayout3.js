import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Card from './Card'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This example illustrates how to let grid items lay themselves out with a bootstrap-style specification.
 */
export default class BootstrapStyleLayout extends React.PureComponent {
  static defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 2,
    rowHeight: 35,
    onLayoutChange: function() {},
    cols: {lg: 12, md: 12, sm: 12, xs: 12, xxs: 12}
  };

  state = {
    layouts: this.generateLayouts()
  };

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  generateDOM() {
    return [...Array(this.props.items)].map((_, i) => (
      <div key={i}>
        <span className="text"><Card/></span>
      </div>
    ));
  }

  // Create responsive layouts. Similar to bootstrap, increase the pseudo width as
  // the viewport shrinks
  generateLayouts() {
    const times = [...Array(this.props.items)];
    const widths = {lg: 3, md: 4, sm: 6, xs: 12, xxs: 12};
    return Object.keys(widths).reduce((memo, breakpoint) => {
      const width = widths[breakpoint];
      const cols = this.props.cols[breakpoint];
      memo[breakpoint] = [
        // You can set y to 0, the collision algo will figure it out.
        ...times.map((_, i) => ({
          x: (i * width) % cols, 
          y: 0, 
          w: width, 
          h: 8, 
          i: String(i),
          minH: 8
        }))
      ];
      return memo;
    }, {});
  }

  render() {
    return (
      <ResponsiveReactGridLayout
        onLayoutChange={this.onLayoutChange}
        {...this.props}
        layouts={this.state.layouts}
      >
        {this.generateDOM()}
      </ResponsiveReactGridLayout>
    );
  }
}

if (process.env.STATIC_EXAMPLES === true) {
  import("../test-hook.jsx").then(fn => fn.default(BootstrapStyleLayout));
}