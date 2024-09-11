import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradiant-to-r from-black">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-m w-1/4">{overview}</p>
        <div>
            <button className="bg-white text-black p-2.5 px-12 text-lg rounded-lg hover:bg-opacity-50">▶️Play</button>
            <button className="bg-gray-500 text-black p-2.5 px-12 mx-2 text-lg bg-opacity-50 rounded-lg">info More Info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
