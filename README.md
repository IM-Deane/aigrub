# AiGrub

Website where users enter some dietary preferences (ie. gluten free, no
tomatoes) and the app generates a list of meal ideas and recipes.

This is a simple straightforward web application that uses Next.js and material
ui.

The main goal is to leverage OpenAI to generate custom/random recipes.

**Current Version: 1.0.0**

## MVP:

These are the minimum required features before releasing the application.

### Features:

- A user can enter their dietary preferences as a list of keywords (ie.
  gluten-free, no tomatoes, no dairy)
- Submitting the form with at least one di

## Project setup

1. Clone the project to your computer

```
git clone git@github.com:IM-Deane/aigrub.git
```

2. Navigate to the project folder and install dependencies

```
cd aigrub && npm install
```

3. Create an .env.local file from .env.example

```
cp .env.example .env.local
```

4. If this is an existing project you will need to get the secret key from
   another developer. If the project is new, you can generate a secret key by
   signing up for an account at [OpenAi](https://beta.openai.com/signup) and
   going [here](https://beta.openai.com/docs/quickstart/add-your-api-key). NOTE:
   Without this key your requests will fail and the project won't work.

5. After setting installing the dependencies and setting up your local
   environment, you can run the project with:

```
npm run dev
```

### Notes:

A `type-check` script is included in `package.json`, which runs TypeScript's
`tsc` CLI in `noEmit` mode to run type-checking separately. You can then include
this, for example, in your `test` scripts.
