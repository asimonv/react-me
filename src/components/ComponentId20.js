import React from 'react'
import Image from './Image';
import Quote from './Quote';

const ComponentId20 = () => {
  return (
    <div>
      <p>Kisses, hugs, magic, deep gazes, moments all follow a stream.</p>
      <p>It's like they cannot longer sustain body chemistry.</p>
      <p>From emotions to memories. A human being, in another time-space.</p>
      <p>From oxytocin to electricity propapagation.</p>
      <Image src={`${process.env.PUBLIC_URL}/images/line.png`}/>
      <p>A fountain of love that refuses to get dry. No second chances.</p>
      <Quote title="Radiohead - No Surprises" content="A heart that's full up like a landfill. A job that slowly kills you. Bruises that won't heal."/>
      <p>An un-centered ego as a result of sharp sentences.</p>
    </div>
  )
}

export default ComponentId20;
