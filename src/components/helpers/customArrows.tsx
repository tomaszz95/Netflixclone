export function SampleNextArrow(props: any) {
    const { className, onClick } = props
    return (
        <button className={className} onClick={onClick}>
            &gt;
        </button>
    )
}

export function SamplePrevArrow(props: any) {
    const { className, onClick } = props
    return (
        <button className={className} onClick={onClick}>
            &lt;
        </button>
    )
}
