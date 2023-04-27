import {FormProps, InputProps} from "react-html-props";


type MyFormProps = FormProps
type MyInputProps = InputProps

function Input (props: MyInputProps) {
    return (
        <>
            <input {...props} />
        </>
    )
}

export function Form (props: MyFormProps) {
    return (
        <>
            <form {...props}>
                <div className="rounded-lg px-4 py-6">
                    <Input name='infosure' className="w-full text-gray-700 bg-gray-200 border border-gray-400 rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  />
                    <Input type='submit' className="w-full text-center py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1" value='Verifiez !' />
                </div>
            </form>
        </>
    )
}