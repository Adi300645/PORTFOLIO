import React from 'react'

function PhotoCard({projectName}) {
  return (
    <div class="bg-white shadow p-3 m-0 flex dark:bg-transparent dark:backdrop-blur dark:border-[0.5px] reveal dark:border-[#aaa6]">
        <div class="w-[38rem] h-[18rem] bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:shadow-xl dark:border-[0.5px] dark:border-[#aaa3] dark:rounded flex items-center justify-center">
            <div class="text-gray-500 inner_text_shadow font-semibold">{projectName}</div>
        </div>
    </div>
  )
}

export default PhotoCard