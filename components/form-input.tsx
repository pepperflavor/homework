import { error } from 'console'

interface FormInputProps {
  type: string
  placeholder: string
  required: boolean
  errors: string[]
  name: string
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
  name,
}: FormInputProps) {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center relative">
        <input
          className="rounded-2xl w-full bg-transparent h-10 ring-1 focus:-outline-offset-2 focus:outline-slate-300 focus:outline-1 ring-slate-300 border-none pl-10"
          type={type}
          placeholder={placeholder}
          required={required}
          name={name}
        />
        {errors?.map((error, index) => (
          <div
            key={index}
            className="text-red-500 font-m w-full mt-2 font-bold"
          >
            {error}
          </div>
        ))}
      </div>
    </>
  )
}
