const fields = [
    {
      label: "Job Title",
      placeholder: "Enter Job Title",
      options: [
        "Designer", "Developer", "Product Manager", 
        "Marketing Specialist", "Data Analyst", 
        "Sales Executive", "Content Writer", 
        "Customer Support"
      ],
    },
    {
      label: "Company",
      placeholder: "Enter Company Name",
      options: [
        "Google", "Microsoft", "Meta", 
        "Netflix", "Adobe", "Facebook", 
        "Amazon", "Apple", "Spotify"
      ],
    },
    {
      label: "Experience",
      placeholder: "Enter Experience Level",
      options: ["Entry Level", "Intermediate", "Expert"],
    },
    {
      label: "Job Type",
      placeholder: "Enter Job Type",
      options: ["Full Time", "Part Time", "Contract", "Freelance", "Internship"],
    },
    {
      label: "Location",
      placeholder: "Enter Job Location",
      options: [
        "Delhi", "New York", "San Francisco", 
        "London", "Berlin", "Tokyo", 
        "Sydney", "Toronto"
      ],
    },
    {
      label: "Salary",
      placeholder: "Enter Salary",
      options: ["10 LPA", "15 LPA", "20 LPA", "25 LPA", "30 LPA", "35 LPA", "40 LPA", "45 LPA"],
    },
  ];
  
  const content = `
  <h4>About The Job</h4>
  <p>Provide an overview of the job role, including the key responsibilities and objectives. Highlight the purpose of the position within the company.</p>
  
  <h4>Responsibilities</h4>
  <ul>
    <li>Define and document the primary duties expected of the candidate.</li>
    <li>Outline daily tasks and long-term goals for the role.</li>
  </ul>
  
  <h4>Qualifications and Skill Sets</h4>
  <ul>
    <li>Specify the educational qualifications and certifications required.</li>
    <li>List technical and soft skills essential for success in the role.</li>
    <li>Include any preferred qualifications or experience.</li>
  </ul>
  `;
  
  export { fields, content };
  