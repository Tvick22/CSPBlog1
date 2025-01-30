---
layout: post
title: Sprint 4 Project Overview
description: Overview of Sprint 4
type: issues
comments: True
---

# Overview of the website (LEGENDARY MOTORSPORT)

> The website connects users to share cars, stories, and experiences, and also find or report mechanical issues.

## Purpose of the program

> The purpose of the program is to create a website that will allow users to share their cars, stories, and experiences, and also find or report mechanical issues.

## My Individual Feature (Car Posts)

> My feature is to create a car post that will allow users to share their cars, stories, and experiences in the same way we would share a post on Instagram.

![Car Info Page]({{site.baseurl}}/images/entering-car-info.png)

## How creating posts work

> Creating a post is simple. The user will input information about the post including the title, description and images. After the user has entered their information, the site will send a POST request to our backend server. The server will then check and store the information in a database.

#### SCRIPT TAG FOR THE POST MAKING PAGE

```javascript
<script type="module">
  import { convertToBase64, createPost } from "{{site.baseurl}}/assets/js/api/posts.js";


  const imgContainer = document.getElementById('image-upload-container');
  const addImageButton = document.getElementById('add-image');
  const submitButton = document.getElementById('submit-btn')

  addImageButton.addEventListener('click', () => {
    const newInput = document.createElement('div');
    newInput.classList.add('flex', 'items-center', 'space-x-2');
    newInput.innerHTML = `
      <input type="file" name="images[]" accept="image/*" class="img_file block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-blue-100">
      <button type="button" class="remove-image px-3 py-1 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700">-</button>
    `;
    imgContainer.appendChild(newInput);

    // Add event listener to remove button
    newInput.querySelector('.remove-image').addEventListener('click', () => {
      imgContainer.removeChild(newInput);
    });
  });

  async function submit() {
    const imageDivs = document.getElementsByClassName('img_file')
    const imageBase64Table = []
    for (let i = 0; i < imageDivs.length; i++) {
      if (imageDivs[i].files.length == 0) {
        return
      }
      const img = await convertToBase64(imageDivs[i].files[0])
      imageBase64Table.push({
        "name": ""+i,
        "base64": img
      })
    }

    createPost({
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      car_type: "gas",
      image_base64_table: imageBase64Table
    })

    window.location.href = '{{site.baseurl}}/allPosts'
  }

  submitButton.addEventListener('click', submit)
</script>
```

#### CREATE POST FUNCTION

```javascript
export async function createPost(post) {
  const postOptions = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-Origin": "client", // New custom header to identify source
    },
    body: JSON.stringify({
      title: post.title,
      description: post.description,
      car_type: post.car_type,
      image_base64_table: post.image_base64_table,
    }),
  };

  const endpoint = pythonURI + "/api/carPost";

  try {
    const response = await fetch(endpoint, postOptions);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return null;
  }
}
```

#### POST API HANDLER

```python
@token_required()
def post(self):
    # Obtain the current user from the token required setting in the global context
    current_user = g.current_user
    # Obtain the request data sent by the RESTful client API
    data = request.get_json()

    if "title" not in data or "description" not in data or "car_type" not in data or "image_base64_table" not in data:
        return Response("{'message': 'Missing required fields'}", 400)

    # Create a new post object using the data from the request
    post = CarPost(data['title'], data['description'], current_user.id, data['car_type'], "[]")
    # Save the post object using the Object Relational Mapper (ORM) method defined in the model
    post.create()

    # Convert the image_base64_table to a list of strings
    image_url_table = []
    for i in range(len(data['image_base64_table'])):
        base64_image = data['image_base64_table'][i]["base64"]
        name = data['image_base64_table'][i]["name"]
        if image_url_table.count(name) > 0:
            # If the name already exists, append a number to the end of the name
            # This is to prevent duplicate image names
            newName = name.replace(".", f"_{i}.", 1)
            name = newName
        print(base64_image)
        carPostImage_base64_upload(base64_image, post.id, name)
        image_url_table.append(name)
    post.updateImageTable(image_url_table)
    return jsonify(post.read())
```

![Car Post Example]({{site.baseurl}}/images/example-car-post.png)

## How displaying posts work

> To display posts, the user will click on the "All Posts" button on the homepage. The site will send a GET request to our backend server. The server will then check and return all the posts from the database.

#### SCRIPT TAG FOR THE POST DISPLAYING PAGE

```javascript
<script type="module">
import { getPostsByType, getImagesByPostId, removePostById } from "{{site.baseurl}}/assets/js/api/posts.js";

const carType = "all";
const postsContainer = document.getElementById("posts-container");

const getPostImages = async (postId) => {
  getImagesByPostId(postId).then((images) => {
    if (images) {
      const formattedImages = [];
      images.forEach((image) => {
        formattedImages.push(`data:image/jpeg;base64,${image}`);
      });
      return formattedImages;
    } else {
      console.error("Failed to fetch images");
    }
  });
}

const removePost = async (postId, postElement) => {
  const removed = await removePostById(postId)
  if (removed) {
    postElement.remove(); // Remove the post element from the DOM
  } else {
    alert("Cannot remove post");
  }
}

getPostsByType(carType).then((posts) => {
  if (posts) {
    const postsContainer = document.getElementById("posts-container");
    const dateNow = new Date();
    const dateNowString = dateNow.getMonth()+1 + "/" + dateNow.getDate() + "/" + dateNow.getFullYear();
    const dateNowHours = dateNow.getHours();
    const orderedPostElements = [...posts]
    const orderedPosts = orderPostByDate(posts)

    orderedPosts.forEach((post, i) => {
      getImagesByPostId(post.id).then((images) => {
        const formattedImages = [];
        images.forEach((image) => {
          formattedImages.push(`data:image/jpeg;base64,${image}`);
        });
        const date = new Date(post.date_posted)
        let dateString = date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
        if (dateNowString === dateString) {
          dateString = "Today";
        }
        const postElement = makePostElement(post.title, post.description, dateString, formattedImages, post.id, post.car_type, post.user.name);
        postsContainer.appendChild(postElement)
      });
    });
  } else {
    console.error("Failed to fetch posts");
  }
});

function makePostElement(title, description, date, images, postId, carType, username) {
  const postElement = document.createElement("div");
    postElement.className =
      "w-1/3 max-w-xl mx-auto border border-gray-300 rounded-lg shadow-md bg-white";

    // Add post content
    postElement.innerHTML = `
      <!-- Close Button -->
      <button
        class="closeBtn top-2 left-2 text-gray-600 hover:text-gray-900 rounded-full p-2"
        aria-label="Close">
        &times;
      </button>
      <!-- Header -->
      <div class="flex items-center px-4 py-2">
        <div class="ml-3">
          <h3 class="text-lg font-semibold text-gray-900">${title}</h3>
          <p class="text-sm text-gray-500">${date}</p>
          <p class="text-sm text-gray-500">${carType.toUpperCase()}</p>
          <p class="text-sm text-gray-500">${username.toUpperCase()}</p>
        </div>
      </div>
      <hr class="border-gray-300">

      <!-- Carousel -->
      <div class="relative flex w-full overflow-hidden">
        <div class="carousel relative flex w-full">
          ${images
            .map(
              (image, index) =>
                `
                <img src="${image}" alt="${title}" class="carousel-item w-full">
                `
            )
            .join("")}
        </div>
      </div>

      <!-- Description -->
      <div class="px-4 py-2">
        <p class="text-gray-700">${description}</p>
      </div>
      <hr class="border-gray-300">
    `;

    const closeButton = postElement.querySelector(".closeBtn");
    closeButton.addEventListener("click", () => removePost(postId, postElement));


    return postElement;
}

function orderPostByDate(posts) {
  const sortedPosts = posts

  sortedPosts.sort((post1, post2) => {
    const dateTime1 = new Date(post1["date_posted"])
    const dateTime2 = new Date(post2["date_posted"])

    return dateTime1.getTime()-dateTime2.getTime()
  })
  return sortedPosts
}

</script>
```

#### GET POSTS BY TYPE FUNCTION

```javascript
export async function getPostsByType(carType) {
  const possibleCarTypes = ["gas", "electric", "hybrid", "dream", "all"];
  if (!possibleCarTypes.includes(carType)) {
    throw new Error("Invalid car type");
  }

  let endpoint = pythonURI + "/api/carPost/allPosts/" + carType;

  if (carType == "all") {
    endpoint = pythonURI + "/api/carPost";
  }

  try {
    const response = await fetch(endpoint, fetchOptions);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return null;
  }
}
```

## API Documentation

### GET /api/carPost (JSON)

```python
{
  "id": ID,
  "title": STRING,
  "description": STRING,
  "user": {
      "name": STRING,
      "id": ID,
      "email": STRING,
      "pfp": STRING
  },
  "car_type": STRING,
  "image_url_table": ARRAY,
  "date_posted": DATETIME
}
```

## CAR POST CLASS (MODEL)

```python
class CarPost(db.Model):
    """
    CarPost Model

    The Post class represents an individual contribution or discussion within a group.

    Attributes:
        id (db.Column): The primary key, an integer representing the unique identifier for the post.
        _title (db.Column): A string representing the title of the post.
        _description (db.Column): A string representing the description of the post.
        _uid (db.Column): An integer representing the user who created the post.
        _car_type (db.Column): An string representing the group to which the post belongs (gas, electric, hybrid, dream).
        _image_url_table (db.Column): A JSON array of strings representing the url path to the image contained in the post
    """
    __tablename__ = 'carPosts'
    id = db.Column(db.Integer, primary_key=True)
    _title = db.Column(db.String(255), nullable=False)
    _description = db.Column(db.String(255), nullable=True)
    _uid = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    _car_type = db.Column(db.String(255), nullable=False)
    _image_url_table = db.Column(db.String(255), nullable=True)
    _date_posted = db.Column(db.DateTime, nullable=False)

    def __init__(self, title, description, uid, car_type, image_url_table, input_datetime=''):
        """
        Constructor, 1st step in object creation.

        Args:
            title (str): The title of the post.
            description (str): The description of the post.
            uid (int): The user who created the post.
            car_type (str): The type of car (gas, electric, hybrid, dream).
            image_url_table (list): The url path to the image
        """
        if car_type not in ['gas', 'electric', 'hybrid', 'dream']:
            raise ValueError('Car type must be one of gas, electric, hybrid, dream')

        print(uid)
        self._title = title
        self._description = description
        self._uid = uid
        self._car_type = car_type
        self._image_url_table = image_url_table
        if not input_datetime:
            self._date_posted = datetime.now()
        else:
            self._date_posted = datetime.fromisoformat(input_datetime)

        print(self._date_posted)

    def __repr__(self):
        """
        The __repr__ method is a special method used to represent the object in a string format.
        Called by the repr(post) built-in function, where post is an instance of the Post class.

        Returns:
            str: A text representation of how to create the object.
        """
        return f"Post(id={self.id}, title={self._title}, description={self._description}, uid={self._uid}, car_type={self._car_type}, image_url_table={self._image_url_table}, date_posted={self._date_posted})"

    def create(self):
        """
        The create method adds the object to the database and commits the transaction.

        Uses:
            The db ORM methods to add and commit the transaction.

        Raises:
            Exception: An error occurred when adding the object to the database.
        """
        try:
            db.session.add(self)
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            raise error

    def read(self):
        """
        The read method retrieves the object data from the object's attributes and returns it as a dictionary.

        Uses:
            The Group.query and User.query methods to retrieve the group and user objects.

        Returns:
            dict: A dictionary containing the post data, including user and group names.
        """
        user = User.query.get(self._uid)
        data = {
            "id": self.id,
            "title": self._title,
            "description": self._description,
            "user": {
                "name": user.read()["name"],
                "id": user.read()["id"],
                "email": user.read()["email"],
                "pfp": user.read()["pfp"]
            },
            "car_type": self._car_type,
            "image_url_table": self._image_url_table,
            "date_posted": self._date_posted
        }
        return data

    def updateImageTable(self, image_url_table):
        self._image_url_table = str(image_url_table)
        print(self._image_url_table)
        self.update()

    def update(self, inputs=None):
        """
        The update method commits the transaction to the database.

        Uses:
            The db ORM method to commit the transaction.

        Raises:
            Exception: An error occurred when updating the object in the database.
        """
        if inputs:
            self._car_type = inputs.get("car_type", self._car_type)
            self._image_url_table = inputs.get("image_url_table", self._image_url_table)
            self._date_posted = datetime.fromisoformat(inputs.get("date_posted", self._date_posted))
            self._title = inputs.get("title", self._title)
            self._description = inputs.get("description", self._description)
            self._uid = inputs.get("uid", self._uid)
        try:
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            raise error

    def delete(self):
        """
        The delete method removes the object from the database and commits the transaction.

        Uses:
            The db ORM methods to delete and commit the transaction.

        Raises:
            Exception: An error occurred when deleting the object from the database.
        """
        try:
            db.session.delete(self)
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            raise error

    def restore(data):
        users = {}
        for carPost_data in data:
            id = carPost_data.get("id")
            post = CarPost.query.filter_by(id=id).first()
            if post:
                post.update(carPost_data)
            else:
                print(carPost_data)
                post = CarPost(carPost_data.get("title"), carPost_data.get("description"), carPost_data.get("user").get("id"), carPost_data.get("car_type"), carPost_data.get("image_url_table"), carPost_data.get("date_posted"))
                post.create()
        return users
```

## CPT QUESTIONS

### The first program code segment must be a student-developed procedure that:

- [x] Defines the procedure’s name and return type (if necessary)
- [x] Contains and uses one or more parameters that have an effect on the functionality of the procedure
- [x] Implements an algorithm that includes sequencing, selection, and iteration

```js
export async function getPostsByType(carType) {
  const possibleCarTypes = ["gas", "electric", "hybrid", "dream", "all"];
  if (!possibleCarTypes.includes(carType)) {
    throw new Error("Invalid car type");
  }

  let endpoint = pythonURI + "/api/carPost/allPosts/" + carType;

  if (carType == "all") {
    endpoint = pythonURI + "/api/carPost";
  }

  try {
    const response = await fetch(endpoint, fetchOptions);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return null;
  }
}
```

### The second program code segment must show where your student-developed procedure is being called in your program.

```js
getPostsByType(carType).then((posts) => {
  if (posts) {
    const postsContainer = document.getElementById("posts-container");
    const dateNow = new Date();
    const dateNowString = dateNow.getMonth()+1 + "/" + dateNow.getDate() + "/" + dateNow.getFullYear();
    const dateNowHours = dateNow.getHours();
    const orderedPostElements = [...posts]
    const orderedPosts = orderPostByDate(posts)

    orderedPosts.forEach((post, i) => {
      getImagesByPostId(post.id).then((images) => {
        const formattedImages = [];
        images.forEach((image) => {
          formattedImages.push(`data:image/jpeg;base64,${image}`);
        });
        const date = new Date(post.date_posted)
        let dateString = date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
        if (dateNowString === dateString) {
          dateString = "Today";
        }
        const postElement = makePostElement(post.title, post.description, dateString, formattedImages, post.id, post.car_type, post.user.name);
        postsContainer.appendChild(postElement)
      });
    });
  } else {
    console.error("Failed to fetch posts");
  }
});
```

### The first program code segment must show how data have been stored in the list

```js
function orderPostByDate(posts) {
  const sortedPosts = posts

  sortedPosts.sort((post1, post2) => {
    const dateTime1 = new Date(post1["date_posted"])
    const dateTime2 = new Date(post2["date_posted"])

    return dateTime1.getTime()-dateTime2.getTime()
  })
  return sortedPosts
}
```

- **posts** parameter is an array

### The second program code segment must show the data in the same list being used, such as creating new data from the existing data or accessing multiple elements in the list, as part of fulfilling the program’s purpose.

```js
const orderedPosts = orderPostByDate(posts)

orderedPosts.forEach((post, i) => {
  getImagesByPostId(post.id).then((images) => {
    const formattedImages = [];
    images.forEach((image) => {
      formattedImages.push(`data:image/jpeg;base64,${image}`);
    });
    const date = new Date(post.date_posted)
    let dateString = date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
    if (dateNowString === dateString) {
      dateString = "Today";
    }
    const postElement = makePostElement(post.title, post.description, dateString, formattedImages, post.id, post.car_type, post.user.name);
    postsContainer.appendChild(postElement)
  });
});
```
