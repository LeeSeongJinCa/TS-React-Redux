import React from 'react';

interface Props {}

const TestComponent: React.FC<Props> = () => {
  return (
    <div>if</div>
  );
};

const withTestContainer = (MyComponent: React.FC<Props>) => (props: { name: string }) => {
  console.log(props);
  if (props.name) {
    return <MyComponent />;
  }
  return (<div>else</div>);
};

export default withTestContainer(TestComponent);
