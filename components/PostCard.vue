<template>

    <div class="rounded-[1rem] border border-gray-300 w-[32rem] bg-sky-800 bg-opacity-[1%] hover:border-sky-400 duration-300 transition-all ease-in-out">
        <div class="h-[3rem] w-full bg-slate-100 p-2 rounded-tl-[1rem] rounded-tr-[1rem] flex items-center"> <!-- Head -->
            <div class="flex flex-row gap-1 items-center h-full w-full">
            <div class="ml-2 rounded-full h-[1.7rem] w-[1.7rem] border border-gray-300 text-[0.7rem] font-medium flex justify-center items-center">{{ initials }}</div>
            <h2 class="font-normal ml-2">{{ Username }}</h2>
            </div>
        </div> 

        <div class=" w-full p-4 rounded-bl-[1rem] rounded-br-[1rem]"> <!-- body -->
            <p class="font-light text-[0.9rem]">{{ Content }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    Username: String,
    Content: String,
    FirstName: String,
    LastName: String
})

const initials = computed(() => {
  const firstInitial = props.FirstName.charAt(0).toUpperCase();
  const secondInitial = props.LastName.charAt(0).toUpperCase();
  return `${firstInitial}${secondInitial}`;
});

</script>
