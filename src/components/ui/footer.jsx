import { Button } from "./button";

export function FooterLayout({
    logo,
    brandName,
    socialLinks,
    mainLinks,
    legalLinks,
    copyright,
}) {
    return (
        <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 border-t border-white/10 mt-16 relative z-10">
            <div className="px-4 lg:px-8 max-w-6xl mx-auto">
                <div className="md:flex md:items-start md:justify-between">
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex items-center gap-x-2 text-text-primary hover:text-primary transition-colors"
                        aria-label={brandName}
                    >
                        {logo}
                        <span className="font-bold text-xl tracking-tight">{brandName}</span>
                    </a>
                    <ul className="flex list-none mt-6 md:mt-0 space-x-3">
                        {socialLinks.map((link, i) => (
                            <li key={i}>
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="h-10 w-10 rounded-full border border-border text-text-secondary hover:text-white transition-all transform hover:-translate-y-1"
                                    asChild
                                >
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                                        {link.icon}
                                    </a>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-t border-white/5 mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
                    <nav className="lg:mt-0 lg:col-[4/11]">
                        <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
                            {mainLinks.map((link, i) => (
                                <li key={i} className="my-1 mx-2 shrink-0">
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            if (link.href.startsWith('#')) {
                                                e.preventDefault();
                                                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className="text-sm text-text-secondary hover:text-primary transition-colors py-2 px-1"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-6 lg:mt-0 lg:col-[4/11]">
                        <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end mt-4 lg:mt-6">
                            {legalLinks.map((link, i) => (
                                <li key={i} className="my-1 mx-3 shrink-0">
                                    <a
                                        href={link.href}
                                        className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 text-sm leading-6 text-text-tertiary whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
                        <div>{copyright.text}</div>
                        {copyright.license && <div>{copyright.license}</div>}
                    </div>
                </div>
            </div>
        </footer>
    );
}
