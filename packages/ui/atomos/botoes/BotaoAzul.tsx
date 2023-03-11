interface Props {
  texto: string;
}

export const BotaoAzul = ({ texto }: Props) => {
  return (
    <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">{texto}</button>
  );
};

 