import React from 'react'

const Button = ({title, id, leftIcon, rightIcon, containerClass}) => {
return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full !bg-blue-200 px-7 py-3 flex items-center ${containerClass}`}>
            {leftIcon}
            <span className='relative inline-flex overflow-hidden text-xs uppercase ml-2'>
                    <div>{title}</div>
            </span>
            {rightIcon}
    </button>
)
}

export default Button