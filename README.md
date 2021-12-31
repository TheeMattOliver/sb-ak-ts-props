# Minimal repro to try to understand Typescript, Storybook, and the right import/export strategy

This Storybook is live at [https://serene-babbage-995693.netlify.app/](https://serene-babbage-995693.netlify.app/).

## tl;dr

My goal is to import a component from external lib, and pass its props and types along to Storybook, in a setup with React 17, Typescript 4, Storybook 6.4. I might also want to eventually wrap it in a `styled-components` component that we can compose with, but for now, I'm just trying to understand the correct strategy to set properly type props and set default props on components with Typescript, and get it into Storybook so it renders properly and we get controls for each prop.

Here's what this should look like, if it was working:

![Minimal repro](https://media.giphy.com/media/G6wwwZFYKjwnKvncNu/giphy.gif)

Here's what this currently looks like (default props from the imported component not being passed along and hence, the modal renders like this, and there's no inferred args to create controls in Storybook):

![Minimal repro](https://media.giphy.com/media/vAmVAKVZJXvrXx3sxV/giphy.gif)

## More:

What is a good Typescript strategy for importing that external component, with its internal types and props, and then passing those props and types into Storybook, such that:

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
  argTypes: {}, // <-- we want to be able to leave this object empty and let Storybook infer
  // props and types for Controls from the imported components' props
  },
} as Meta;
```

I've seen people use `parameters` in their Story component, but I think this is a Typescript thing I'm misunderstanding.

## Files

`/src/components/NaiveConfirmationDialog` is basically what it sounds like. It imports the component, but those implementations rely on a bunch of JSX. It would be great if we didn't have to do that, and could just rely on passing props into the component.

`/src/components/WrappedModalDialog` displays the approach I'm trying to understand how to achieve. We import all the components from the external lib in `WrappedModalDialog`, and would ideally be able to export it as a consumable package from `index.ts`; we'd also ideally see the component render properly and all of the various props from the components that the `modal-dialog` component is composed of as controls in Storybook.

This Storybook is live at [https://serene-babbage-995693.netlify.app/](https://serene-babbage-995693.netlify.app/).

## Install and run:

`yarn`

`yarn storybook`
