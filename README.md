# What are we trying to do?

Import a component from external lib, wrap it, and pass its props and types along to Storybook, in a setup with React 17, Typescript 4, Storybook 6.4.

What is a good Typescript strategy for importing a component with all of its types and props, and then passing those props and types into Storybook, such that:

1. The internal default props are passed to the rendered Storybook component,
2. And Storybook "just works", without needing to enumerate `argTypes`?

Storybook should be able to infer the types for each part of the component as well as types and props of the components _that_ component is composed of.

Those come from the internals of the library component we're consuming, and we're importing/exporting them from `src/components/WrappedModalDialog/index.ts`.

This is possible, I'm just not sure how to make it happen with my desired Storybook pattern.
That pattern:

```jsx
export default {
  title: "Title",
  component: ComponentName,
  decorators: [
    (Story) => {
      // Since portal roots are registered globally, we need this line so that each storybook
      // story works in isolation.
      return (

        <BaseStyles>
          <Story />
        </BaseStyles>
      );
    },
  ],
  argTypes: {}, // <-- we want to be able to leave this object empty and let Storybook infer props and types for Controls from the imported components' props
  },
} as Meta;
```

Here's what this should look like, if was working:

![Minimal repro](https://media.giphy.com/media/G6wwwZFYKjwnKvncNu/giphy.gif)

Here's what this currently looks like (default props from the imported component not being passed along and hence, the modal renders like this, and there's no inferred args to create controls in Storybook):

![Minimal repro](https://media.giphy.com/media/vAmVAKVZJXvrXx3sxV/giphy.gif)

What do you think?

## Install and run:

`yarn`

`yarn storybook`
