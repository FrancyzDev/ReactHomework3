import "./Hoods.css"

export function Hoods(props) {
    return (
        <>
            <p className="hood-title">Райони Одеси</p>
            <div className="hood-content">
                {props.hoods.map((hood) => (
                    <p className="hood-text">{hood}</p>
                ))}
            </div>
        </>
    );
}
