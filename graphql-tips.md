{
  users {
    id,
    name,
    email
  }
}

{
  user(
    id: "1"
  ) {
    name,
    email
  }
}

mutation{
  createUser(data: {
    name: "",
    email: "@email.com"
  })
  {
    id
    name
    email
  }
}

mutation{
  updateUser(
    id: "2",
    data: {
      name: "danilo--123"
    }
  ) {
    id
    email
  }
}

mutation{
  deleteUser(
    id: "2"
  )
}

query {
    login(
      auth: { 
        email: "user@email.com", 
        password: "pasword" 
      }
    ) 
}