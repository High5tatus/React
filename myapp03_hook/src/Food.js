import React from 'react';

const Food=({id, name, rating, image}) =>{
    return(
        <div>
             번호 : {id}<br/>
             이름 : {name}<br/>
             평점 : {rating}<br/>
             이미지 :<img src={image} alt={name} /><br/>
             <hr/>
//      </div>
    )
}

// const Food = ({dish}) =>{
//     console.log(dish.id)
//     return (
//         <div>
//             번호 : {dish.id}<br/>
//             이름 : {dish.name}<br/>
//             평점 : {dish.rating}<br/>
//             이미지 :<img src={dish.image} alt={dish.name} /><br/>
//             <hr/>
//         </div>
//     )
// }
export default Food;