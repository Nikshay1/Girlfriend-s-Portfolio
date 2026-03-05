import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { FooterLayout } from "./ui/footer";

export default function Footer() {
    return (
        <FooterLayout
            logo={<span className="text-xl font-bold tracking-tight text-primary">JC<span className="text-white">.</span></span>}
            brandName="Jyoti Chauhan"
            socialLinks={[
                {
                    icon: <Linkedin className="h-5 w-5" />,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                },
                {
                    icon: <Twitter className="h-5 w-5" />,
                    href: "https://twitter.com",
                    label: "Twitter",
                },
                {
                    icon: <Github className="h-5 w-5" />,
                    href: "https://github.com",
                    label: "GitHub",
                },
                {
                    icon: <Mail className="h-5 w-5" />,
                    href: "mailto:jc4108034@gmail.com",
                    label: "Email",
                },
            ]}
            mainLinks={[
                { href: "#about", label: "About" },
                { href: "#education", label: "Education" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
            ]}
            legalLinks={[
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
            ]}
            copyright={{
                text: `© ${new Date().getFullYear()} Jyoti Chauhan.`,
                license: "All rights reserved.",
            }}
        />
    );
}
