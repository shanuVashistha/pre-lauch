export const roles = [
    {
        label: "Design",
        slug: "design"
    },
    {
        label: "Software Engineering",
        slug: "software_engineering"
    },
    {
        label: "Developer Operations (DevOps)",
        slug: "developer_operations"
    },
    {
        label: "Data Analytics",
        slug: "data_analytics"
    },
    {
        label: "Quality Assurance (QA)",
        slug: "quality_assurance"
    },
    {
        label: "Product Management",
        slug: "product_management"
    },
    {
        label: "Engineering Management",
        slug: "engineering_management"
    }
];

export const experience = [
    {
        label: "Junior/Intern (0-2 years experience)",
        slug: "junior_intern",
        value: "0 to 2"
    },
    {
        label: "Mid-level (2-4 years experience)",
        slug: "mid_level",
        value: "2 to 4"
    },
    {
        label: "Senior/Staff (4-6 years experience)",
        slug: "senior_staff",
        value: "4 to 6"
    },
    {
        label: "Principal/Senior Staff (6-10 years experience)",
        slug: "principal_senior_staff",
        value: "6 to 10"
    },
    {
        label: "Distinguished/Fellow (10+ years experience)",
        slug: "distinguished_fellow",
        value: "10+"
    }
];

export const location = ['Washington D.C.', 'New York', 'Los Angeles', 'Toronto', 'London', 'Boston', 'SF Bay Area', 'Seattle'];

export const skills = [
    {
        label: "Visual Design",
        role: ["design"]
    },
    {
        label: "Product Design",
        role: ["design"]
    },
    {
        label: "UX Design",
        role: ["design"]
    },
    {
        label: "Figma",
        role: ["design"]
    },
    {
        label: "Wireframes",
        role: ["design"]
    },
    {
        label: "Interaction Design",
        role: ["design"]
    },
    {
        label: "Sketch",
        role: ["design"]
    },
    {
        label: "PostgreSQL",
        role: ["software_engineering"]
    },
    {
        label: "JavaScript",
        role: ["software_engineering", "quality_assurance"]
    },
    {
        label: "React",
        role: ["software_engineering"]
    },
    {
        label: "SQL",
        role: ["software_engineering", "data_analytics", "quality_assurance"]
    },
    {
        label: "Python",
        role: ["software_engineering", "developer_operations", "data_analytics"]
    },
    {
        label: "TypeScript",
        role: ["software_engineering"]
    },
    {
        label: "Java",
        role: ["software_engineering", "quality_assurance"]
    },
    {
        label: "CSS",
        role: ["software_engineering"]
    },
    {
        label: "HTML",
        role: ["software_engineering"]
    },
    {
        label: "Git",
        role: ["software_engineering", "developer_operations", "quality_assurance"]
    },
    {
        label: "Docker",
        role: ["software_engineering", "developer_operations"]
    },
    {
        label: "AWS",
        role: ["software_engineering", "developer_operations"]
    },
    {
        label: "MySQL",
        role: ["software_engineering"]
    },
    {
        label: "C++",
        role: ["software_engineering"]
    },
    {
        label: "DevOps",
        role: ["developer_operations"]
    },
    {
        label: "Ansible",
        role: ["developer_operations"]
    },
    {
        label: "Terraform",
        role: ["developer_operations"]
    },
    {
        label: "Continuous Integration (CI)",
        role: ["developer_operations"]
    },
    {
        label: "Linux",
        role: ["developer_operations"]
    },
    {
        label: "Bash",
        role: ["developer_operations"]
    },
    {
        label: "Jenkins",
        role: ["developer_operations", "quality_assurance"]
    },
    {
        label: "Shell Scripting",
        role: ["developer_operations"]
    },
    {
        label: "Microsoft Excel",
        role: ["data_analytics"]
    },
    {
        label: "R",
        role: ["data_analytics"]
    },
    {
        label: "Data Analysis",
        role: ["data_analytics"]
    },
    {
        label: "Statistics",
        role: ["data_analytics"]
    },
    {
        label: "Tableau",
        role: ["data_analytics"]
    },
    {
        label: "Business Intelligence",
        role: ["data_analytics"]
    },
    {
        label: "Power BI",
        role: ["data_analytics"]
    },
    {
        label: "Test Driven Development (TDD)",
        role: ["quality_assurance"]
    },
    {
        label: "Agile",
        role: ["quality_assurance"]
    },
    {
        label: "API",
        role: ["quality_assurance"]
    },
    {
        label: "QA Testing",
        role: ["quality_assurance"]
    },
    {
        label: "Regression Testing",
        role: ["quality_assurance"]
    },
    {
        label: "Scrum",
        role: ["quality_assurance"]
    },
    {
        label: "JIRA",
        role: ["quality_assurance"]
    },
    {
        label: "Selenium",
        role: ["quality_assurance"]
    },
    {
        label: "Test Automation",
        role: ["quality_assurance"]
    }
]

export const company_size = [
    {
        label: "Enterprise",
        slug: "enterprise",
    },
    {
        label: "Mid-market",
        slug: "mid_market"
    },
    {
        label: "Startup",
        slug: "startup"
    },
    {
        label: "SMB",
        slug: "smb"
    },
    {
        label: "Mid-market",
        slug: "mid_market"
    }
];

export const industries = [
    {
        label: "Finance",
        slug: "finance",
        skills: ["postgresql", "javascript", "react", "sql", "python", "mysql"]
    },
    {
        label: "Manufacturing",
        slug: "manufacturing",
        skills: ["postgresql", "javascript", "react", "sql", "python", "mysql"]
    },
    {
        label: "Ecommerce",
        slug: "ecommerce",
        skills: ["postgresql", "javascript", "react", "sql", "python", "mysql"]
    },
    {
        label: "Tech",
        slug: "tech",
        skills: ["postgresql", "javascript", "react", "sql", "python", "typescript", "css", "html", "git", "docker", "aws", "mysql", "c++"]
    },
    {
        label: "Information systems",
        slug: "information_systems",
        skills: ["postgresql", "javascript", "react", "sql", "python", "git", "docker", "aws", "mysql", "c++"]
    },
    {
        label: "Enterprise software",
        slug: "enterprise_software",
        skills: ["postgresql", "javascript", "react", "sql", "python", "git", "docker", "aws", "mysql", "c++", "devops", "ansible", "terraform", "continuous_integration", "linux", "bash"]
    },
    {
        label: "Consulting",
        slug: "consulting",
        skills: ["visual_design", "product_design", "ux_design", "figma", "wireframes", "interaction_design", "sketch"]
    },
    {
        label: "Analytics",
        slug: "analytics",
        skills: ["python", "sql", "microsoft_excel", "r", "data_analysis", "statistics", "tableau", "business_intelligence"]
    },
    {
        label: "Logistics",
        slug: "logistics",
        skills: ["postgresql", "javascript", "react", "sql", "python", "mysql"]
    },
    {
        label: "Media",
        slug: "media",
        skills: ["visual_design", "product_design", "ux_design", "figma", "wireframes", "interaction_design", "sketch", "python", "sql", "microsoft_excel", "r", "data_analysis", "statistics", "tableau", "business_intelligence"]
    }
];

export const salary = [
    {
        role: "design",
        by_experience: [
            {
                value: "junior_intern",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 70000
                    },
                    {
                        value: "New York",
                        salary: 75000
                    },
                    {
                        value: "Los Angeles",
                        salary: 70000
                    },
                    {
                        value: "Toronto",
                        salary: 60000
                    },
                    {
                        value: "London",
                        salary: 55000
                    },
                    {
                        value: "Boston",
                        salary: 70000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 80000
                    },
                    {
                        value: "Seattle",
                        salary: 70000
                    },
                ]
            },
            {
                value: "mid_level",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 90000
                    },
                    {
                        value: "New York",
                        salary: 95000
                    },
                    {
                        value: "Los Angeles",
                        salary: 90000
                    },
                    {
                        value: "Toronto",
                        salary: 80000
                    },
                    {
                        value: "London",
                        salary: 75000
                    },
                    {
                        value: "Boston",
                        salary: 90000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 100000
                    },
                    {
                        value: "Seattle",
                        salary: 90000
                    },
                ]
            },
            {
                value: "senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 110000
                    },
                    {
                        value: "New York",
                        salary: 120000
                    },
                    {
                        value: "Los Angeles",
                        salary: 110000
                    },
                    {
                        value: "Toronto",
                        salary: 100000
                    },
                    {
                        value: "London",
                        salary: 105000
                    },
                    {
                        value: "Boston",
                        salary: 110000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 120000
                    },
                    {
                        value: "Seattle",
                        salary: 110000
                    },
                ]
            },
            {
                value: "principal_senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 130000
                    },
                    {
                        value: "New York",
                        salary: 150000
                    },
                    {
                        value: "Los Angeles",
                        salary: 130000
                    },
                    {
                        value: "Toronto",
                        salary: 120000
                    },
                    {
                        value: "London",
                        salary: 140000
                    },
                    {
                        value: "Boston",
                        salary: 130000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 150000
                    },
                    {
                        value: "Seattle",
                        salary: 130000
                    },
                ]
            },
            {
                value: "distinguished_fellow",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 160000
                    },
                    {
                        value: "New York",
                        salary: 180000
                    },
                    {
                        value: "Los Angeles",
                        salary: 160000
                    },
                    {
                        value: "Toronto",
                        salary: 150000
                    },
                    {
                        value: "London",
                        salary: 170000
                    },
                    {
                        value: "Boston",
                        salary: 160000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 180000
                    },
                    {
                        value: "Seattle",
                        salary: 160000
                    },
                ]
            }
        ],
    },
    {
        role: "software_engineering",
        by_experience: [
            {
                value: "junior_intern",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 90000
                    },
                    {
                        value: "New York",
                        salary: 95000
                    },
                    {
                        value: "Los Angeles",
                        salary: 90000
                    },
                    {
                        value: "Toronto",
                        salary: 75000
                    },
                    {
                        value: "London",
                        salary: 58000
                    },
                    {
                        value: "Boston",
                        salary: 90000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 105000
                    },
                    {
                        value: "Seattle",
                        salary: 95000
                    },
                ]
            },
            {
                value: "mid_level",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 110000
                    },
                    {
                        value: "New York",
                        salary: 115000
                    },
                    {
                        value: "Los Angeles",
                        salary: 110000
                    },
                    {
                        value: "Toronto",
                        salary: 95000
                    },
                    {
                        value: "London",
                        salary: 77000
                    },
                    {
                        value: "Boston",
                        salary: 110000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 130000
                    },
                    {
                        value: "Seattle",
                        salary: 115000
                    },
                ]
            },
            {
                value: "senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 130000
                    },
                    {
                        value: "New York",
                        salary: 135000
                    },
                    {
                        value: "Los Angeles",
                        salary: 130000
                    },
                    {
                        value: "Toronto",
                        salary: 115000
                    },
                    {
                        value: "London",
                        salary: 102000
                    },
                    {
                        value: "Boston",
                        salary: 130000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 150000
                    },
                    {
                        value: "Seattle",
                        salary: 135000
                    },
                ]
            },
            {
                value: "principal_senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 150000
                    },
                    {
                        value: "New York",
                        salary: 155000
                    },
                    {
                        value: "Los Angeles",
                        salary: 150000
                    },
                    {
                        value: "Toronto",
                        salary: 135000
                    },
                    {
                        value: "London",
                        salary: 128000
                    },
                    {
                        value: "Boston",
                        salary: 150000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 170000
                    },
                    {
                        value: "Seattle",
                        salary: 155000
                    },
                ]
            },
            {
                value: "distinguished_fellow",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 210000
                    },
                    {
                        value: "New York",
                        salary: 220000
                    },
                    {
                        value: "Los Angeles",
                        salary: 210000
                    },
                    {
                        value: "Toronto",
                        salary: 190000
                    },
                    {
                        value: "London",
                        salary: 210000
                    },
                    {
                        value: "Boston",
                        salary: 210000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 240000
                    },
                    {
                        value: "Seattle",
                        salary: 210000
                    },
                ]
            }
        ],
    },
    {
        role: "developer_operations",
        by_experience: [
            {
                value: "junior_intern",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 70000
                    },
                    {
                        value: "New York",
                        salary: 75000
                    },
                    {
                        value: "Los Angeles",
                        salary: 70000
                    },
                    {
                        value: "Toronto",
                        salary: 60000
                    },
                    {
                        value: "London",
                        salary: 55000
                    },
                    {
                        value: "Boston",
                        salary: 70000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 80000
                    },
                    {
                        value: "Seattle",
                        salary: 70000
                    },
                ]
            },
            {
                value: "mid_level",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 90000
                    },
                    {
                        value: "New York",
                        salary: 95000
                    },
                    {
                        value: "Los Angeles",
                        salary: 90000
                    },
                    {
                        value: "Toronto",
                        salary: 80000
                    },
                    {
                        value: "London",
                        salary: 75000
                    },
                    {
                        value: "Boston",
                        salary: 90000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 100000
                    },
                    {
                        value: "Seattle",
                        salary: 90000
                    },
                ]
            },
            {
                value: "senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 110000
                    },
                    {
                        value: "New York",
                        salary: 120000
                    },
                    {
                        value: "Los Angeles",
                        salary: 110000
                    },
                    {
                        value: "Toronto",
                        salary: 100000
                    },
                    {
                        value: "London",
                        salary: 105000
                    },
                    {
                        value: "Boston",
                        salary: 110000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 120000
                    },
                    {
                        value: "Seattle",
                        salary: 110000
                    },
                ]
            },
            {
                value: "principal_senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 130000
                    },
                    {
                        value: "New York",
                        salary: 150000
                    },
                    {
                        value: "Los Angeles",
                        salary: 130000
                    },
                    {
                        value: "Toronto",
                        salary: 120000
                    },
                    {
                        value: "London",
                        salary: 140000
                    },
                    {
                        value: "Boston",
                        salary: 130000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 150000
                    },
                    {
                        value: "Seattle",
                        salary: 130000
                    },
                ]
            },
            {
                value: "distinguished_fellow",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 160000
                    },
                    {
                        value: "New York",
                        salary: 180000
                    },
                    {
                        value: "Los Angeles",
                        salary: 160000
                    },
                    {
                        value: "Toronto",
                        salary: 150000
                    },
                    {
                        value: "London",
                        salary: 170000
                    },
                    {
                        value: "Boston",
                        salary: 160000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 180000
                    },
                    {
                        value: "Seattle",
                        salary: 160000
                    },
                ]
            }
        ],
    },
    {
        role: "data_analytics",
        by_experience: [
            {
                value: "junior_intern",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 70000
                    },
                    {
                        value: "New York",
                        salary: 75000
                    },
                    {
                        value: "Los Angeles",
                        salary: 70000
                    },
                    {
                        value: "Toronto",
                        salary: 60000
                    },
                    {
                        value: "London",
                        salary: 55000
                    },
                    {
                        value: "Boston",
                        salary: 70000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 80000
                    },
                    {
                        value: "Seattle",
                        salary: 70000
                    },
                ]
            },
            {
                value: "mid_level",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 90000
                    },
                    {
                        value: "New York",
                        salary: 95000
                    },
                    {
                        value: "Los Angeles",
                        salary: 90000
                    },
                    {
                        value: "Toronto",
                        salary: 80000
                    },
                    {
                        value: "London",
                        salary: 75000
                    },
                    {
                        value: "Boston",
                        salary: 90000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 100000
                    },
                    {
                        value: "Seattle",
                        salary: 90000
                    },
                ]
            },
            {
                value: "senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 110000
                    },
                    {
                        value: "New York",
                        salary: 120000
                    },
                    {
                        value: "Los Angeles",
                        salary: 110000
                    },
                    {
                        value: "Toronto",
                        salary: 100000
                    },
                    {
                        value: "London",
                        salary: 105000
                    },
                    {
                        value: "Boston",
                        salary: 110000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 120000
                    },
                    {
                        value: "Seattle",
                        salary: 110000
                    },
                ]
            },
            {
                value: "principal_senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 130000
                    },
                    {
                        value: "New York",
                        salary: 150000
                    },
                    {
                        value: "Los Angeles",
                        salary: 130000
                    },
                    {
                        value: "Toronto",
                        salary: 120000
                    },
                    {
                        value: "London",
                        salary: 140000
                    },
                    {
                        value: "Boston",
                        salary: 130000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 150000
                    },
                    {
                        value: "Seattle",
                        salary: 130000
                    },
                ]
            },
            {
                value: "distinguished_fellow",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 160000
                    },
                    {
                        value: "New York",
                        salary: 180000
                    },
                    {
                        value: "Los Angeles",
                        salary: 160000
                    },
                    {
                        value: "Toronto",
                        salary: 150000
                    },
                    {
                        value: "London",
                        salary: 170000
                    },
                    {
                        value: "Boston",
                        salary: 160000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 180000
                    },
                    {
                        value: "Seattle",
                        salary: 160000
                    },
                ]
            }
        ],
    },
    {
        role: "quality_assurance",
        by_experience: [
            {
                value: "junior_intern",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 70000
                    },
                    {
                        value: "New York",
                        salary: 75000
                    },
                    {
                        value: "Los Angeles",
                        salary: 70000
                    },
                    {
                        value: "Toronto",
                        salary: 60000
                    },
                    {
                        value: "London",
                        salary: 55000
                    },
                    {
                        value: "Boston",
                        salary: 70000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 80000
                    },
                    {
                        value: "Seattle",
                        salary: 70000
                    },
                ]
            },
            {
                value: "mid_level",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 90000
                    },
                    {
                        value: "New York",
                        salary: 95000
                    },
                    {
                        value: "Los Angeles",
                        salary: 90000
                    },
                    {
                        value: "Toronto",
                        salary: 80000
                    },
                    {
                        value: "London",
                        salary: 75000
                    },
                    {
                        value: "Boston",
                        salary: 90000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 100000
                    },
                    {
                        value: "Seattle",
                        salary: 90000
                    },
                ]
            },
            {
                value: "senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 110000
                    },
                    {
                        value: "New York",
                        salary: 120000
                    },
                    {
                        value: "Los Angeles",
                        salary: 110000
                    },
                    {
                        value: "Toronto",
                        salary: 100000
                    },
                    {
                        value: "London",
                        salary: 105000
                    },
                    {
                        value: "Boston",
                        salary: 110000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 120000
                    },
                    {
                        value: "Seattle",
                        salary: 110000
                    },
                ]
            },
            {
                value: "principal_senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 130000
                    },
                    {
                        value: "New York",
                        salary: 150000
                    },
                    {
                        value: "Los Angeles",
                        salary: 130000
                    },
                    {
                        value: "Toronto",
                        salary: 120000
                    },
                    {
                        value: "London",
                        salary: 140000
                    },
                    {
                        value: "Boston",
                        salary: 130000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 150000
                    },
                    {
                        value: "Seattle",
                        salary: 130000
                    },
                ]
            },
            {
                value: "distinguished_fellow",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 160000
                    },
                    {
                        value: "New York",
                        salary: 180000
                    },
                    {
                        value: "Los Angeles",
                        salary: 160000
                    },
                    {
                        value: "Toronto",
                        salary: 150000
                    },
                    {
                        value: "London",
                        salary: 170000
                    },
                    {
                        value: "Boston",
                        salary: 160000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 180000
                    },
                    {
                        value: "Seattle",
                        salary: 160000
                    },
                ]
            }
        ],
    },
    {
        role: "product_management",
        by_experience: [
            {
                value: "junior_intern",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 70000
                    },
                    {
                        value: "New York",
                        salary: 75000
                    },
                    {
                        value: "Los Angeles",
                        salary: 70000
                    },
                    {
                        value: "Toronto",
                        salary: 60000
                    },
                    {
                        value: "London",
                        salary: 55000
                    },
                    {
                        value: "Boston",
                        salary: 70000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 80000
                    },
                    {
                        value: "Seattle",
                        salary: 70000
                    },
                ]
            },
            {
                value: "mid_level",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 90000
                    },
                    {
                        value: "New York",
                        salary: 95000
                    },
                    {
                        value: "Los Angeles",
                        salary: 90000
                    },
                    {
                        value: "Toronto",
                        salary: 80000
                    },
                    {
                        value: "London",
                        salary: 75000
                    },
                    {
                        value: "Boston",
                        salary: 90000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 100000
                    },
                    {
                        value: "Seattle",
                        salary: 90000
                    },
                ]
            },
            {
                value: "senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 110000
                    },
                    {
                        value: "New York",
                        salary: 120000
                    },
                    {
                        value: "Los Angeles",
                        salary: 110000
                    },
                    {
                        value: "Toronto",
                        salary: 100000
                    },
                    {
                        value: "London",
                        salary: 105000
                    },
                    {
                        value: "Boston",
                        salary: 110000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 120000
                    },
                    {
                        value: "Seattle",
                        salary: 110000
                    },
                ]
            },
            {
                value: "principal_senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 130000
                    },
                    {
                        value: "New York",
                        salary: 150000
                    },
                    {
                        value: "Los Angeles",
                        salary: 130000
                    },
                    {
                        value: "Toronto",
                        salary: 120000
                    },
                    {
                        value: "London",
                        salary: 140000
                    },
                    {
                        value: "Boston",
                        salary: 130000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 150000
                    },
                    {
                        value: "Seattle",
                        salary: 130000
                    },
                ]
            },
            {
                value: "distinguished_fellow",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 160000
                    },
                    {
                        value: "New York",
                        salary: 180000
                    },
                    {
                        value: "Los Angeles",
                        salary: 160000
                    },
                    {
                        value: "Toronto",
                        salary: 150000
                    },
                    {
                        value: "London",
                        salary: 170000
                    },
                    {
                        value: "Boston",
                        salary: 160000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 180000
                    },
                    {
                        value: "Seattle",
                        salary: 160000
                    },
                ]
            }
        ],
    },
    {
        role: "engineering_management",
        by_experience: [
            {
                value: "junior_intern",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 70000
                    },
                    {
                        value: "New York",
                        salary: 75000
                    },
                    {
                        value: "Los Angeles",
                        salary: 70000
                    },
                    {
                        value: "Toronto",
                        salary: 60000
                    },
                    {
                        value: "London",
                        salary: 55000
                    },
                    {
                        value: "Boston",
                        salary: 70000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 80000
                    },
                    {
                        value: "Seattle",
                        salary: 70000
                    },
                ]
            },
            {
                value: "mid_level",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 90000
                    },
                    {
                        value: "New York",
                        salary: 95000
                    },
                    {
                        value: "Los Angeles",
                        salary: 90000
                    },
                    {
                        value: "Toronto",
                        salary: 80000
                    },
                    {
                        value: "London",
                        salary: 75000
                    },
                    {
                        value: "Boston",
                        salary: 90000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 100000
                    },
                    {
                        value: "Seattle",
                        salary: 90000
                    },
                ]
            },
            {
                value: "senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 110000
                    },
                    {
                        value: "New York",
                        salary: 120000
                    },
                    {
                        value: "Los Angeles",
                        salary: 110000
                    },
                    {
                        value: "Toronto",
                        salary: 100000
                    },
                    {
                        value: "London",
                        salary: 105000
                    },
                    {
                        value: "Boston",
                        salary: 110000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 120000
                    },
                    {
                        value: "Seattle",
                        salary: 110000
                    },
                ]
            },
            {
                value: "principal_senior_staff",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 130000
                    },
                    {
                        value: "New York",
                        salary: 150000
                    },
                    {
                        value: "Los Angeles",
                        salary: 130000
                    },
                    {
                        value: "Toronto",
                        salary: 120000
                    },
                    {
                        value: "London",
                        salary: 140000
                    },
                    {
                        value: "Boston",
                        salary: 130000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 150000
                    },
                    {
                        value: "Seattle",
                        salary: 130000
                    },
                ]
            },
            {
                value: "distinguished_fellow",
                location: [
                    {
                        value: "Washington D.C.",
                        salary: 160000
                    },
                    {
                        value: "New York",
                        salary: 180000
                    },
                    {
                        value: "Los Angeles",
                        salary: 160000
                    },
                    {
                        value: "Toronto",
                        salary: 150000
                    },
                    {
                        value: "London",
                        salary: 170000
                    },
                    {
                        value: "Boston",
                        salary: 160000
                    },
                    {
                        value: "SF Bay Area",
                        salary: 180000
                    },
                    {
                        value: "Seattle",
                        salary: 160000
                    },
                ]
            }
        ],
    }
];