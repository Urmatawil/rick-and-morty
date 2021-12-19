<template>
  <section>
    <div class="characters">
      <div class="characters_item">
        <h2>Characters</h2>
      </div>
    </div>
  </section>
</template>

<script>
import {onMounted} from 'vue'
//para acceder a todo el store configurado
import {useStore} from 'vuex'

export default {
    setup(){
        const store = useStore();

        onMounted(() => {
            //con dispatch accedemos a las actions del store
            store.dispatch('getCharacters')
        })
    }}

</script>

<style></style>