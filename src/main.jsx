import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import ListedBooks from './components/ListedBooks';
import PagesToRead from './components/PagesToRead';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed-books",
        // loader: ()=> fetch('booksData.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pagesToRead",
        loader: ()=> fetch('booksData.json'),
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/bookDetails/:id",
        loader: ()=> fetch('booksData.json'),
        element: <BookDetails></BookDetails>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
