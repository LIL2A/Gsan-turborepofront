interface Props {
  texto: string;
}

export const BotaoAzul = ({ texto }: Props) => {
  return (
    <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" >{texto}</button>
  );
};

export const BotaoBranco = ({texto} :Props) => {
  return (
    <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">{texto}</button>
  )
}
