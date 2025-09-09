import { ParallaxBanner } from "react-scroll-parallax";
import cls from "./Home.module.scss";
import Kronii from "./../assets/images/kronii.png";
import { Element } from 'react-scroll'
import { AspectRatio, Badge, Button, Card, Grid, Heading, IconButton, Link, Text, Tooltip } from "@radix-ui/themes";
import { PiCodeDuotone, PiDiscordLogoDuotone, PiEnvelopeDuotone, PiFacebookLogoDuotone, PiGithubLogoDuotone, PiInfoDuotone, PiMagicWandDuotone, PiPhoneCallDuotone } from "react-icons/pi";
import type { accentColors } from "@radix-ui/themes/src/props/color.prop.ts";

import tsIcon from "./../assets/icons/ts.svg";
import jsIcon from "./../assets/icons/js.svg";
import nodeJSIcon from "./../assets/icons/node-js.svg";
import reactIcon from "./../assets/icons/react.svg";
import csIcon from "./../assets/icons/cs.svg";
import goIcon from "./../assets/icons/go.svg";
import java from "./../assets/icons/java.svg";
import pyIcon from "./../assets/icons/py.svg";

const ListSocial = [
    {
        name: "Discord",
        icon: <PiDiscordLogoDuotone size={25} />,
        url: "https://discord.com/users/674619549286662152"
    },
    {
        name: "GitHub",
        icon: <PiGithubLogoDuotone size={25} />,
        url: "https://github.com/AmayaKuro"
    },
    {
        name: "Facebook",
        icon: <PiFacebookLogoDuotone size={25} />,
        url: "https://www.facebook.com/VHTuanKiet/"
    },
    {
        name: "Email",
        icon: <PiEnvelopeDuotone size={25} />,
        url: "mailto:vhtkiet9615@gmail.com"
    }
];

const List = [
    {
        image: "https://github.com/AmayaKuro/Bard4Free/raw/main/.github/asset/front-page.png",
        name: "Bard4Free",
        type: "Web Application",
        description: "A proxy chatbot for Bard(Gemini) - Access Google's AI assistant for free",
        tech: [
            "JavaScript",
            "Node.js"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/AmayaKuro/Bard4Free"
            }
        ]
    },
    {
        image: "https://github.com/AmayaKuro/MyAnamel/raw/main/.github/asset/preview1.png",
        name: "MyAnamel",
        type: "Web Application",
        description: "An Anime distributor - Your gateway to anime content",
        tech: [
            "JavaScript",
            "Node.js",
            "React"
        ],
        buttons: [
            {
                name: "GitHub",
                url: "https://github.com/AmayaKuro/MyAnamel"
            }
        ]
    }
];

const skills: {
    name: string,
    icon: string,
    description: string,
    color: typeof accentColors[number],
    textColor: string
}[] = [
        {
            name: "TypeScript",
            icon: tsIcon,
            description: "Gone...",
            color: "blue",
            textColor: "#007acc"
        },
        {
            name: "JavaScript",
            icon: jsIcon,
            description: "Nah, TypeScript's just better (intense ctrl+space spam)",
            color: "yellow",
            textColor: "#f7df1e"
        },
        {
            name: "Node.js",
            icon: nodeJSIcon,
            description: "Could but idk, Fullstack are fine",
            color: "green",
            textColor: "#3c873a"
        },

        {
            name: "C#",
            icon: csIcon,
            description: "wow, M$ kicking ass...",
            color: "purple",
            textColor: "#a179dc"
        },
        {
            name: "Python",
            icon: pyIcon,
            description: "Well that was easy",
            color: "cyan",
            textColor: "#306998"
        },
        {
            name: "Go",
            icon: goIcon,
            description: "I'm Going (🥁)",
            color: "cyan",
            textColor: "#00add8"
        },
        {
            name: "React",
            icon: reactIcon,
            description: "Society forced me (；′⌒`)",
            color: "indigo",
            textColor: "#61dafb"
        },
        {
            name: "Java",
            icon: java,
            description: "Does Servlet count as Java?",
            color: "orange",
            textColor: "#ed8b00"
        }
    ]

export default function PageHome() {
    return (
        <div className={cls.HomePage}>
            <Element name="home" className={cls.Main}>
                <ParallaxBanner
                    layers={[{ image: Kronii, speed: -40, className: cls.BannerInner }]}
                    className={cls.Banner}
                />
                <div className={cls.Info}>
                    <Heading className={cls.Hello} size="6">
                        Hi there 👋 I'm Amaya Kuro
                    </Heading>
                    <Text size="2" color="gray">
                        Welcome ( ͡° ͜ʖ ͡°)
                    </Text>
                </div>
            </Element>
            <Element name="about-me" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiInfoDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            about me
                        </Heading>
                        <Text size="1" color="gray">
                            Into the Dark Night
                        </Text>
                    </div>
                </div>
                <div className={cls.BodyAbout}>
                    <div className={cls.Content}>
                        <Text size="2" color="gray">
                            My name is Amaya Kuro. I'm a passionate developer who loves creating fun <Text size="2" color="gray" style={{ textDecoration: 'line-through' }}>and useful</Text> applications to tinkering with technology.
                        </Text>
                        <br /><br />
                        <Text size="2" color="gray">
                            Feel free to reach out if you want to collaborate on something exciting or just chat about the latest tech trends! (invited me to a fes plz 🥺👉👈).
                        </Text>
                    </div>
                </div>
            </Element>
            <Element name="my-skills" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiMagicWandDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            my skills
                        </Heading>
                        <Text size="1" color="gray">
                            more like, Skill Issue ¯\_(ツ)_/¯
                        </Text>
                    </div>
                </div>
                <Grid columns={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} gap={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} width="auto">
                    {skills.map((skill, index) => (
                        <Card variant="surface" key={index} className={cls.TechCard}>
                            <IconButton size="4" color={skill.color} variant="soft">
                                <img src={skill.icon} alt={skill.name} className={cls.TechLogo} />
                            </IconButton>
                            <div>
                                <Heading style={{ "--text-color": skill.textColor } as React.CSSProperties} className={"PrettyTitle"} size="4">
                                    {skill.name}
                                </Heading>
                                <Text style={{ marginTop: '0.2rem' }} as="div" color="gray" size="1">
                                    {skill.description}
                                </Text>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Element>
            <Element name="my-projects" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiCodeDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            my projects
                        </Heading>
                        <Text size="1" color="gray">
                            heh...? too bad...
                        </Text>
                    </div>
                </div>
                <Grid columns={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} gap={{
                    initial: "1",
                    md: "3",
                    sm: "2",
                    xs: "1"
                }} width="auto" gapX="3" gapY="3">
                    {List.map((project, index) => (
                        <Card variant="surface" key={index} className={cls.Projects}>
                            <AspectRatio ratio={16 / 9}>
                                <img src={project.image} alt={project.name} className={cls.ProjectImage} />
                                <div className={cls.ProjectTech}>
                                    {project.tech.map((tech, index) => (
                                        <Badge variant="outline" key={index} size="1" className={cls.ProjectTechItem}>
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </AspectRatio>

                            <div className={cls.ProjectInfo}>
                                <Heading size="3" className={"PrettyTitle"}>
                                    {project.name} <Badge size="1">{project.type}</Badge>
                                </Heading>
                                <Text size="1" color="gray" className={cls.ProjectDescription}>
                                    {project.description}
                                </Text>
                            </div>
                            <div className={cls.space}></div>
                            <div className={cls.Action}>
                                {project.buttons.map((button, index) => (
                                    <a href={button.url} target="_blank" rel="noreferrer">
                                        <Button size="1" key={index} variant="surface" className={cls.ProjectButton}>
                                            {button.name}
                                        </Button>
                                    </a>
                                ))}
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Element>
            <Element name="contact-me" className={cls.Section}>
                <div className={cls.Heading}>
                    <IconButton className={cls.Icons} size="4" variant="surface">
                        <PiPhoneCallDuotone size={25} />
                    </IconButton>
                    <div className={cls.Inf}>
                        <Heading style={{ "--text-color": "#e2d1d4" } as React.CSSProperties} className={"PrettyTitle"} size="4">
                            contact
                        </Heading>
                        <Text size="1" color="gray">
                            calls will not be guaranteed picked up lol...
                        </Text>
                    </div>
                </div>
                <div className={cls.BodyContact}>
                    <Text align="center" size="3" color="gray">
                        For work, please contact me via email: <Link color="gray" href="mailto:vhtkiet9615@gmail.com">vhtkiet9615@gmail.com</Link>
                    </Text>

                    <div className={cls.List}>
                        {ListSocial.map((social, index) => (
                            <Tooltip content={social.name} key={index}>
                                <a href={social.url} target="_blank" title={social.name} rel="noreferrer">
                                    <IconButton size="4" variant="surface" className={cls.Social}>
                                        {social.icon}
                                    </IconButton>
                                </a>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </Element>
        </div>
    )
}
