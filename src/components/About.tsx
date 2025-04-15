import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          /> */}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text ">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4 text-center">
                We've 7+ yrs of experience as a Media Professional & B2B lead generation expert on LinkedIn, We manage the entire process end-to-end, so you can focus entirely on closing deals. Our proven strategies ensure quick results and a steady stream of ready-to-convert leads.
                Scaling your sales pipeline has never been this simple—or affordable.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
