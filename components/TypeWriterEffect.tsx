"use client";
import React from 'react'
import TypeWiter from 'typewriter-effect'
type Props = {}

const TypeWriterEffect = (props: Props) => {
  return (
    <TypeWiter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString(`Supercharged Fast Ai Assistant.`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(` Easy to use.`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`  Fast.`)
            .pauseFor(2000)
            .deleteAll()
            .typeString( ` Powerful.`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`✨ Intuitive.`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`Loved by many.`)
            .pauseFor(2000)
            .deleteAll()
            .start()
      }
        
      }
    />
    )
}

export default TypeWriterEffect