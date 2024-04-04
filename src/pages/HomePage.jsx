import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero
        title="X-RAY"
        subtitle="The one stop solution for every Ad-server"
      />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
