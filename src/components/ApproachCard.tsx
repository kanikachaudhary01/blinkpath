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
        <div className={`${bgColor} rounded-3xl px-20 py-10 sticky top-20 left-0 w-3/4 mx-auto h-96`}>
           
                <div className="text-2xl font-bold">{title}</div>
                <div className="text-7xl font-bold mt-2">{heading}</div>
                <div className="text-3xl font-medium mt-6 ">{subheading}</div>
            
        </div>
    );
}
