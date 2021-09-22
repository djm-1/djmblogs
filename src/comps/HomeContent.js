import React from 'react'
import MyCard from './MyCard'
import NewsLetter from './NewsLetter'
import RecentPosts from './RecentPosts'
import UpperCard from './UpperCard'
import PopularPosts from './PopularPosts'

export default function HomeContent(props) {
    return (
        <>
        <div style={{
            margin:'5% auto',
        }}>

        
        <div className="row">
            <div className="col-md-8">
                <UpperCard theme={props.theme}></UpperCard>
            </div>
            <div className="col-md-4">
                <hr className="mt-0" />
                <h6 className="text-center">ABOUT ME</h6>
                <hr />
                <MyCard theme={props.theme}></MyCard>
            </div>
        </div>
        <RecentPosts theme={props.theme}></RecentPosts>
        <PopularPosts theme={props.theme}></PopularPosts>
        <NewsLetter theme={props.theme}></NewsLetter> 
        </div>
               
        
        </>
    )
}
