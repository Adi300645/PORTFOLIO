import React from 'react'

function BigProjectCard() {
  return (
    <div class="bg-white dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded shadow p-3 flex xl:flex-row flex-col xl:w-[80rem] ">
    <div class="xl:w-[60rem] w-[38rem] xl:h-[42rem] h-[20rem] bg-gray-200 flex items-center justify-center dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded dark:shadow-xl">
        <div class="text-gray-500 inner_text_shadow font-semibold">IMAGE</div>
    </div>
    <div class="p-4 flex flex-col">
        <div class="text-xl font-semibold text-gray-800 dark:text-white">Project Name</div>
        <div class="text-gray-600 dark:text-[#aaa]">Sub text</div>
    </div>
</div>
  )
}

export default BigProjectCard