/*
1.many ways we have for style in react,but here discuss about only three way to use css
    I. normal stylesheet , mean import style file
    II. inline style --> write in inline css 
    III. css with moudle --> it same as  style file , but some diffrence is
        file name is --> name.module.css
        using in component --> import style from './name.module.css
 */

import React from 'react'
import './style.css'
import style from './custom.module.css'

const Tut31 = () => {
  return (
    <div>
      <h2 className='first'>use css from import css file</h2>
      <h2 style={{color:"black",backgroundColor:"orange"}}>use css from from inline css </h2>
      <h2 className={style.second}>use css from import module.css file</h2>
    </div>
  )
}

export default Tut31
