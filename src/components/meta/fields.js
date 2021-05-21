export const whyJoin = {
	name: "Tell us why you'd like to join theCOOP",
	value: "why_join",
	choices: ["Skillbuilding", "Mentorship", "Interview and Portfolio Help"],
};

export const candidatePath = {
	name: "I am a(n)",
	value: "role",
	choices: ["Engineer", "Designer", "Data Scientist", "Mentor"],
};

export const engineerSkills = {
	name: "My skill set includes",
	value: "engineer_skillset",
	choices: [
		"Graph Database",
		"Machine Learning",
		"React Libraries",
		"Testing",
		"CI/CD",
		"Mobile Development",
		"Authentication",
		"CSS",
		"GIT and Debugging",
		"Other",
	],
};

export const engineerTech = {
	name: "I am comfortable with the following technologies",
	value: "engineer_techs",
	choices: [
		"React",
		"Node",
		"Passport",
		"SQL",
		"NEO4",
		"NextJs",
		"Gatsby",
		"Typescript",
		"JSON",
		"Python",
		"Other",
	],
};

export const designerSkills = {
	name: "My skillset includes",
	value: "design_skillset",
	choices: [
		"User Research",
		"Interaction Design",
		"Design Systems",
		"Information Architecture",
		"UI / Visual Design",
		"UX Strategy",
		"Other",
	],
};

export const designerTech = {
	name: "I would like to focus in",
	value: "design_techs",
	choices: [
		"Clickable Prototyping",
		"Interactive Prototyping",
		"Lean Methodologies",
		"Sketching / Paper Prototyping",
		"HTML/CSS",
		"Usability Testing",
		"User Flows",
		"Synthesizing and Insights",
		"Other",
	],
};

export const dataSciSkills = {
	name: "I'm most comfortable with",
	value: "data_sci_skillset",
	choices: [
		"Python",
		"R Programming",
		"Hadoop Platform (or Similar)",
		"SQL Databases",
		"Machine Learning",
		"AI",
		"Data Visualization",
		"Business Intelligence Tools (i.e. tableau)",
		"Synthesizing Data",
		"Unstructured Data",
	],
};

// export const dataSciTechs = {
//   name: '',
//   value: '',
//   choices: []
// }

export const bootcamps = {
	name: "Which bootcamp did you attend?",
	value: "bootcamps",
	choices: [
		"App Academy",
		"Career Foundery",
		"Flatiron School",
		"General Assembly",
		"Iron Hack",
		"Kenzie Academy",
		"Lambda School",
		"Microverse",
		"Nucamp",
		"Springboard",
		"Other",
	],
};

export const helpOptions = {
	name: "I would love to help with",
	value: "help_with",
	choices: [
		"1:1 Mentoring",
		"Group Presentations",
		"Sprint Planning",
		"Lightning talk (Pres.)",
		"Lightning talk (Aud.)",
		"Interview Prep",
	],
};

export const helpDates = {
	name: "I am available to help out",
	value: "avail_dates",
	choices: ["Monthly", "Weekly", "Bi-Weekly", "Daily", "Sporadically"],
};

export const pronouns = {
	name: "Pronouns",
	value: "pronouns",
	choices: ["She, Her, Hers", "He, Him, His", "They, Them, Theirs"],
};

export const paths = [candidatePath];

export const pronounField = [pronouns];

export const firstFields = [engineerSkills, engineerTech];

export const designFields = [designerSkills, designerTech];

export const dataSciFields = [dataSciSkills];

export const secondFields = [bootcamps];

export const mentorFields = [helpOptions, helpDates];
