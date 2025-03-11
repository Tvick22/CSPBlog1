---
layout: post
title: Tri 2 Final Blog - 5 things I did over 12 weeks
description: 5 things I did over 12 weeks
type: issues
comments: True
---

## Summary of 12 weeks

Over the past 12 weeks, we worked on our project which included an API, a login feature, and a UI to display information. Our project was focused around sharing the love for cars, titled "Legendary Motorsport". As a team, we collaberated and produced a website with a running backend similar to instagram that allows users to share about cars.

## 1. Car Posts Store in the Database

I did research on database structures and used that knowledge to create tables in our database. Here is an overview of what an entry in the table looks like:

| id | title | description | uid | car_type | image_url_table | date_posted |
| --- | --- | --- | --- | --- | --- | --- |
| Unique Int | String | String | Reference Id (users table) | String | JSON Table | DATETIME |

Using this schema, each post has a unique id and a relation to the user who posted it. This relation allows us to query the users table for information about the user who created the post. This includes their username and pfp.

In the read method on each entry, we query the users table and pass that information to the client (This is made possible by the reference id).
```python
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
            "uid": user.read()["uid"],
            "email": user.read()["email"],
            "pfp": user.read()["pfp"]
        },
        "car_type": self._car_type,
        "image_url_table": self._image_url_table,
        "date_posted": self._date_posted
    }
    return data
```

## 2. Car Posts API connected to the Database

The API allows the client to send requests to the backend to read or write to the database. In my case, the client needs to save images to our database. To do this, the clients send Base 64 data in their request packet to be processed by the API:

```python
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

    # for base64_image in data['image_base64_table']:
    #     print(base64_image)
    #     carPostImage_base64_upload(base64_image, post.id, )

    # Return response to the client in JSON format, converting Python dictionaries to JSON format
    return jsonify(post.read())
```

```python
def carPostImage_base64_upload(base64_image, post_id, imageName):
    try:
        image_data = base64.b64decode(base64_image)
        filename = secure_filename(imageName)
        car_post_dir = os.path.join(app.config['UPLOAD_FOLDER'], "carPostImages", f"{post_id}")
        if not os.path.exists(car_post_dir):
            os.makedirs(car_post_dir)
        file_path = os.path.join(car_post_dir, filename)
        with open(file_path, 'wb') as img_file:
            img_file.write(image_data)
        return filename
    except Exception as e:
        print (f'An error occurred while updating the post picture: {str(e)}')
        return None
```

## 3. Car Post Display on the Frontend

To display the posts on the frontend, the client will have to send a request to get all the posts from the database. This will return an array of posts which needs to be parsed to create elements that appear on the webpage. After parsing each post, the client will add it to the page and display it for the user.

```js
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
```

This fufills the PPR requirement by taking an array/list of images and displaying them in a carousel. It would be much more difficult to display each image by itself without a list. This procedure also includes an algorithm that includes sequencing, selection, and iteration (map).

## 4. No Auth Page

On some pages on the site, the user is required to be logged in. However, users can still access these pages by typing in the url. To prevent users from being on pages that require authentication, I created the NoAuth page. I made this a page layout so that any site can use it.

```md
---
layout: needsAuth
---
```

```md
---
layout: base
---

<script type="module">
    import {
        pythonURI,
        fetchOptions,
    } from "{{site.baseurl}}/assets/js/api/config.js";

    document.addEventListener("DOMContentLoaded", () => {
        getCredentials() // Call the function to get credentials
            .then((data) => {
                if (data) {
                    //IF DATA THEN THE USER IS AUTHENTICATED/LOGGED IN
                    console.log("LOGGED IN");
                } else {
                    //USER IS NOT AUTHENTICATED/LOGGED IN
                    if (!window.location.href.includes("noauth")) {
                        window.location.href = "{{site.baseurl}}/noauth";
                    }
                }
            })
            .catch((err) => {
                // General error handler
                console.error("Error fetching credentials: ", err);
                // Handle any errors that occurred during getCredentials
            });
    });

    function getCredentials() {
        const URL = pythonURI + "/api/user";
        return fetch(URL, fetchOptions)
            .then((response) => {
                // API response handler
                if (response.status !== 200) {
                    console.error("HTTP status code: " + response.status);
                    return null; // prepares to stop the chain by returning null.
                }
                return response.json(); // plans to continue the chain with the data.
            })
            .then((data) => {
                // Data handler from the previous promise
                if (data === null) return null; // stops the chain, returns null.
                console.log(data); // logs data with should contain uid, name, etc.
                return data; // returns data to caller
            })
            .catch((err) => {
                // General error handler
                console.error("Fetch error: ", err);
                return null;
            });
    }
</script>
```

## 5. Make Post Page

The make post page allows the user to ironically send a POST request to the API to create a car post. It has a form that the user needs to fill out to submit a post. This allows users to create and share their cars with others.

![make_car_page]({{site.baseurl}}/images/entering-car-info.png)

This fufills the PPR requirement by allowing the user to input data with instructions.
