<template>
<nav>
    <div class="w-full h-[5rem] shadow-sm border-[0.5px] border-b border-gray-300 flex items-center">
        <div class="flex flex-row items-center justify-between gap-4 w-full px-8">
        <h1 class="font-semibold text-[2rem]">Headless CMS Blog</h1>
            <div class="flex flex-row gap-2 cursor-pointer items-end">
                <h2 class="font-normal">Tim Wurmbrand</h2>
                <h2 class="font-normal">&</h2>
                <h2 class="font-normal">Daniil Goncharov</h2>
            </div>
        </div>
    </div>
</nav>
    <slot />



</template>

<style>

</style>