# TrietLy's Portfolio

### My personal portfolio

### The official website is [trietlydev.com](https://trietlydev.com/)

## Tech stack

-   NextJS
-   ReactJS
-   TailwindCSS
-   MongoDB

## Project setup

.env.local:

```
# See: https://formspree.io
NEXT_PUBLIC_FORM_ENDPOINT=<your-formspree-endpoint>

# Mongodb: (See: https://www.mongodb.com/atlas/database)
MONGODB_URI=mongodb+srv://<username>:<password>@cluster....
MONGODB_DB=your-db-name

# create a "description" collection in your mongodb database
# create a document following the Schema:
# {
  desc: string,
  primary_skills: {
    skillCover: string,
    skillTitle: string,
    skillRef: string
  }[],
  secondary_skills: {
    skillCover: string,
    skillTitle: string,
    skillRef: string
  }[],
  projects: {
    pjCover: string,
    pjTitle: string,
    pjDesc: string,
    pjDemo: string,
    pjGithub: string,
    pjStack: {
      techCover: string,
      techTitle: string,
      techRef: string
    }[]
  }[]
}
DESC_MONGO_OBJECT_ID=<your-document-id>

```
