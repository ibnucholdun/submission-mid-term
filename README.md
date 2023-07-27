# Getting Started to the development

- Clone the repository:

```
git clone https://github.com/ibnucholdun/submission-mid-term.git
```

- Switch to the repo folder:

```
cd submission-mid-term
```

- Install all the dependencies using npm or you can using yarn:

```
npm install or yarn install
```

- add file .env

```
PORT=3000
MONGODB_URL= YOUR MONGO URL
```

- Run the server:

```
npm run start-dev
```

You can now access the server at http://localhost:3000


# API Documentation

## VIDEO

* Video Object
```
{
  videoID: Uniqe,
  urlImageThumbnail: String,
  urlVideo: String
}
```

**GET /api/video**
----
  Returns all videos in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
  status: "Success",
  message: "All Videos", 
  allVideos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
``` 

**GET /api/video/:videoID**
----
  Returns the specified video.
* **URL Params**  
  *Required:* `videoID=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**
  ```
  {
    status: "Success",
    message: "Video found",
    video: {
        <video_object>,
        products: [],
        comments: []
    }
  }
  ```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{
    status: "Failed",
    message: "Video not found"
    }`  
  OR  
  * **Code:** 500  
  **Content:** `{ status: "Error",
      message: "Server Error" }`

**POST /api/video**
----
  Creates a new Video and returns the new object.
* **URL Params**  
  None
* **Data Params**  
```
  {
    urlImageThumbnail": String,
    urlVideo": String
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**
  ```
  {
    success: "Success",
    message: "Video created",
    video: { <video_object> }
  }
  ```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ status: "Error",
      message: "Server Error" }`

**PUT /api/video/:videoID**
----
  Updates fields on the specified video and returns the updated object.
* **URL Params**  
  *Required:* `videoID=[integer]`
* **Data Params**  
```
  {
    urlImageThumbnail": String,
    urlVideo": String
  }
```

* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  {
    status: "Success",
    message: "Video updated",
    video: { <video_object> }
  }
  ```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{
    status: "Failed",
    message: "Video not found"
    }`  
  OR  
  * **Code:** 500  
  **Content:** `{ status: "Error",
      message: "Server Error" }`


**DELETE /api/video/:videoID**
----
  Deletes the specified video.
* **URL Params**  
  *Required:* `videoID=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
  * **Code:** 200
    **Content:**
    ```
    {
      status: "Success",
      message: "Video deleted successfully",
    }
    ```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{
    status: "Failed",
    message: "Video not found"
    }`  
  OR  
  * **Code:** 500  
  **Content:** `{ status: "Error",
      message: "Server Error" }`



## PRODUCT

* Product Object
```
{
  productID: Uniqe,
  link: String,
  title: String,
  price": Integer,
  videoID: Uniqe,
}
```

**GET /api/product**
----
  Returns all products in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
  status: "Success",
  message: "All Products", 
  allProducts: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
``` 

**GET /api/product/:productID**
----
  Returns the specified product.
* **URL Params**  
  *Required:* `productID=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**
  ```
  {
    status: "Success",
    message: "Product found",
    product: {<product_object>}
  }
  ```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{
    status: "Failed",
    message: "product not found"
    }`  
  OR  
  * **Code:** 500  
  **Content:** `{ status: "Error",
      message: "Server Error" }`

**POST /api/product**
----
  Creates a new Product and returns the new object.
* **URL Query**  
   *Required:* `?videoID=[integer]`
* **Data Params**  
```
  {
    link: String,
    title: String,
    price: Integer
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**
  ```
  {
    success: "Success",
    message: "Product created",
    product: { <product_object> }
  }
  ```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{status: "Error",
      message: "Server Error" }`

**PUT /api/product/:productID**
----
  Updates fields on the specified video and returns the updated object.
* **URL Params**  
  *Required:* `productID=[integer]`
* **Data Params**  
```
  {
    link: String,
    title: String,
    price: Integer
  }
```

* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**
  ```
  {
    status: "Success",
    message: "Product updated",
    product: { <product_object> }
  }
  ```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{
    status: "Failed",
    message: "Product not found"
    }`  
  OR  
  * **Code:** 500  
  **Content:** `{ status: "Error",
      message: "Server Error" }`


**DELETE /api/product/:productID**
----
  Deletes the specified video.
* **URL Params**  
  *Required:* `productID=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
  * **Code:** 200
    **Content:**
    ```
    {
      status: "Success",
      message: "Product deleted successfully",
    }
    ```
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{
    status: "Failed",
    message: "Product not found"
    }`  
  OR  
  * **Code:** 500  
  **Content:** `{ status: "Error",
      message: "Server Error" }`


## COMMENT

* Comment Object
```
{
  username: String,
  comment: String,
  timestamp: Date,
}
```

**GET /api/comment/:username**
----
  Returns all comment in the system.
* **URL Params**  
  *Required:* `username=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
  status: "Success",
  message: "All Comments", 
  commentLis: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
``` 

* **Error Response:**  
  * **Code:** 500  
  **Content:** `{ status: "Error",
      message: "Server Error" }`

**POST /api/comment**
----
  Creates a new Product and returns the new object.
* **URL Query**  
   *Required:* `?videoID=[integer]`
* **Data Params**  
```
  {
    username: String,
    comment: String
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**
  ```
  {
    success: "Success",
    message: "Comment Added",
    comment: { <comment_object> }
  }
  ```
* **Error Response:**  
  * **Code:** 500  
  **Content:** `{status: "Error",
      message: "Server Error" }`
