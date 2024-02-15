import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import PostSQL from '../assets/PostgreSQL.png';

export const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-white '>
      {/* Container */}
      <div className='max-w-4xl mx-auto p-8 flex flex-col justify-center h-full'>
        <div className='text-center'>
          <p className='text-5xl font-bold mb-4 border-b-4 border-orange-600 inline-block'>Skills</p>
          <p className='py-4 text-lg'>These are the technologies I've worked with.</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
          {/* HTML */}
          <div className='hover:scale-110 transition duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          {/* CSS */}
          <div className='hover:scale-110 transition duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>
          {/* JavaScript */}
          <div className='hover:scale-110 transition duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
            <p className='my-4'>JavaScript</p>
          </div>
          {/* React */}
          <div className='hover:scale-110 transition duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
            <p className='my-4'>React</p>
          </div>
          {/* Node */}
          <div className='hover:scale-110 transition duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='Node.js icon' />
            <p className='my-4'>Node.js</p>
          </div>
          {/* PostgresSQL */}
          <div className='hover:scale-110 transition duration-500'>
            <img className='w-20 mx-auto' src={PostSQL} alt='PostgreSQL icon' />
            <p className='my-4'>PostgreSQL</p>
          </div>
          {/* Tailwind */}
          <div className='hover:scale-110 transition duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind CSS icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          {/* Firebase */}
        
          <div className='hover:scale-110 transition duration-500'>
            <img className='w-20 mx-auto' src={FireBase} alt='Firebase icon' />
            <p className='my-4'>Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};
