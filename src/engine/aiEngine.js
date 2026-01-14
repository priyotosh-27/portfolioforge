export function generatePortfolio(sections, profile) {
    const name = profile.name || "Developer";
    const role = profile.role || "Full Stack Developer";
    const skills = profile.skills || "JavaScript, React, Tailwind CSS, Node.js";
    const projects = profile.projects || "PortfolioForge, PriyoMart, CareerCraft";

    return sections.map(sec => {
        if (sec.type === "Hero") {
            sec.content = `Hi, I'm ${name}.  
A passionate ${role} focused on building high-quality digital products that create real business impact.`;
        }

        if (sec.type === "About") {
            sec.content = `${name} is a highly motivated ${role} with strong problem-solving skills and hands-on experience in modern web technologies. Always driven to learn, improve, and build meaningful software.`;
        }

        if (sec.type === "Education") {
            sec.content = `Bachelor of Technology in Computer Science  
University of Engineering & Management, Kolkata  
2022 – 2026  
CGPA: 8.5`;
        }


        if (sec.type === "Skills") {
            sec.content = skills;
        }

        if (sec.type === "Projects") {
            sec.content = `Key Projects:\n• ${projects}\n• AI-Powered SaaS Portfolio Builder\n• Modern Ecommerce Platform`;
        }

        if (sec.type === "Contact") {
            sec.content = `Email: yourname@email.com\nLinkedIn: linkedin.com/in/${name.toLowerCase()}`;
        }

        return sec;
    });
}
