export interface InputBlockProps {
    text: string,
    value: string,
    setValue: (e: string) => void
}

const InputBlock = ({text, value, setValue}: InputBlockProps) => {
  return (
    <label>
        <div>{text}</div>
        <input type='number' value={value} onChange={e => setValue(e.target.value)} />
    </label>
  )
}

export default InputBlock