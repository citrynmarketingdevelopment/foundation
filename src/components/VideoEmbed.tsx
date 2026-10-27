'use client';
import {useState} from 'react';
import Image from 'next/image';
export function VideoEmbed({src,title}:{src:string;title:string}){
 const [playing,setPlaying]=useState(false);
 return <div className="native-video">{playing?<iframe src={src.replace('www.youtube.com','www.youtube-nocookie.com')+(src.includes('?')?'&':'?')+'autoplay=1'} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen/>:<button type="button" aria-label={`Play ${title}`} onClick={()=>setPlaying(true)}><Image src="/assets/kern-general-construction-video.jpg" alt={title} fill sizes="(max-width:767px) 90vw, 540px"/><span aria-hidden="true">▶</span></button>}</div>;
}
