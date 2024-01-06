
const Footer = ({ style }: { style: string }) => {
    return (
        <div className={`${style}`}>
            <img src="images/client-databiz.svg" className="w-16 h-5" />
            <img src="images/client-audiophile.svg" className="w-16 h-5" />
            <img src="images/client-meet.svg" className="w-16 h-5" />
            <img src="images/client-maker.svg" className="w-16 h-5" />
        </div>
    )
}

export default Footer