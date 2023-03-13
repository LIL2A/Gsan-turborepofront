

interface BotaoAzulTeamBProps{

    texto : string

}

export const BotaoAzulTeamB = ({ texto }: BotaoAzulTeamBProps) => {
    return (
      <button className="BotaoAzul btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" >{texto}</button>
    );
  };