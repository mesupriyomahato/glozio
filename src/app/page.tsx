"use client"
import Gloziotag from "@/components/molecules/gloziotag/gloziotag";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { relative } from "path";
import { useState, useEffect, useRef } from 'react';
import AnimatedText from "@/components/atoms/ui/effects/animatedtext/animatedtext";

export default function Home() {
  const triggerElement = useRef(null)
  const slider = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
      },
      // x: "200",
      rotation: 20,
      duration: 3
    })
  }, [])


  const textArray = [
    'We',
    'are',
    'on',
    'a',
    'quest',
    'to',
    'reshape',
    'the',
    'future',
    'of',
    'education',
  ];


  return (
    <>
      <Gloziotag />
      <div style={{ minHeight: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div
          ref={slider}
        >
          <img style={{ height: '40rem' }} ref={triggerElement} src="https://i.scdn.co/image/ab6761610000e5ebe1e00861cdb6bf56b14a1118" />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ minHeight: '100vh', maxWidth: '40rem' }}>
          <AnimatedText text={textArray} />
        </div>
      </div>

    </>
  );
}
