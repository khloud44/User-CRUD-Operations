# crud-users

## Project setup
```
npm install
```

### For Development Run
```
npm run serve
```

### For Production Run
```
npm run build
```

### the EndPoints :
```
## 1.List all users 
    "/"
## 2.Create user 
    "/create"
## 3.Show one user 
    "/showuser/userId"  => userId is a variable number
## 4.Update User 
    "/editUser/userId"  => userId is a variable number

```

### Folder Structure :
```

├── public
│   │   └── index.html
├── src
│   ├── api
│   │   └── axios.js
│   ├── assets
│   ├── components
│   │   ├── creatUserComp.vue
│   │   ├── editUserComp.vue
│   │   ├── landingComp.vue
│   │   ├── loadingComp.vue
│   │   ├── navbarComp.vue
│   │   ├── notFoundComp.vue
│   │   ├── showOneUserComp.vue
│   │   └── showUsersComp.vue
│   ├── router
│   │   └── router.js
│   ├── store
│   │   └── store.js
│   ├── main.js
│   └── wrapper.vue
├── package.json
├── package-lock.json
└── README.md