# Express Note Taker
This is a web application that allows a user to write, save, and delete notes using an express backend. It can be utilized much like a notebook via the browser. It is deployed via Heroku [here](https://justin-note-taker.herokuapp.com/).

## Usage
### Locally
To install and use locally, ```git clone``` this repository and in the terminal run:
```bash
npm start
```
The web app will begin to be hosted on [localhost:3000](localhost:3000).

After the landing page, the note taker interface is displayed where the user can view previously saved notes, create new notes and delete notes. The notes are saved in a `.json` file on the backend.

### Screenshots
![landing-page](https://github.com/twopcz/Note-Taker/blob/master/assets/images/landing.png?raw=true)
![note-ui](https://github.com/twopcz/Note-Taker/blob/master/assets/images/notes.png?raw=true)

### Demo
![demo-gif](https://github.com/twopcz/Note-Taker/blob/master/assets/images/note-taker.gif?raw=true)

# Technologies

This application was built with:

* HTML
* CSS
* [Bootstrap](https://getbootstrap.com/)
* JavaScript
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)

The dependencies required:

```
  "dependencies": {
    "express": "^4.17.1"
  }
  ```

Documentation on dependencies:

* [Express](https://expressjs.com/) - web framework for Node.js

# Enhancements
Currently the deployed app on Heroku does not account for different users. Anybody who accesses the page can save/view/delete the notes, so saving notes according to a username/password would be the next logical step. It would be nice to create notes for different categories and also to be able to edit a saved note as well.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details