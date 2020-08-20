import React from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  //   const [title, setTitle] = React.useState<string>('')
  const ref = React.useRef<HTMLInputElement>(null)

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value)
  //   }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''

      //   console.log(title)
      //   setTitle('')
    }
  }

  return (
    <div className="input-field mt4 ">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter Todo Title"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Add Todo
      </label>
    </div>
  )
}
