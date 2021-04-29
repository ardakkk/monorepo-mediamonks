import React, { FC, VFC } from "react";
import { Button } from "./component";

export default {
  title: 'Brand A/Atoms/Button',
  component: Button
}

export const Basic: VFC<{}> = () => (
  <>
    <Button>Click me</Button>
  </>
)
