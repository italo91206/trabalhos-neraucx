<template>
    <nav id="menu-principal">
        <div class="container">
            <ul class="navbar-nav">
                <li class="nav-item"><router-link to="/" class="nav-link">Início</router-link></li>
                <li class="nav-item"><router-link to="/monitor" class="nav-link">Monitorar</router-link></li>
                <li class="nav-item"><router-link to="/about" class="nav-link">Sobre</router-link></li>
            </ul> 
        </div>
    </nav>
</template>

<script>
export default {
    name: 'menu'
}
</script>

<style>
</style>