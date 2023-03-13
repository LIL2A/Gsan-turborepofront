interface props {
  text: string
}


export const InputCheckbox = ({ text }: props) => {
  return (
    <div>
      <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
      <label className="cursor-pointer select-none" htmlFor="remember-me">{text}</label>
    </div>
  )
}

