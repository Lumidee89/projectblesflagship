import Feed from '@components/Feed';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Enjoy our Free AI Powered tool.
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">
          Generate Project Management Files and Pitch Deck for free
        </span>
      </h1>
      <p className="desc text-center">
        Bles Flagship Asset is an open sourced AI powered tool that helps you
        generate project management files and get a pitch deck for free. We
        offer this service for $1,550 but we are giving it for free
      </p>

      <Feed />
    </section>
  );
};

export default Home;
