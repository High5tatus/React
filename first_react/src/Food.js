import React from "react";

const mydata ={
    "myfood" : [
        {
            name : "햄버거",
            price : "오천원",
            buy : "배달"
        },
        {
            name : "도시락",
            price : "삼천원",
            buy : "포장"
        },
        {
            name : "커피",
            price : "사천원",
            buy : "매장"
        }
    ]
}

const myphone = {
    "phone" : [
        {
            name : "아이폰",
            ram : "6gb",
            touch : "no",
            face : "yes"
        },
        {
            name : "갤럭시 노트",
            ram : "8gb",
            touch : "yes",
            face : "yes"
        },
        {
            name : "갤럭시 S21U",
            ram : "12gb",
            touch : "yes",
            face : "yes"
        },
        {
            name : "아이폰10",
            ram : "8gb",
            touch : "yes",
            face : "yes"
        }
    ]
}

function Food(){
    return(
        <div>
            <h1> Food  컴포넌트(음식)</h1>
            {
                mydata.myfood.map((food, i)=>{
                    console.log(food.name);
                    return(
                        <div key={i}>
                            번호 : {i+1}<br/>
                            이름 : {food.name} <br/>
                            가격 : {food.price} <br/>
                            방법 : {food.buy} <br/><hr/>
                        </div>
                    )
                })
                
            }
            <h1> Food  컴포넌트(폰)</h1>
            {
                myphone.phone.map((phone,j)=>{
                    console.log(phone.name);
                    return(
                        <div key={j}>
                             번호 : {j+1}<br/>
                            이름 : {phone.name} <br/>
                            렘 : {phone.ram} <br/>
                            터치인식 : {phone.touch} <br/>
                            얼굴인식 : {phone.face} <br/><hr/>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default Food;