// import { useState } from 'react'
// import { useRoutes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import './App.css'

function App() {
  return (
    <>
      <div className="bg-base-100">
      <SnackbarProvider autoHideDuration={2000}>
        <h1 className="text-3xl font-bold underline text-blue-500">
          Hello world!
        </h1>
      </SnackbarProvider>
      </div>
    </>
  )
}

export default App
