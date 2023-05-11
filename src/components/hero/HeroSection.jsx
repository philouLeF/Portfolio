import { FULL_NAME } from "../../lib/config";

export const HeroSection = () => {
  return (
    <div className="relative m-auto flex max-w-4xl flex-col items-center md:flex-row">
      <div className="flex flex-col items-center gap-4 md:relative md:mr-16">
        <h1 className="text-left text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] md:text-8xl">
          Hello ! Moi c'est <br></br>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent">
            {FULL_NAME}
          </span>
        </h1>
        <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)]">
          Développeur junior dans l'écosystème <b>React</b>.<br></br>
          J'aime créer des choses <b>jolies</b> et <b>utiles</b>.
        </p>
      </div>
    </div>
  );
};
