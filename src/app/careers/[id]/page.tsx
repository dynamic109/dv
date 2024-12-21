"use client";

import { use, useState } from "react";
import { Navbar } from "@/components/navbar";
import { JobHeader } from "@/components/careers/jobs/job-header";
import { JobOverview } from "@/components/careers/jobs/job-overview";
import { JobApplication } from "@/components/careers/jobs/job-application";
import { Footer } from "@/components/footer";
import { JobDetails } from "@/components/types/job";

const jobData = [
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    type: "Full time",
    location: "Remote",
    department: "Engineering",
    compensation: "$26K – $37K • Offers Equity",
    description:
      "We are seeking a skilled and experienced DevOps Engineer to join our dynamic team. In this role, you will be responsible for designing, implementing, and managing the infrastructure and processes that support our clients' cloud environments. You will work closely with development and operations teams to enhance collaboration, improve productivity, and ensure the seamless delivery of high-quality software.",
    responsibilities:
      "Infrastructure Automation: Develop and maintain automated CI/CD pipelines to streamline software delivery. Cloud Management: Deploy, manage, and monitor cloud infrastructure (primarily on Azure and AWS) to ensure scalability, security, and performance. Configuration Management: Implement and manage configuration management tools to maintain consistency across environments. Collaboration: Work closely with development and operations teams to ensure smooth integration and continuous delivery processes. Monitoring & Logging: Set up and maintain monitoring, logging, and alerting systems to detect and resolve issues proactively. Security & Compliance: Implement security best practices and ensure compliance with industry standards and regulations. Performance Optimization: Analyze system performance and provide recommendations for improvements.",
    qualifications: {
      required:
        "Experience: 3+ years of experience in a DevOps role, with hands-on experience in cloud environments (Azure and AWS).",
      skills:
        "Experience with CI/CD tools (e.g., Jenkins, GitLab CI) Knowledge of configuration management tools (e.g., Ansible, Terraform) Strong understanding of containerization (e.g., Docker, Kubernetes) Familiarity with monitoring tools (e.g., Prometheus, Grafana)",
      education:
        "Bachelor’s degree in Computer Science, Information Technology, or a related field (or equivalent work experience).",
    },
    benefits:
      "Digivolve is an equal-opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.",
    projects:
      "Innovative Projects: Work on cutting-edge cloud solutions that make a real impact. Collaborative Environment: Be part of a supportive and talented team that values collaboration and continuous learning. Career Growth: Opportunities for professional development and advancement within the company. Flexible Work Arrangements: Remote work options available to support work-life balance.",
  },
  {
    id: "cloud-security-engineer",
    title: "Cloud Secuirty Engineer",
    type: "Full time",
    location: "Türkiye(Remote)",
    department: "Engineering",
    compensation: "$26K – $37K • Offers Equity",
    description:
      "We are looking for a Cloud Security Engineer to join our team and help our clients protect their cloud infrastructures. The ideal candidate will have a strong background in cloud security, with expertise in implementing and managing security measures on Azure and AWS platforms.",
    responsibilities:
      "Design, implement, and manage security solutions for cloud environments. Conduct security assessments and audits to identify vulnerabilities and ensure compliance with industry standards. Collaborate with clients to develop and implement security best practices. Monitor security alerts and respond to potential threats in real-time. Stay updated on the latest security threats and trends to proactively protect our clients.",

    qualifications: {
      required:
        "Expertise in cloud security, with hands-on experience in Azure and AWS. Strong understanding of security frameworks and compliance requirements (e.g., GDPR, HIPAA). Proficiency in identity and access management (IAM), encryption, and network security. Experience with security monitoring and incident response tools. Excellent communication and problem-solving skills.",

      skills:
        "Relevant certifications (e.g., CISSP, AWS Certified Security Specialty, Azure Security Engineer Associate) are highly desirable.",

      education:
        "Bachelor’s degree in Cybersecurity, Information Technology, or a related field.",
    },
    benefits:
      "Digivolve is a leader in cloud consulting, architecting, security, automation, and DevOps services. We empower businesses of all sizes to harness the full potential of the cloud, enabling growth, innovation, and efficiency.",
    projects:
      "Work on innovative projects with leading technologies. Be part of a team that values collaboration and continuous learning. Competitive compensation and benefits package. Opportunities for professional growth and development.",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    type: "Contract",
    location: "Remote",
    department: "Design",
    compensation: "$2000-3000",
    description:
      "As a Product Designer at Digivolve, you will play a crucial role in designing intuitive, engaging, and visually compelling digital products that meet the needs of our clients and their users. You will work closely with our engineering, product management, and marketing teams to bring ideas to life, from concept through to final execution. This role requires a creative thinker with a strong eye for detail, a passion for user-centered design, and the ability to turn complex problems into elegant solutions.",
    responsibilities:
      "Collaborate with cross-functional teams to define and implement innovative design solutions for product direction, visuals, and user experience. Create wireframes, storyboards, user flows, process flows, and site maps to effectively communicate interaction and design ideas. Design user interfaces and experiences that are both functional and appealing, ensuring a seamless and intuitive user journey. Conduct user research and testing to gather insights and validate design decisions. Iterate on designs based on feedback from stakeholders and users to continuously improve the product. Maintain and enhance our design system to ensure consistency across all products. Stay up-to-date with the latest design trends, tools, and technologies to bring fresh ideas and perspectives to the team.",

    qualifications: {
      required:
        "Proven experience as a Product Designer, UI/UX Designer, or similar role, with a strong portfolio showcasing your work. Proficiency in design tools such as Sketch, Figma, Adobe Creative Suite, and prototyping tools like InVision or Marvel.",

      skills:
        "Strong understanding of user-centered design principles and best practices. Experience conducting user research and usability testing. Excellent visual design skills with a keen eye for detail. Strong communication and collaboration skills, with the ability to work effectively in a team environment. Familiarity with HTML/CSS and an understanding of how designs translate into code is a plus.",

      education:
        "Bachelor’s degree in Design, Human-Computer Interaction, Computer Science, or a related field. Advanced degrees or certifications in design or UX are a plus.",
    },
    benefits:
      "Digivolve is a leader in cloud consulting, architecting, security, automation, and DevOps services. We empower businesses of all sizes to harness the full potential of the cloud, enabling growth, innovation, and efficiency.",
    projects:
      "Work on innovative projects with leading technologies. Be part of a team that values collaboration and continuous learning. Competitive compensation and benefits package. Opportunities for professional growth and development.",
  },
  {
    id: "operations-manager",
    title: "Operations Manager",
    type: "Full time",
    location: "Remote",
    department: "Operations",
    compensation: "$45k – $65k",
    description:
      "The Operations Manager will play a critical role in overseeing the day-to-day operations at Digivolve, ensuring that all processes run efficiently and meet our high standards of excellence. This position requires a strategic thinker with strong leadership skills who can manage resources effectively, optimize processes, and drive continuous improvement across the organization. ",
    responsibilities:
      "Oversee the daily operations of the company, ensuring that projects are completed on time and within budget. Develop and implement operational policies and procedures to improve efficiency and productivity. Manage and optimize resource allocation, including personnel, equipment, and technology. Collaborate with department heads to align operational strategies with business objectives. Monitor key performance indicators (KPIs) and implement corrective actions when necessary to ensure targets are met. Lead and mentor team members, fostering a positive and productive work environment. Identify opportunities for process improvements and drive continuous improvement initiatives. Ensure compliance with all relevant regulations, policies, and procedures.",

    qualifications: {
      required:
        "Bachelor’s degree in Business Administration, Operations Management, or a related field.",

      skills:
        "Proven experience as an Operations Manager or similar role in a tech or IT services company. Strong understanding of cloud services, IT infrastructure, and project management. Excellent organizational and leadership abilities. Strong analytical and problem-solving skills. Ability to manage multiple priorities in a fast-paced environment. Exceptional communication and interpersonal skills. Proficiency in operational management software and tools.",

      education: "Advanced degree (e.g., MBA) is a plus.",
    },
    benefits:
      "Digivolve is a leader in cloud consulting, architecting, security, automation, and DevOps services. We empower businesses of all sizes to harness the full potential of the cloud, enabling growth, innovation, and efficiency.",
    projects:
      "Work on innovative projects with leading technologies. Be part of a team that values collaboration and continuous learning. Competitive compensation and benefits package. Opportunities for professional growth and development.",
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    type: "Full time",
    location: "Remote",
    department: "Engineering",
    compensation: "Competitive salary based on experience",
    description:
      "We are seeking an experienced Cloud Architect to design and implement robust cloud solutions for our diverse range of clients. The ideal candidate will have a deep understanding of Azure and AWS platforms and the ability to create scalable, secure, and high-performance cloud infrastructures.",
    responsibilities:
      "Design and implement cloud architectures that are scalable, resilient, and secure. Collaborate with clients to understand their business needs and translate them into effective cloud strategies. Provide technical leadership throughout the cloud lifecycle, including cloud architecture, design, and implementation. Optimize cloud environments for cost-efficiency and performance. Stay updated with the latest cloud technologies and best practices to ensure our solutions are cutting-edge.",

    qualifications: {
      required:
        "5+ years of experience in cloud architecture and design, with expertise in Azure and AWS. Strong understanding of cloud security principles and best practices. Experience with infrastructure as code (IaC) tools such as Terraform or CloudFormation. Excellent communication and collaboration skills. Relevant certifications (e.g., AWS Certified Solutions Architect, Azure Solutions Architect Expert) are a plus.",

      skills: "Mid to Senior-Level",

      education:
        "Bachelor’s degree in Computer Science, Information Technology, or a related field. Relevant certifications (e.g., AWS Certified Solutions Architect, Azure Solutions Architect Expert) are highly desirable.",
    },
    benefits:
      "Digivolve is a leader in cloud consulting, architecting, security, automation, and DevOps services. We empower businesses of all sizes to harness the full potential of the cloud, enabling growth, innovation, and efficiency.",
    projects:
      "Work on innovative projects with leading technologies. Be part of a team that values collaboration and continuous learning. Competitive compensation and benefits package. Opportunities for professional growth and development.",
  },
];

export default function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [activeTab, setActiveTab] = useState<"overview" | "application">(
    "overview"
  );

  const { id } = use(params);
  const job = jobData.find((job) => job.id === id);

  if (!job) {
    return <div>Job not found</div>;
  }

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggle={toggle} isNavOpen={isNavOpen} />
      <main className="flex-grow py-16 mt-[50px]">
        <div className="max-w-[1140px]  mx-auto px-6 xl:px-0">
          <JobHeader activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="mt-8">
            {activeTab === "overview" ? (
              <JobOverview job={job as JobDetails} />
            ) : (
              <JobApplication job={job as JobDetails} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
