<template>
    <div class="cursor-pointer text-black w-full rounded-[1rem] hover:border-black border border-gray-300 bg-sky-400 bg-opacity-[1%] p-4">
    <div class="flex justify-between">
        <h1 class="font-semibold text-[1.3rem]">{{ title }}</h1>
        <p class="opacity-60">{{ category }}</p>
    </div>
        <div>
            <p class="font-medium text-black opacity-80 text-[1rem]">{{ sub_title }}</p>
        </div>
    <div class="my-2 h-[0.5px] bg-gray-300 w-full"></div>

    <div>
        <p class="line-clamp-2" v-html="body"></p>
    </div>


<div class="flex justify-between opacity-70 mt-4 items-center h-[1rem]">
    <p>{{ name }}</p>
    <p class="text-[0.9rem]">{{ email }}</p>
</div>




</div>
</template>

<script setup>

const props = defineProps({
name: String,
user_id: String, 
email: String, 
tags: Array,
title: String,
id: String,
sub_title: String,
status: String,
body: String,
category: String,
});

</script>