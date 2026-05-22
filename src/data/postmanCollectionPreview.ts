export type PostmanRequestPreview = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: string;
  purpose: string;
  validations: string;
};

export const postmanCollectionInfo = {
  name: "User Management API Testing Sample",
  baseUrl: "https://reqres.in/api",
};

export const postmanRequests: PostmanRequestPreview[] = [
  {
    method: "GET",
    endpoint: "/users",
    purpose: "Verify user list API",
    validations: "Status code 200, response time below 2000ms, response body has user list",
  },
  {
    method: "GET",
    endpoint: "/users/2",
    purpose: "Verify user detail API",
    validations: "Status code 200, response time, user data fields",
  },
  {
    method: "GET",
    endpoint: "/users/999",
    purpose: "Verify invalid user handling",
    validations: "Status code 404 and expected empty or error response behavior",
  },
  {
    method: "POST",
    endpoint: "/users",
    purpose: "Verify user creation",
    validations: "Status code 201 and response body includes created user fields",
  },
  {
    method: "PUT",
    endpoint: "/users/2",
    purpose: "Verify full user update",
    validations: "Status code 200 and response body includes updated fields",
  },
  {
    method: "PATCH",
    endpoint: "/users/2",
    purpose: "Verify partial user update",
    validations: "Status code 200 and response body includes updated job field",
  },
  {
    method: "DELETE",
    endpoint: "/users/2",
    purpose: "Verify user deletion",
    validations: "Status code 204 and response time below 2000ms",
  },
];
