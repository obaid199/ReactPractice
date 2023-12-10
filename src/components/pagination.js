import {useState} from 'react';
const Pagination = ()=>{
    const [page,setPage] =useState(11)
    return(
        <div className="Pagination">
            <div className="boxes">
            {
                [...Array(10)].map((_,i)=>{
                    return(
                        <span className={page===1 ?" box pageSelected": "box"} key={i}>{i}</span>
                    )
                })
            }
            </div>
            <div className="rightArrow">
               R
            </div>
        </div>
    )
}
export default  Pagination;