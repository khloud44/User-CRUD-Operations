<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container ">
            <router-link to="/" class="navbar-brand" >Our App</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                    <router-link to="/" class="nav-link">Users</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/create" class="nav-link">New User</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>