# Genrate a new React Project with typecript support built in

- npx create-react-app <app_name> --template typescript

# Property 'children' does not exist

- React 18 introduces a breaking change with the removal of implicit children in
  React.FunctionComponent types. To fix this, we now must include the children in the
  interface along with our other props:

```
interface ChildProps {
color: string;
children?: React.ReactNode;
}
```
