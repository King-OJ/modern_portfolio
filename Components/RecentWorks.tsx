import { Badge } from "./ui/badge";

function RecentWorks() {
  type WorkProps = {
    company: string;
    role: string;
    startDate: Date;
    endDate?: Date;
  };

  const date = Date.now();

  const works: Array<WorkProps> = [
    {
      company: "Fiverr",
      role: "Frontend Developer",
      startDate: new Date(date),
    },
    {
      company: "Upwork",
      role: "FullStack Developer",
      startDate: new Date("Jul 12 2022"),
    },
    {
      company: "LinkedIn",
      role: "Freelancer Developer",
      startDate: new Date("Jul 12 2020"),
    },
  ];

  return (
    <section className="bg-muted px-6 py-10 rounded-xl border h-full">
      <div className="flex items-center space-x-2">
        <Badge className="p-[2px] bg-accent-foreground" />
        <h3 className="text-accent-foreground font-semibold">Recent Works</h3>
      </div>

      <div className="mt-8">
        <ul className="space-y-6 md:space-y-8">
          {works.map((work, index) => {
            return (
              <li key={index} className="flex items-center justify-between">
                <div className="space-y-2">
                  <h6
                    className={
                      index == 0
                        ? "text-primary text-sm font-bold sm:text-base sm:font-semibold"
                        : "text-sm font-bold sm:text-base sm:font-semibold"
                    }
                  >
                    {work.role}
                  </h6>
                  <p className="text-accent-foreground text-sm">
                    {work.startDate.getFullYear()} -{" "}
                    {work.endDate ? work.endDate.getFullYear() : "Present"}
                  </p>
                </div>
                <div className="text-accent-foreground">{work.company}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default RecentWorks;
