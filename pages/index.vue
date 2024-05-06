<template>
<div class="flex flex-col">
    <a href="/createpost" class="flex size-[5rem]">
      <div class="h-[3rem] w-[3rem] mt-[1rem] ml-[1rem] rounded-full bg-sky-800 bg-opacity-[5%] border border-gray-300 flex items-center justify-center cursor-pointer hover:border-sky-400 duration-200 transition-all ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
      </div>
    </a>

    <div class="flex justify-center items-center h-full w-full">
      <PostCard 
      Username="Max Mustermann"
      Content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum fugit explicabo obcaecati hic natus in, dolorum maiores animi ipsa ut doloremque nihil nulla eius est deleniti molestiae. Veritatis, ad quibusdam?"
      FirstName="Max"
      LastName="Mustermann"
      />
    </div>
  </div>
</template>
