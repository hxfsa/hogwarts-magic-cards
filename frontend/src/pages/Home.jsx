import Hero from "../components/Home/Hero";
import DisplayHouses from "../components/Home/DisplayHouses";

export default function Home() {
  return (
    <section className="flex flex-col items-center space-y-8">
      <Hero />
      <DisplayHouses />
      <div className="flex flex-col justify-center item-start w-full md:max-w-[1290px] space-y-8">
        <h2 className="text-xl">How to play the game</h2>
        <p>
          Hogwarts Magic Cards is a strategy turn by turn card game set in the
          world of Harry Potter. Select your House and Wizard to take part in an
          epic 1v1 battle.
        </p>
        <div>
          <p>
            Step 1: Select the house you want to fight with, the character
            you'll be able to select will depend of your house's choice.
          </p>
          <p>Step 2: Pick your favorite wizard and be ready to fight !</p>
          <p>Step 3: test</p>
          <p>Step 4: test</p>
        </div>
      </div>
    </section>
  );
}
