# MERN Book Search Engine

## Description

This project is a book search engine built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to search for books using the Google Books API, save books to their account, and view and remove saved books. The backend API has been refactored to use GraphQL with Apollo Server.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Testing](#testing)
- [Credits](#Credits)
- [License](#license)

## Installation


2. Install dependencies for both client and server:
    ```sh
    npm install
    cd client
    npm install
    ```


## Usage


2. Start the server:
    npm start

3. Open your browser and navigate to `http://localhost:3001` to use the application.

4. Access the GraphQL Playground at `http://localhost:3001/graphql` to interact with the API.

## Deployment

To deploy the application to Render:

1. Ensure your MongoDB Atlas cluster is set up and your IP address is whitelisted.

2. Add the MongoDB connection string as an environment variable in Render.

3. Push your changes to the Git repository connected to Render.

4. Render will automatically build and deploy your application.

## Testing

### Manual Testing

1. **Add a New User**:
    ```graphql
    mutation AddUser {
      addUser(username: "testuser", email: "testuser@example.com", password: "password") {
        token
        user {
          _id
          username
          email
        }
      }
    }
    ```

2. **Login User**:
    ```graphql
    mutation Login {
      login(email: "testuser@example.com", password: "password") {
        token
        user {
          _id
          username
          email
        }
      }
    }
    ```

3. **Get Current User**:
    ```graphql
    query GetMe {
      me {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
    ```

4. **Save a Book**:
    ```graphql
    mutation SaveBook {
      saveBook(bookData: {
        bookId: "12345",
        authors: ["Author Name"],
        description: "A great book",
        title: "Book Title",
        image: "http://example.com/image.jpg",
        link: "http://example.com"
      }) {
        _id
        username
        savedBooks {
          bookId
          title
        }
      }
    }
    ```

5. **Remove a Book**:
    ```graphql
    mutation RemoveBook {
      removeBook(bookId: "12345") {
        _id
        username
        savedBooks {
          bookId
          title
        }
      }
    }
    ```


## Credits

Credits to columbia university instructors and staff 

## License

This project is licensed under the MIT License.
