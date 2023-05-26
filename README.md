# Sequelize Dog API

This API allows you to perform CRUD operations on a database of dogs!

## Endpoints

The following section provides information on the available endpoints for this API.

### Create a Dog

**Method**: `POST`

**Endpoint**: `/api/dogs`

**Description**: This endpoint creates a new dog with the provided information in the request body.

Request Body:
# Sequelize Dog API

This API allows you to perform CRUD operations on a database of dogs!

## Endpoints

The following section provides information on the available endpoints for this API.

### Create a Dog

**Method**: `POST`

**Endpoint**: `/api/dogs`

**Description**: This endpoint creates a new dog with the provided information in the request body.

Request Body:
```
{
  "name": "string",
  "age": integer,
  "breed": "string"
}
```
Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All Dogs

**Method**: `GET`

**Endpoint**: `/api/dogs`

**Description**: This endpoint retrieves all the dogs stored in the database.

Response:
```
[
  {
    "id": integer,
    "name": "string",
    "age": integer,
    "breed": "string",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

### Update a Dog

**Method**: `PUT`

**Endpoint**: `/api/dogs/:id`

**Description**: This endpoint updates the dog with the specified id using the information in the request body.

Request Body:
```
{
  "name": "string",
  "age": integer,
  "breed": "string"
}
```
Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Delete a Dog

**Method**: `DELETE`

**Endpoint**: `/api/dogs/:id`

**Description**: This endpoint deletes the dog with the specified id from the database.

Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```
