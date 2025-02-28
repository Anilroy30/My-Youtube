import React from 'react'
import Button from './Button'

// const list=[
//   "All",
//   "Music",
//   "Live",
//   "Gaming",
//   "News",
//   "Sports",
//   "Movies",
//   "Cooking",
//   "Fashion",
//   "Learning",
//   "Shorts",
//   "Soccer"
// ]
const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Music"/>
        <Button name="Live"/>
        <Button name="Gaming"/>
        <Button name="News"/>
        <Button name="Sports"/>
        <Button name="Movies"/>
        <Button name="Cooking"/>
        <Button name="Fashion"/>
        <Button name="Learning"/>
        <Button name="Shorts"/>
        <Button name="Soccer"/>
    </div>
  )
}

export default ButtonList