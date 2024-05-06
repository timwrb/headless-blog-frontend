<template>
    <a href="/" class="flex size-[5rem]">
      <div class="mt-[1rem] ml-[1rem] rounded-full h-[3rem] w-[3rem] bg-sky-800 bg-opacity-[5%] border border-gray-300 flex items-center justify-center cursor-pointer hover:border-sky-400 duration-200 transition-all ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
      </div>
    </a>

<section class="flex w-[1/2] h-full justify-center mt-[4rem]">
    <div class="w-[42rem] rounded-[1rem] border border-gray-300 bg-sky-800 bg-opacity-[1%] p-4">
        <div class="flex flex-col gap-4">

            <div>
                <h1 class="font-semibold text-[1.5rem] px-8 mt-2">Post Erstellen</h1>
            </div>

            <div class="flex flex-row w-full px-8 gap-4 mt-4">
                <input 
                placeholder="Vorname..."
                v-model="inputFirstName"
                class="pl-2 rounded-[1rem] border border-gray-300 focus:border-sky-400 focus:border-2 focus:outline-none w-full h-[2.5rem]"
                />
                <input 
                placeholder="Nachname...."
                v-model="inputLastName"
                class="pl-2 rounded-[1rem] border border-gray-300 focus:border-sky-400 focus:border-2 focus:outline-none w-full"
                />
            </div>
            <div class="px-8">
                <textarea 
                placeholder="Inhalt..."
                v-model="inputContent"
                class="pl-2 pt-2 rounded-[1rem] border border-gray-300 focus:border-sky-400 focus:border-2 focus:outline-none w-full h-[12rem] resize-none"
                />
            </div>

            <div class="px-8">
                <button
                class="w-[8rem] h-[2rem] rounded-[1rem] border border-gray-300 hover:border-sky-400 hover:border-2"
                @click="handleSubmit()">
                Erstellen
                </button>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>

const inputFirstName = ref('');
const inputLastName = ref('');
const inputContent = ref('');

const handleSubmit = () => {
    console.log(inputFirstName.value);
    console.log(inputLastName.value);
    console.log(inputContent.value);

    const post = {
        FirstName: inputFirstName.value,
        LastName: inputLastName.value,
        Content: inputContent.value
    }

    fetch('http://seminar-backend.test/post-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
}

</script>