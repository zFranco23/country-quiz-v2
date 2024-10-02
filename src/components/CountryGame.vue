<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGameStore } from '../store/game';   
import GameStarted from './GameStarted.vue';
import GameEnded from './GameEnded.vue';
import { watchEffect } from 'vue';

const store = useGameStore()
const {isGameEnded, isGameStarted} = storeToRefs(store)
    
    
watchEffect(() => {
    store.generateQuestions();
}) 

</script>

<template>
    <div class="center-background">
        <GameStarted v-if="isGameStarted && !isGameEnded" />
        <GameEnded v-if="isGameEnded" />
    </div>
</template>



<style lang="scss" scoped>
    .center-background {
        background-color: #8B8EAB;
        width: 100%;
        max-width: 1136px;
        margin: 0 auto;
    }
    
</style>