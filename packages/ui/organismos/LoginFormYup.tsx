import { useForm, SubmitHandler } from "react-hook-form";
import {
    BotaoAzul,
    BotaoBranco,
    InputCheckbox,
  
  } from "ui";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


type Inputs = {
    email: string,
    senha: string

};

const LoginFormYup = () => {

    const validarPost = yup.object({
        email: yup.string().email('por favor, insira um formato de email válido').required('esse campo é obrigatório'),
        senha: yup.string().min(6, 'No minimo 6 caracteres').required('esse campo é obrigatório')
    })

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(validarPost)
    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);





    return (
        <form className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0" onSubmit={handleSubmit(onSubmit)}>
            <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                    Login
                </h2>
                <div className="intro-x mt-8">
                    <input type="text"
                        className="intro-x login__input form-control py-3 px-4 block mt-4"
                        placeholder="Email"  {...register("email")} />
                    <p className="text-danger mt-2">{errors.email?.message}</p>
                    <input type="password"
                        className="intro-x login__input form-control py-3 px-4 block mt-4"
                        placeholder="Senha"  {...register("senha")} />
                    <p className="text-danger mt-2">{errors.senha?.message}</p>

                    <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                        <div className="flex items-center mr-auto">
                            <InputCheckbox text='Lembrar-me' />
                        </div>

                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <BotaoAzul texto="Login" />
                    </div>
                </div>
            </div>
        </form>)
}

export default LoginFormYup