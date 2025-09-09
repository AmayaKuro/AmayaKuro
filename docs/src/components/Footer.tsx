import { Link, Text } from "@radix-ui/themes";
import cls from "./Footer.module.scss";
import logo from "./../assets/images/logo.png";

export default function Footer() {
    return (
        <div className={cls.Footer}>
            <div className={cls.Inner}>
                <img srcSet={logo} alt="logo" className={cls.Logo} />
                <div className={cls.Content}>
                    <Text size="1" color="gray">
                        Ouro Kronii art by <Link color="gray" href="https://x.com/QUASARCAKE" target="_blank">QUASARCAKE</Link>, enhance using <Link color="gray" href="https://waifu2x.udp.jp/" target="_blank">waifu2x</Link>. Website created with <Link color="gray" href="https://vite.dev/guide/#scaffolding-your-first-vite-project" target="_blank">Vite + React</Link> and lots of ☕.
                    </Text>
                    <br />
                    <Text size="1" color="gray">
                        looted from michioxd. After being gaslighted and finally accepted by him. man....
                    </Text>
                    <br />
                    <Text size="1" color="gray">
                        &copy; 2025 Amaya Kuro. <Link color="gray" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Available under the CC BY-NC-SA 4.0 license</Link>.
                    </Text>
                </div>
            </div>
        </div>
    )
}
