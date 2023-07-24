import { Form } from '../components/todoForm.jsx'
import { List } from '../components/todoList'
import Nav from '../components/todoNav.jsx'

const Main = () => {
  return (
    <>
      <Nav />
      <Form />
      <List />
    </>
  )
}

export default Main