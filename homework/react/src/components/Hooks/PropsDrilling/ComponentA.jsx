import React, { createContext, useContext } from 'react';
import ComponentB from "./ComponentB";
import { ThemeContext } from '../../context/ThemeContext';  // Ensure you import ThemeContext

export const TitleContext = createContext();

function ComponentA() {
  const { theme } = useContext(ThemeContext);  // Now you have access to theme

  return (
    <div className='box'>
      <h1 style={{ color: theme.syntax }}>Component A</h1> {/* Using theme syntax here */}
      <TitleContext.Provider value={{ title: "Hello MT", color: "red" }}>
        <ComponentB />
      </TitleContext.Provider>
    </div>
  );
}

export default ComponentA;
