import React from 'react'
import {abbreviateNumber} from "js-abbreviation-number"
import { Link } from 'react-router-dom'
import {MdCheckCircle} from "react-icons/md"
import VideoLength from '../shared/videoLength'

function VideoCard({video}) {
  
  
  return (
    <Link to={`/video/${video?.videoId}`}>

      <div className='flex flex-col mb-8'>

        <div className='relative h-80 md:h-44 md:rounded-xl overflow-hidden'>
          <img className='h-full w-full object-cover' 
          src={video?.thumbnails?.[0]?.url} alt="video"
          />
        {video?.lengthSeconds && (
          <VideoLength time={video.lengthSeconds}/>
        )}
        </div>

        <div className="flex text-white mt-3">
          <div className="flex items-start" >
          <div className="flex h-9 w-9 rounded-full overflow-hidden" >
            <img  className='h-full w-full object-cover' src={video?.author?.avatar[0]?.url} alt="avatar" />
          </div>
          </div>

          <div className="flex flex-col ml-3 overflow-hidden">
            <div className="flex justify-between">
            <span className='text-sm font-bold line-clamp-2'>{video?.title || "N/A"}</span>
            <span className='ml-3 cursor-pointer'>:</span>
            </div>

              <span className='text-xs font-semibold mt-2 text-white/[0.7] flex items-center'>
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <MdCheckCircle className='text-white/[0.5] text-[12px] ml-1'/>
              )}
              </span>
              

          <div className='flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
          <span>{`${abbreviateNumber(video?.stats?.views || video?.stats?.viewers, 2)} views`}</span>
            <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1'>.</span>
            <span>{video?.publishedTimeText || 'N/A'}</span>
          </div>

          </div>

        </div>

      </div>
    </Link>
    )
} 

export default VideoCard