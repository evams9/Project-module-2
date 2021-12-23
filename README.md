# Project module 2
Pesadilla antes de Navidad

## Description:

Library to organice our comic collection.

## The user can:

- Sign up: The user can create an account.
- Log in: The user can log in in the website.
- Log out: The user can log in in the website.
- Homepage: The user can see their comics and add more volumes.
- Create edit profile: The user should be able to create and edit the profile.
- Add comic: The user can complete the characteristics of the comic that is adding.
- See comic: The user can consult the comic's genre, publisher, pages, description and opinion.
- Delete comic: The user is going to be able to delete the comics owned
- 404: Visualice an error message when the page is not found
- 500: Visualice an error message when there is a server error

## Backlog:
- Add collections: The user can join different comics in a single collection 
- Favorite comics: The user can add favorites.
- Check: The user can mark which books are read.
- Add friends.
- Add latest interactions.


## Routes:
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

## Models:

-- USER

```js
{
    userName: String,
    hashedPassword: String,
    verifyPassword: String,
    userEmail: String,
}
```
-- VOLUME

```js
{
   objectId
   volumeName: String,
   volumeNumber: Number,
   editorial: String,
   genre: Strin,
   pages: Number,
   review: String,
   volumePic: Img,
}
