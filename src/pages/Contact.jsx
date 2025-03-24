import React, { useState, useRef, Suspense } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';
import {Canvas, useThree} from '@react-three/fiber';
import { Html } from '@react-three/drei';

import Loader from '/src/components/Loader.jsx';
import Fox from '../models/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const ResponsiveFox = ({ currentAnimation }) => {
  const { viewport } = useThree();
  
  // Calcula una escala dinámica basada en el viewport
  const calculatedScale = Math.min(0.5, viewport.width / 12);
  
  return (
    <Fox
      currentAnimation={currentAnimation}
      position={[0.5, 0.4, 0]}
      rotation={[12.6, -0.7, 0]}
      scale={[calculatedScale, calculatedScale, calculatedScale]}
    />
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Edwin",
        from_email: form.email,
        to_email: "soyedwincabrera@hotmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      //TODO: Show success message
      showAlert({text: 'Message sent succesfully!', type: 'success' });
      //TODO: Hide an alert

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')        
        setForm({ name: '', email: '', message: '' });
      }, 3000)
      
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error);
      //TODO: Show error message
      showAlert({ text: "I didn't receive your message", type: 'danger' });
    })
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && < Alert {...alert} />}
      
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="youremail@email.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={9}
              className="textarea"
              placeholder="Let me know if we can work together!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn "
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      
      <div className='lg:w-3/2 w-full lg:h-auto md:h-[700px] h-[400px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>                        
            <Fox
              currentAnimation={currentAnimation}
              position={[0.2, 0.4, 0.5]}
              rotation={[12.6, -0.5, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
};

export default Contact;