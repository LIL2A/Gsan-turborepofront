import Link from "next/link";
import {
  BotaoAzul,
  BotaoBranco,
  InputCheckbox,
  InputLoginTeam2
} from "ui";

const LoginForm = () => {
  return (
    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
      <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
        <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
          Login
        </h2>
        <div className="intro-x mt-8">
            <InputLoginTeam2 type="text" placeholder="Insira seu usuário" />
            <InputLoginTeam2 type="password" placeholder="Insira sua senha" />

          <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
            <div className="flex items-center mr-auto">
              <InputCheckbox text="Lembrar me" />
            </div>
            <Link href="/ResetSenha">Esqueceu a senha?</Link>
          </div>
          <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <Link href="/Dashboard">
              <BotaoAzul texto="Login" />
            </Link>
            <BotaoBranco texto="Registrar-se" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;