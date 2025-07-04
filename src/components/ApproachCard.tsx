export type ApproachCardProps = {
    title: string;
    heading: string;
    subheading: string;
    bgColor: string;
};

export default function ApproachCard({
    title,
    heading,
    subheading,
    bgColor,
}: ApproachCardProps) {
    return (
        <div className={`${bgColor} rounded-3xl mx-20 p-10 `}>
            <div className="w-full h-70 ">
                <div className="text-lg font-bold">{title}</div>
                <div className="text-5xl mt-2">{heading}</div>
                <div className="text-xl mt-6 ">{subheading}</div>
            </div>
        </div>
    );
}
