import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function CommentSkeleton() {
    return (
        <div className="row my-3 ml-auto mr-auto" style={{width:'90%'}}>
          <div className="col-md-1">
            <Skeleton circle={true} height={50} width={50} className="mb-1" />
          </div>
          <div className="col-md-11">
            <Skeleton height={15} count={3}/>
          </div>
        </div>
    )
}
