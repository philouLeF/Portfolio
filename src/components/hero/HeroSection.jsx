export const HeroSection = () => {
  return (
    <div className="flex items-center gap-40">
      <div className="flex flex-col gap-4">
        <h1 className="text-7xl">
          I'm{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Jean-Pierre Smith
          </span>
        </h1>
        <p className="text-xl">
          <b>Apprenti React.</b> I’m a software developer that make thing on
          internet, very happy to see your here, place holder please fill
          something here please fill something here.
        </p>
      </div>
      <img
        width={300}
        height={300}
        src="/images/avatar.jpg"
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
};
