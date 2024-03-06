import "./wes.css";
export function filmRow({filmName, filmDescription, releaseYear, image, usesAnimation, criterionCollection, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td style = {{fontWeight: criterionCollection ? bold : "", textDecoration: usesAnimation ? italic : ""}}>{filmName}</td>
            <td>{releaseYear}</td>
            <td>{filmDescription}</td>
            <td><img src={image} /></td>

        </tr>
    )
}