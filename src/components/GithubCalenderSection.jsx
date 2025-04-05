import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

const GithubCalendarSection = () => {
  return (
    <div className="text-white p-4 bg-black rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar
        username="codexkunal"
        blockSize={15}
        blockMargin={5}
        color="#0bd"
        fontSize={14}
      />
    </div>
  );
};

export default GithubCalendarSection;
