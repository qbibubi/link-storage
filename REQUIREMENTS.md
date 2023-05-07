# Overview

The goal of the app is to allow users to store http links

# Requirements

- User must be able to log in to access their links, with email and password.
- User must be able to make CRUD operations such as:
  - CREATE Adding a new entry which consists of a title and a http link
  - READ Fetch and display all the entries
  - UPDATE Editing an existing entry (changing title or link or both)
  - DELETE Remove an entry
- A very simple frontend with a home page with signup and signin form,
  and an authorized view after sign in where entries are displayed.
- User must be able to log out in the authorized view.

# Tech Requirements

- Express
- Plain HTML, CSS, JS served with express
- TypeScript
- Session cookies
- Any database, relational or non-relational
- Deployment method is up to you

# Nice to have (bonus points)

- Pagination for fetching entries
- OAuth (Github/Google/Email)
