# Project module 2


## Description:

Library to organice our comic collection.

## The user can:

- Sign up: The user can create an account.
- Log in: The user can log in in the website.
- Create Home: The user can see their comics and add more volumes.
- Log out: The user can log in in the website.
- Add comic information: The user can complete the characteristics of the comic that is adding.
- Information comic page: The user can consult the comic's genre, publisher, pages, description and opinion.
- Create edit profile: The user should be able to create and edit the profile.

## Backlog:
- Favorite comics: The user can add favorites.
- Check: The user can mark which books are read.
- Add friends.
- Add latest interactions.

| Name            | Method | Endpoint                               | Description                                      | Body                                  | Redirects       |
| --------------- | ------ | -------------------------------------- | ------------------------------------------------ | ------------------------------------- | --------------- |
| Home            | GET    | /                                      | See the main page                                |                                       |                 |
| Log in form     | GET    | /login                                 | See the form to log in                           |                                       |                 |
| Log in          | POST   | /login                                 | Log in the user                                  | {mail, password}                      | /               |
| Sign Up form    | GET    | /signup                                | See the form to sign up                          |                                       |                 |
| Sign Up         | POST   | /signup                                | Sign up a user                                   | {mail, password}                      | /profile        |
| Log out         | POST   | /logout                                | Log out a user                                   |                                       | /               |
| Profile         | GET    | /profile                               | See the profile page with editable form          |                                       |                 |
| Profile edited  | POST   | /profile                               | Send user's data changed                         | {user_email, password                 | /profile}       |
| Collection      | GET    | /collection                            | See user's comic collection                      |                                       |                 |
| Comic           | GET    | /collection/comic                      | Read comic's information                         |                                       |                 |
| Comic add form  | GET    | /comic/new                             | See form to upload a new comic                   |                                       |                 |
| Comic add       | POST   | /comic/new                             | Upload a comic to user's collection              | {nickname, user_pics, }               | /collection/comicid  |
| Comic edit form | GET    | /comic/:comicid/edit                   | See edit form with comic's preloaded information |                                       |                      |
| Comic edit      | POST   | /comic/:comicid/edit                   | Add comic's new information                      | {nickname, user_pics, }               | /collection/comicid  |
| Comic delete    | POST   | /comic/:comicid/delete                 | Delete comic from user's collection              |                                       | /collection          |
