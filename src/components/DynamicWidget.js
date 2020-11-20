import React, { lazy, Suspense } from "react";

export default function DynamicWidget(props) {
  const Component = lazy(async () => {
    try {
      return await import(`../plugins/${props.component}/Index.js`);
    } catch (error) {
      return import("./NotFound.js");
    }
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
  // return ;
}
