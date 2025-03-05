import React from 'react'

function card() {
  return (
    <div>
        <h1 class="text-2xl mb-6 text-lime-400">Card Design</h1>
        <div class="grid grid-cols-3 gap-4">
            <div class="bg-amber-600 p-14 rounded-md">
              card-1
            </div>
            <div class="bg-green-400 p-14 rounded-t-[20px] rounded-b-2xl">
              card-2
            </div>
            <div class="bg-linear-to-r from-cyan-500 to-blue-500 p-14 ">
              card-3
            </div>
        </div>
    </div>
  )
}

export default card