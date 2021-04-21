
export const engineerSkills = {
  name: 'My skill set includes: ',
  value:'skillSet',
  choices: [
    'Graph Database',
    'Machine Learning',
    'React Libraries',
    'Testing',
    'CI/CD',
    'Mobile Development',
    'Authentication',
    'CSS',
    'GIT and Debugging',
    'Other'
  ]
}


export const engineerTech = {
  name: 'I am comfortable with the following technologies: ',
  value: 'techs',
  choices: [
    'React',
    'Node',
    'Passport',
    'SQL',
    'NEO4',
    'NextJs',
    'Gatsby',
    'Typescript',
    'JSON',
    'Python',
    'Other',
  ]
}



export const bootcamps = {
name: 'What bootcamp did you attend?',
value: 'bootcamp',
choices: [
  'App Academy',
  'Career Foundery',
  'Flatiron School',
  'General Assembly',
  'Iron Hack',
  'Kenzie Academy',
  'Lambda School',
  'Microverse',
  'Nucamp',
  'Springboard',
  'Other',
]
}

export const helpOptions =  {
  name: 'I would love to help with',
  value: 'helpWith',
  choices:[ 
    '1:1 Mentoring',
    'Group Presentations',
    'Sprint Planning',
    'Lightning talk (Pres.)',
    'Lightning talk (Aud.)',
    'Interview Prep']
};

export const helpDates = {
  name: 'I am available to help out: ',
  value: 'availDates',
  choices: [
    'Monthly',
    'Weekly',
    'Bi-Weekly',
    'Daily',
    'Sporadically'
  ]
}

export const firstFields = [
  engineerSkills,
  engineerTech,
]

export const secondFields = [
  bootcamps,
]

export const mentorFields = [
  helpOptions,
  helpDates
]