import { InfoBox } from ".";

export default {
  title: "Components/InfoBox",
  component: InfoBox,
  argTypes: {
    property1: {
      options: ["up", "no-movement", "down"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "up",
    className: {},
  },
};