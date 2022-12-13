# AiGrub

Website where users enter some dietary preferences (ie. gluten free, no
tomatoes) and the app generates a list of meal ideas and recipes.

This is a simple straightforward web application that uses Next.js and material
ui.

The main goal is to leverage OpenAI to generate custom/random recipes.

## MVP:

These are the minimum required features before releasing the application.

### Features:

- A user can enter their dietary preferences as a list of keywords (ie.
  gluten-free, no tomatoes, no dairy)
- Submitting the form with at least one di

## Project setup

1. Clone the project to your computer

```
git clone git@github.com:IM-Deane/what-should-I-eat-tonight.git
```

2. Navigate to the project folder and install dependencies

```
cd what-should-I-eat-tonight && npm install
```

3. Run the project

```
npm run dev
```

### Notes:

A `type-check` script is included in `package.json`, which runs TypeScript's
`tsc` CLI in `noEmit` mode to run type-checking separately. You can then include
this, for example, in your `test` scripts.
