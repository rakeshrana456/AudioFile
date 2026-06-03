import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { footerData } from "@/Data/data";

type FooterType = {
    logo: string;
    description: string;
    copyright: string;
    navigation: {
        id: number;
        title: string;
        path: string;
    }[];
    socialLinks: {
        id: number;
        name: string;
        icon: string;
    }[];
};

export default function Footer() {
    return (
        <footer className="bg-[#101010] text-white mt-24">
            <div className="container relative py-16">


                {footerData.map((item: FooterType) => (
                    <div key={item.logo} className="flex flex-col lg:flex-row justify-between gap-10">
                        <div className="max-w-[540px]">
                            <h2 className="text-3xl font-bold mb-8">{item.logo}</h2>
                            <p className="text-white/50 text-[15px] leading-7">
                                {item.description}
                            </p>
                            <p className="text-white/50 font-bold mt-12">
                                {item.copyright}
                            </p>
                        </div>

                        <div className="flex flex-col justify-between items-start lg:items-end">
                            <ul className="flex flex-col md:flex-row gap-6 text-sm font-bold uppercase tracking-wider">
                                {item.navigation.map((nav) => (
                                    <li key={nav.id}>
                                        <a href={nav.path}>{nav.title}</a>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-4 mt-10">
                                {item.socialLinks.map((social) => {
                                    const IconComponent =
                                        social.name === "Twitter" ? FaTwitter :
                                            social.name === "Facebook" ? FaFacebook :
                                                social.name === "Instagram" ? FaInstagram : null;

                                    return IconComponent && (
                                        <a key={social.id} href="#" aria-label={social.name}>
                                            <IconComponent size={22} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
}