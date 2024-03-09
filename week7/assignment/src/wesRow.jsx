import "./wes.css";

export function WesRow({filmName, description, releaseYear, image, usesAnimation, criterionCollection, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td style = {{fontWeight: criterionCollection ? "bolder" : "", color: usesAnimation ? "yellow" : ""}}>{filmName}</td>
            
                 <td>{description}</td>
                <td>{releaseYear}</td>
                <td><img src={image} alt={image}/></td>
            
        </tr>
    )
}

