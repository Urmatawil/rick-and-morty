<template>
  <section>
    <div class="characters">
        <h2>Characters</h2>
      <div class="characters_item" v-for="character in characters" :key="character.id">
        <CharacterCard :character="character"/>
      </div>
    </div>
  </section>
</template>

<script>
import {onMounted, computed} from 'vue'
//para acceder a todo el store configurado con vuex
import {useStore} from 'vuex'
//importamos nuestro componente para mostrar los personajes
import CharacterCard from '@/components/CharacterCard'

export default {

    //y agregamos nuestro componente a nuestros components
    components:{
        CharacterCard
    },
    setup(){
        //agregamos todo el store a una variable, para luego acceder al él
        const store = useStore();
        //accedemos al characters que se encuentra en el store
        //con computed para que realice la acción
        const characters = computed(()=> store.state.charactersFilter)

        onMounted(() => {
            //con dispatch accedemos a las actions del store, en este caso llamamos la funcion getCharacters y se ejecuta cuando apenas la app este montada
            store.dispatch('getCharacters')
        })

        return {
            //retornamos el resultado a la app
            characters
        }
    }}

</script>

<style></style>