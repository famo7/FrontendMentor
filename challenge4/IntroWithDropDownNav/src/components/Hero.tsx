import Footer from "./Footer"
import { Button } from "./ui/button"

const Hero = ({ style }: { style: string }) => {
    return (
        <div className={`${style}`}>
            <div className="sm:order-2 sm:w-1/2">
                <img src="/images/image-hero-mobile.png" alt="hero" className="mb-12 sm:hidden" />
                <img src="/images/image-hero-desktop.png" alt="hero" className="mb-12 sm:block hidden " />
            </div>
            <div className="sm:w-1/2">
                <p className="text-3xl font-bold mb-6 sm:text-5xl">Make remote work</p>
                <p className="text-neutral-500 text-sm mb-6">Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</p>
                <Button size={"lg"}>Learn more</Button>
                <Footer style="hidden sm:block sm:flex  gap-5 mt-20" />

            </div>

        </div>
    )
}

export default Hero