import Navbar from "../components/navbar";
import HeadingDropdown from "../components/heading-dropdown";
import { ProgressbarGroup } from "../components/progressbar-group";
import styles from "./top-skills.module.css";

import {
  NAVBAR_LOGO_PATH,
  NAVBAR_TITLES,
  NAVBAR_TITLES_URL,
} from "@/app/utils/constants";

export default function TopSkills() {
  const jobTitleDDHeading: string = "Job Title";
  const jobTitleDDItems: string[] = [
    "Select All",
    "Data Engineer",
    "Data Scientist",
    "Data Analyst",
    "Senior Data Engineer",
    "Senior Data Scientist",
    "Senior Data Analyst",
    "Business Analyst",
    "Software Engineer",
    "Machine Learning Engineer",
    "Cloud Engineer",
  ];

  const countryDDHeadling: string = "Country";
  const countryDDItems: string[] = [
    "Select All",
    "United States",
    "India",
    "China",
    "Japan",
    "United Kingdom",
    "Germany",
    "South Korea",
    "Canada",
    "France",
    "Israel",
    "Russia",
    "Australia",
    "Brazil",
    "Netherlands",
    "Sweden",
  ];

  const progressBarsTitle: string[] = [
    "Python",
    "AWS",
    "SQL",
    "R",
    "Spark",
    "Tableu",
    "Java",
    "Power B",
  ];

  const progressBarsValues: number[] = [
    55.46, 54.4, 24.8, 21.0, 20.0, 17.8, 14.9, 13.1,
  ];

  return (
    <main>
      <Navbar
        imagePath={NAVBAR_LOGO_PATH}
        navbarTtles={NAVBAR_TITLES}
        titleUrls={NAVBAR_TITLES_URL}
      />
      <div className={styles.centre_div}>
        <h1 className="fw-bold">🛠️ Top Skills for Data Nerds 🤓</h1>
        <div
          className="row align-items-start"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <div className="col">
            <HeadingDropdown
              heading={jobTitleDDHeading}
              dropdownItems={jobTitleDDItems}
            />
          </div>
          <div className="col">
            <HeadingDropdown
              heading={countryDDHeadling}
              dropdownItems={countryDDItems}
            />
          </div>
        </div>
        <div style={{ marginTop: "50px", marginBottom: "10px" }}>
          <ProgressbarGroup
            titles={progressBarsTitle}
            values={progressBarsValues}
          />
        </div>
      </div>
    </main>
  );
}
