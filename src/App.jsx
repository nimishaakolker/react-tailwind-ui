
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

function App() {
  const users = [
    {
      img : "https://plus.unsplash.com/premium_photo-1661660092463-d2aff6452af5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      color : "royalblue",
      tag : "Satisfied"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1661722273422-8d1723e8f905?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      color : "pink",
      tag : "Undeserved"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1661665318707-d681aa75e137?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      color : "orange",
      tag : "Underbanged"
    },
        {
      img : "https://plus.unsplash.com/premium_photo-1661722355330-f66f49037e2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1310",
      color : "",
      tag : "Satisfied"
    },
        {
      img : "https://plus.unsplash.com/premium_photo-1661542463659-1597014336b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
      color : "",
      tag : "Satisfied"
    },
  ]
  return (
    <>
    <Section1 users={users}/>
    <Section2/>
    </>
  )
}

export default App
