import {
  AboutComponent,
  ContactComponent,
  Hero,
  WorksComponent,
  StarsCanvas
} from "./components";

export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <AboutComponent />
        <WorksComponent />
        <div className="relative z-0">
          <ContactComponent />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}
