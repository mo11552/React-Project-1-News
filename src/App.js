import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { NewsContextProvider } from './NewsContext';

function App() {
  return (
    <NewsContextProvider>
      <div>Hello from app</div>
    </NewsContextProvider>
  );
}

export default App