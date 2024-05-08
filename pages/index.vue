<script setup>

const fetchedData = ref();
const FetchedAmount = ref(0);

const selectedPost = ref(null);

watch(selectedPost, (newValue) => {
  console.log(newValue);
});

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8000/blogs/all');
    const data = await response.json();
    console.log(data);

    const newDataArray = data.data.map(post => ({
      id: post.id,
      username: post.user.name,
      user_id: post.user.id,
      email: post.user.email,
      title: post.title,
      sub_title: post.sub_title,
      status: post.status,
      body: post.body,
      categories: post.categories.map(category => category.name)
    }));

    console.log(newDataArray);
    fetchedData.value = newDataArray;
    FetchedAmount.value = newDataArray.length;
  } catch (error) {
    console.error('Fehler beim laden:', error);
  }

};

onMounted(fetchData);


</script>

<template>  
<div class="z-[-10] bgimage h-screen ">
  <!-- <div class="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> -->

  <div class="flex flex-row">
<div class="flex flex-col">

    <div class="flex ml-[4rem]">

<div class="w-[36rem] mt-4">
  <div class="flex justify-between items-center pr-10">
      <h1 class="text-[1.5rem] font-semibold mb-1">Feed</h1>
    <div>
      <div v-if="FetchedAmount">
        <p>Ergebnisse: {{ FetchedAmount }}</p>
      </div>
      <div v-else>
        <p>Ergebnisse: ...</p>
      </div>
    </div>
      
  </div>
      <div class="w-[34rem] rounded-full bg-transparent mb-2"></div>
</div>

  </div>
  <div class="flex ml-[4rem]">
    <div class="flex gap-2 h-[40rem] w-[34rem] flex-col overflow-y-scroll">
      
      <template v-if="fetchedData">
      <PostCard
        v-for="(post, index) in fetchedData"
        @click="selectedPost = index"
        :key="post.id"
        :name="post.username"
        :user_id="post.user_id"
        :email="post.email"
        :tags="post.tags"
        :title="post.title"
        :id="post.id"
        :sub_title="post.sub_title"
        :status="post.status"
        :body="post.body"
        :category="post.categories[0]"
      />

    </template>
    <template v-else>
      <div class="w-full h-[6rem] flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-spin"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
      </div>
    </template>

      </div>
    </div>
  </div>
  <!----------------------------------------------->


    <section class="w-full mr-[4rem]">
      <div v-if="selectedPost !== null">
    <div class="w-full border border-gray-300 rounded-[1rem] p-8 mt-[4.1rem] bg-black bg-opacity-[2%] backdrop-blur-[0.5rem]">

      <div class="flex flex-col">

        <div class="flex flex-row justify-between">
          <h1 class="font-bold text-[1.5rem]">{{ fetchedData[selectedPost].title }}</h1>
          <div class="rounded-full border border-gray-300 w-8 h-8 flex items-center justify-center cursor-pointer hover:border-black" 
            @click="selectedPost = null">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          </div>
        </div>

        <div>
          <p class="font-medium text-[1.2rem]">{{ fetchedData[selectedPost].sub_title }}</p>
        </div>

        <div class="mt-4">
          <p v-html="fetchedData[selectedPost].body"></p>
        </div>

      </div>
    </div>
  </div>

    <div class="flex justify-center items-center h-full" v-else>
      <div class="flex justify-center items-center flex-col">
        <h1 class="font-bold text-[2rem]">Klicke einen Post an</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" /></svg>

      </div>



  </div>
</section>


</div>

</div>
</template>

<style scoped>
.bgimage {
  background-image: url('/images/4964089.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vh - 5rem);
  overflow: hidden; /* Scrollen deaktivieren */
}
</style>

