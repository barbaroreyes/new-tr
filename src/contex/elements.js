import React ,{createContext , useState , useEffect} from 'react'

const ElementContext = createContext()

const ElementsProvider = ({children}) => {
    const [element ,setElemet] = useState([])

useEffect(()=>{
    fechElement()
},[])



    const fechElement = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setElemet(data);
        console.log(data, 'data in context') 
    }
  return (
    <ElementContext.Provider value={element}>
      {children}
    </ElementContext.Provider>
  )
}

export {ElementContext,ElementsProvider}


