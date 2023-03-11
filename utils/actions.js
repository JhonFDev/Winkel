//registrar usuario
export const registerUser = (username, email, password, phone, birthday, address, rol) => {
  fetch("http://192.168.0.9:8000/user/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    username:username,
    email:email,
    password:password,
    phone:phone,
    birthday:birthday,
    address:address,
    rol:rol,
    
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("ha sido registrado con exito Respuesta:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
//fin registrar usuario

//iniciar sesion
export const loginUser = (email, password) => {
  let islogged = false
  fetch("http://192.168.0.9:8000/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    email:email,
    password:password,
    
    }),
  })
    .then((response) => response.json())
    .then((meta) => {
      
      console.log("has iniciado sesion Respuesta:", meta);
    })
     .catch((error) => {
      console.error("Error:", error);
    });
};
//fin iniciar sesion

//consultar si el usuario esta logueado
export const isUserLogged =(loginUser) =>{
let islogged = false

fetch("http://192.168.0.9:8000/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    loginUser:loginUser
    }),
  })
.then ((response) =>response.json(user))
.then((data) => {
  console.log("whathappens", data)
  data !== null && (islogged = true)
});
 
};
// fin consultar si el usuario esta logueado

//usuario actual
export const getCurrentUser = (email) => {
  fetch("http://192.168.0.9:8000/user/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    email:email,
    
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("ha sido registrado con exito Respuesta:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
//fin usuario actual