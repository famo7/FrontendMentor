import Offer from "./Offer"
import Subscribe from "./Subscribe"


const Home = () => {
    return (
        <div className="flex flex-col justify-between sm:flex-row sm:gap-10 bg-white sm:p-10 sm:rounded-3xl  sm:h-auto">
            <div className="mb-3 sm:order-1">
                <img src="/images/illustration-sign-up-mobile.svg" className="block sm:hidden" />
                <img src="/images/illustration-sign-up-desktop.svg" className="hidden sm:block" />
            </div>
            <div className="space-y-4 sm:pt-20 sm:w-80">
                <div className="space-y-4">
                    <p className="text-3xl font-bold text-left text-primary">Stay updated!</p>
                    <p className="text-left">Join 60,000+ product managers receiving monthly updates on:</p>
                </div>
                <div className="space-y-2">
                    <Offer text="Product discovery and building what matters" />
                    <Offer text="Measuring to ensure updates are a success" />
                    <Offer text="And much more!" />
                </div>
                <Subscribe />
            </div>
        </div>
    )
}

export default Home