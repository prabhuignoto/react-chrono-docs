# Button Texts

The `buttonTexts` prop is a useful feature that allows you to modify the text of various buttons in the [control panel](./../features/control-panel.md). These buttons include the play/pause button, the forward button, and the backward button. By customizing the text, you can tailor the user interface to match the requirements of your project.

To use the `buttonTexts` prop, simply pass an object with custom button text to the component. The object should consist of key-value pairs that map to specific buttons. For instance, if you want to change the text of the play button, you can use the `play` key and assign it a new label.

## Usage

Here's an example that shows how to customize the text for the `first`, `last`, `next`, and `previous` buttons:

```jsx
import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      items={data}
      mode="HORIZONTAL"
      buttonTexts={{
        first: "Jump to First",
        last: "Jump to Last",
        next: "Next",
        previous: "Previous",
      }}
    ></Chrono>
  );
};

export default Timeline;
```

## All Available Keys

| Key      | Description                                | Default Value          |
| :------- | :----------------------------------------- | :--------------------- |
| dark     | Switches to Dark Mode                      | "Switch to Dark Mode"  |
| first    | Goes to the first item in the timeline     | "Go to First"          |
| last     | Goes to the last item in the timeline      | "Go to Last"           |
| light    | Switches to Light Mode                     | "Switch to Light Mode" |
| next     | Goes to the next item in the timeline      | "Next"                 |
| play     | Starts a slideshow with the timeline items | "Play Slideshow"       |
| previous | Goes to the previous item in the timeline  | "Previous"             |
| stop     | Stops a running slideshow                  | "Stop Slideshow"       |

By utilizing the buttonTexts prop, you can enhance the usability and accessibility of your timeline component.
