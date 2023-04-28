<template>
    <Navbar/>
    <div class="d-flex">
        <div class="col-4">
            <h2>entrelistsa</h2>
            <EntryList/>
        </div>
        <div class="col">
            <router-view/>
        </div>

    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'

    export default {
        components:{
            Navbar:defineAsyncComponent(()=>import('../components/Navbar.vue')),
            EntryList:defineAsyncComponent(()=>import('../components/EntryList.vue')),
        }
    }

</script>